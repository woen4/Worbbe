import React, {createContext, useState, useEffect, useContext} from 'react';
import ToastDefault from '../screens/toasts';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const [addressesHirer, setAddressesHirer] = useState();
  useEffect(() => {
    verifyLoged();
  }, []);

  async function verifyLoged() {
    const userAuth = auth().currentUser;
    if (userAuth === null || userAuth === undefined) {
      setUser(null);
    } else {
      const responseUser = await firestore()
        .collection('Users')
        .doc(userAuth.uid)
        .get();
      if (responseUser._data.disabled === true) {
        setUser(null);
      } else {
        ('chegou');
        await getAddresses();
        setUser(responseUser._data);
      }
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
        const responseAddresses = await firestore()
          .collection('Users')
          .doc(response.uid)
          .collection('addresses')
          .get();
        responseRead._data.addresses = responseAddresses._docs;
        setUser(responseRead._data);
      }
    } else {
      setUser(response);
    }*/
  }

  async function fillContext(data) {
    const response = await logIn(data);
    if (response !== undefined) {
      const uid = response.user.uid;

      const responseUser = await firestore().collection('Users').doc(uid).get();
      if (responseUser._data.disabled === true) {
        setUser(null);
        return 'Conta Desativada';
      } else {
        setUser(responseUser._data);
        await getAddresses();
        return 'Usuário Logado';
      }
    } else {
      return response;
    }
  }

  async function refresh() {
    await verifyLoged();
  }

  async function deleteContext() {
    setUser(null);
    const response = await logOut();
    return response;
  }

  async function getAddresses() {
    const uid = auth().currentUser.uid;

    const response = await firestore()
      .collection('Users')
      .doc(uid)
      .collection('addresses')
      .get();
    let count = 0;

    const arrayAddresses = [];
    response._docs.forEach((address) => {
      arrayAddresses.push(address._data);
      arrayAddresses[count].id =
        response._docs[count]._ref._documentPath._parts[3];
      count = count + 1;
    });
    setAddressesHirer(arrayAddresses);
  }

  return (
    <AuthContext.Provider
      value={{
        user: user,
        fillContext,
        deleteContext,
        refresh,
        getAddresses,
        addressesHirer,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth() {
  return useContext(AuthContext);
}

async function logIn(data) {
  const response = await auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        ToastDefault('Email ou senha incorretos');
      } else if (error.code === 'auth/user-not-found') {
        ToastDefault('Conta inexistente');
      } else if (error.code === 'auth/invalid-email') {
        ToastDefault('Email inválido');
      } else if (error.code === 'auth/user-disabled') {
        ToastDefault('Usuário desabilitado');
      } else {
        ToastDefault('Dispotivo bloqueado por atividade incomum');
      }
    });
  return response;
}

async function logOut() {
  try {
    await auth().signOut();
    ToastDefault('Usuário deslogado!');
  } catch {
    ToastDefault('Erro ao deslogar');
  }
}
