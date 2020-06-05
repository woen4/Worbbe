import {createDoc, updateDoc} from './firestore';
import {createFile, deleteFile} from './storage';
import auth from '@react-native-firebase/auth';

export function createHelpDoc(data, user) {
  const name = '5AeJCct1e90PtSvTficZ'
    .split('')
    .sort(() => {
      return 0.5 - Math.random();
    })
    .join('');
  const doc = {
    title: data.title,
    description: data.description,
    email: data.email,
  };
  try {
    createDoc('Helps', name, doc);
    return 'Solicitação de suporte enviada!';
  } catch {
    return 'Erro ao enviar pedido de ajuda';
  }
}

export async function updateProfile(data) {
  try {
    const user = auth().currentUser;
    let responseUpdateEmail = 'Perfil atualizado!';
    let newData = {
      name: data.name,
    };

    if (data.avatar != null) {
      await deleteFile('/Avatars/', data.avatarRef);
      const dataFile = await createFile('/Avatars/', data.avatar.path);
      newData.avatarRef = dataFile.name;
      newData.avatarUrl = dataFile.url;
    }
    if (user.email != data.email) {
      await auth()
        .currentUser.updateEmail(data.email)
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            responseUpdateEmail = 'Este e-mail já está em uso.';
          } else if (error.code === 'auth/invalid-email') {
            responseUpdateEmail = 'Email inválido.';
          } else if (error.code === 'auth/requires-recent-login') {
            responseUpdateEmail = 'Autentique-se novamente no aplicativo.';
          }
        });
    }
    updateDoc('Users', user.uid, newData);
    return responseUpdateEmail;
  } catch {
    (error) => {
      console.error(error);
      return 'Erro ao atualizar perfil';
    };
  }
}


export async function createService(data){

}