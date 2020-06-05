import React, {createContext, useState, useEffect, useContext} from 'react';
import {logIn, logOut} from '../backend/firebase/auth';
import {readDoc} from '../backend/firebase/firestore';
import auth from '@react-native-firebase/auth';
const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    verifyLoged();
  }, []);

  async function verifyLoged() {
    const response = auth().currentUser;
    if (response != null) {
      const responseRead = await readDoc('Users', response.uid);
      if (responseRead._data.disable === true) {
        setUser(null);
      } else {
        setUser(responseRead._data);
      }
    } else {
      setUser(null);
    }
  }

  async function fillContext(data) {
    const response = await logIn(data);
    if (response.uid != null) {
      const responseRead = await readDoc('Users', response.uid);
      if (responseRead._data.disable === true) {
        setUser(null);
        response.message = 'Conta Desativada';
      } else {
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
