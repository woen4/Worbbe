import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

export async function getListServices() {
  const user = auth().currentUser;

  const response = await firebase
    .firestore()
    .collection('Services')
    .where('hireds', 'array-contains', user.email)
    .get();
  return response._docs;
  /*
  let count = 0;
  const arrayAddresses = [];
  response._docs.forEach((address) => {
    arrayAddresses.push(address._data);
    arrayAddresses[count].id =
      response._docs[count]._ref._documentPath._parts[3];
    count = count + 1;
  });*/
}
