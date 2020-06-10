import React, {createContext, useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    verifyLoged();
  }, []);

  async function verifyLoged() {
    const response = auth().currentUser;
    if (response != null) {
      const responseRead = await firestore()
        .collection('Users')
        .doc(response.uid)
        .get();
      if (responseRead._data.disable === true) {
        setUser(null);
      } else {
        const responseReadSub = await firestore()
          .collection('Users')
          .doc(response.uid)
          .collection('addresses')
          .get();
        responseRead._data.addresses = responseReadSub._docs;
        setUser(responseRead._data);
      }
    } else {
      setUser(null);
    }
  }

  async function fillContext(data) {
    const response = await logIn(data);
    if (response.uid != null) {
      const responseRead = await firestore()
        .collection('Users')
        .doc(response.uid)
        .get();
      if (responseRead._data.disable === true) {
        setUser(null);
        response.message = 'Conta Desativada';
      } else {
        const responseReadSub = await firestore()
          .collection('Users')
          .doc(response.uid)
          .collection('addresses')
          .get();
        responseRead._data.addresses = responseReadSub._docs;
        setUser(responseRead._data);
      }
    }
    return response.message;
  }

  async function refresh() {
    await verifyLoged();
  }

  async function deleteContext() {
    setUser(null);
    const response = await logOut();
    return response;
  }

  return (
    <AuthContext.Provider
      value={{user: user, fillContext, deleteContext, refresh}}>
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth() {
  return useContext(AuthContext);
}

async function logIn(data) {
  let back = {
    message: 'Logado com sucesso',
    uid: null,
  };
  const response = await auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then(() => {
      return false;
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        return 'Email ou senha incorretos';
      } else if (error.code === 'auth/user-not-found') {
        return 'Conta inexistente';
      } else if (error.code === 'auth/invalid-email') {
        return 'Email inválido';
      } else {
        console.error(error);
      }
    });
  if (response === false) {
    back.uid = auth().currentUser.uid;
  } else {
    back.message = response;
  }

  return back;
}

async function logOut() {
  try {
    await auth().signOut();
    return 'Usuário deslogado!';
  } catch {
    return 'Erro ao deslogar';
  }
}
