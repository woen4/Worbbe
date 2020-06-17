import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export function CreateService(data) {
  const uid = auth().currentUser.uid;
  const doc = {
    uidHirer: uid,
    emailHired: null,
    finished: false,
    description: data.description,
    timeEnd: data.timeEnd,
    timeStart: data.timeStart,
    price: data.price,
    date: data.date,
    tag: data.tag,
    location: data.address,
    field: data.field,
    subField: data.subField,
  };
  try {
    firestore().collection('Services').doc(null).set(doc);
    return true;
  } catch {
    return;
  }
}
