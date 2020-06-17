import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export async function getServices() {
  const uid = auth().currentUser.uid;
  const response = await firestore()
    .collection('Services')
    .where('uidHirer', '==', uid)
    .get();

  return response._docs;
}
