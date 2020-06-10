import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export function createHelpDoc(data) {
  const user = auth().currentUser;
  const doc = {
    title: data.title,
    description: data.description,
    email: user.email,
  };
  try {
    firestore().collection('Helps').doc(null).set(doc);
    return 'Solicitação de suporte enviada!';
  } catch {
    return 'Erro ao enviar pedido de ajuda';
  }
}
