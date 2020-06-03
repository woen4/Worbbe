import auth from '@react-native-firebase/auth';
import {createFile} from './storage';
import {createDoc} from './firestore';

export async function createUser(data) {
  let isClient;
  let uid;
  if (data.isClient === undefined) {
    isClient = false;
  } else {
    isClient = true;
  }

  let response = await auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(() => {
      uid = auth().currentUser.uid;
      return false;
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        return 'Este e-mail já está em uso.';
      }
      if (error.code === 'auth/invalid-email') {
        return 'Email inválido.';
      } else {
        return 'Erro desconhecido, tente novamente ou recorra ao suporte.';
      }
    });
  if (response === false) {
    try {
      //Put photo in storage
      const dataFile = await createFile('/avatars/', uid, data.avatar);
      //Creating a doc of user (Collection, name)
      const doc = {
        name: data.name,
        phone: data.phone,
        isClient: isClient,
        avatarRef: dataFile.name,
        avatarUrl: dataFile.url,
      };
      await createDoc('Users', uid, doc);
    } catch {
      response = 'Erro ao realizar cadastro. Código do erro: 001';
    }
  }
  if (response === false) {
    return false;
  } else {
    return response;
  }
}

export async function signIn(data) {
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
