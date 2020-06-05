import firestore from '@react-native-firebase/firestore';

export async function createDoc(collection, name, doc) {
  await firestore().collection(collection).doc(name).set(doc);
}

export async function readDoc(collection, name) {
  return await firestore().collection(collection).doc(name).get();
}

export async function deleteDoc(data) {}

export async function updateDoc(collection, name, data) {
  await firestore().collection(collection).doc(name).update(data);
}
