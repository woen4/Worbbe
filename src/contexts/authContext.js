import React, {createContext, useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';

import {signIn} from '../backend/firebase/auth';
import {readDoc} from '../backend/firebase/firestore';

const AuthContext = createContext({signed: false});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  async function fillContext(data) {
    const response = await signIn(data);
    if (response.uid != null) {
      const reference = {
        collection: 'Users',
        name: response.uid,
      };
      setUser(await readDoc(reference));
    }
    return response.message;
  }

  return (
    <AuthContext.Provider value={{user: user, fillContext}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
