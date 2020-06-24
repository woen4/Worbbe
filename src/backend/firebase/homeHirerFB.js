import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export async function getServices() {
  const user = auth().currentUser;

  const response = await firestore()
    .collection('Services')
    .where('emailHirer', '==', user.email)
    .get();

  let i;
  for (i = 0; i < response._docs.length; i++) {
    response._docs[i]._data.serviceID =
      response._docs[i]._ref._documentPath._parts[1];
  }
  return response._docs;
}
