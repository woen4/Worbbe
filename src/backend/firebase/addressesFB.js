import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

export async function linkAdress(marker, name, count) {
  const uid = auth().currentUser.uid;

  function createGeoPoint(latitude, longitude) {
    return new firestore.GeoPoint(latitude, longitude);
  }

  const address = {
    name: name,
    cordinates: createGeoPoint(marker.latitude, marker.longitude),
  };
  const increment = firebase.firestore.FieldValue.increment(1);
  //const responseRead = await firestore().collection('Users').doc(uid).get();
  //const count = responseRead._data.addressesCount;
  await firestore()
    .collection('Users')
    .doc(uid)
    .collection('addresses')
    .doc(count.toString())
    .set(address);

  await firestore().collection('Users').doc(uid).update({
    addressesCount: increment,
  });
  return 'Endereço criado';
}

export async function deleteAddress(name) {
  const uid = auth().currentUser.uid;
  const increment = firebase.firestore.FieldValue.increment(-1);
  const ref = firestore()
    .collection('Users')
    .doc(uid)
    .collection('addresses')
    .doc(name);
  ref.delete();
  await firestore().collection('Users').doc(uid).update({
    addressesCount: increment,
  });
}
