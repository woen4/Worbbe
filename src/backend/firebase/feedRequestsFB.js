import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export async function getRequests(field) {
  const response = await firestore()
    .collection('Services')
    .where('field', '==', field)
    .get();

  let i;
  for (i = 0; i < response._docs.length; i++) {
    response._docs[i]._data.serviceID =
      response._docs[i]._ref._documentPath._parts[1];
  }
  return response._docs;
}

export async function acceptRequest(serviceID, name, avatarUrl) {
  const {email} = auth().currentUser;
  const responseService = await firestore()
    .collection('Services')
    .doc(serviceID)
    .get();
  const {hireds} = responseService._data;
  if (responseService._data.hireds.length <= 5) {
    const positionHired = responseService._data.hireds.length;
    let hiredsData = [];
    hiredsData[positionHired] = {
      name: name,
      avatarUrl: avatarUrl,
      bloqued: false,
    };
    hireds[positionHired] = email;
    const newHired = {hireds: hireds, hiredsData: hiredsData};
    await firestore().collection('Services').doc(serviceID).update(newHired);
  }
}
