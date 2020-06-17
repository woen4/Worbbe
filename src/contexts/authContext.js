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
    const userAuth = auth().currentUser;
    if (userAuth === null || userAuth === undefined) {
      const response = await firestore()
        .collection('Users')
        .doc(userAuth.uid)
        .get();
      setUser(response._data);
    }
    /*
    if (response != null) {
      const responseRead = await firestore()
        .collection('Users')
        .doc(response.uid)
        .get();
      if (responseRead._data.disabled === true) {
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
      setUser(response);
    }*/
  }

  async function fillContext(data) {
    const response = await logIn(data);

    if (response === undefined || response === null) {
      const uid = auth().currentUser.uid;
      const responseRead = await firestore().collection('Users').doc(uid).get();
      if (responseRead._data.disabled === true) {
        setUser(null);
        return 'Conta Desativada';
      } else {
        setUser(responseRead._data);
        return 'Usuário Logado';
      }
    }
    return response;
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
  await auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then(() => {
      return;
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
}

async function logOut() {
  try {
    await auth().signOut();
    return 'Usuário deslogado!';
  } catch {
    return 'Erro ao deslogar';
  }
}
