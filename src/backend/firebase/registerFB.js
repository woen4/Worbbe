import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export async function createUser(data) {
  let isClient;
  let uid;
  if (data.isClient === undefined) {
    isClient = false;
  } else {
    isClient = true;
  }

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
      c,
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
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
      // const ref = storage().ref('Avatars/' + uuidv4());
      // await ref.putFile(data.avatar);
      // const url = await ref.getDownloadURL();

      //Creating a doc of user (Collection, name)
      const doc = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        isClient: isClient,
        disabled: !isClient,
        avatarUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1024px-Missing_avatar.svg.png',
        addressesCount: 0,
      };
      await firestore().collection('Users').doc(uid).set(doc);
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
