import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export async function getServices() {
  const user = auth().currentUser;

  const response = await firestore()
    .collection('Services')
    .where('emailHirer', '==', user.email)
    .get();

  return response._docs;
}
