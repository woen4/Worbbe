import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export async function CreateService(data) {
  data.emailHirer = auth().currentUser.email;
  data.finished = false;
  data.hiredsCount = 0;
  data.hireds = [];
  try {
    await firestore().collection('Services').doc(null).set(data);
    return;
  } catch {
    return 'Erro ao solicitar serviço';
  }
}
