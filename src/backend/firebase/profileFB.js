import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

export async function updateProfile(data) {
  try {
    const user = auth().currentUser;
    let responseUpdateEmail = 'Perfil atualizado!';
    let newData = {
      name: data.name,
    };

    if (data.avatar != null) {
      const refOld = storage().refFromURL(data.avatarUrl).path;
      await storage().ref(refOld).delete();

      const refNew = storage().ref('Avatars/' + uuidv4());
      await refNew.putFile(data.avatar.path);
      const url = await refNew.getDownloadURL();

      newData.avatarUrl = url;
    }

    if (user.email != data.email) {
      await user.updateEmail(data.email).catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          responseUpdateEmail = 'Este e-mail já está em uso.';
        } else if (error.code === 'auth/invalid-email') {
          responseUpdateEmail = 'Email inválido.';
        } else if (error.code === 'auth/requires-recent-login') {
          responseUpdateEmail = 'Autentique-se novamente no aplicativo.';
        }
      });
    }
    await firestore().collection('Users').doc(user.uid).update(newData);
    return responseUpdateEmail;
  } catch {
    (error) => {
      console.error(error);
      return 'Erro ao atualizar perfil';
    };
  }
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
