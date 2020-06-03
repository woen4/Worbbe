import firestore from '@react-native-firebase/firestore';

export async function createDoc(collection, name, doc) {
  await firestore().collection(collection).doc(name).set(doc);
}

export async function readDoc(reference) {
  return await firestore()
    .collection(reference.collection)
    .doc(reference.name)
    .get();
}

export async function deleteDoc(data) {}

export async function updateDoc(data) {}
