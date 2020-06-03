import storage from '@react-native-firebase/storage';

export async function createFile(collection, baseName, file) {
  const name = baseName
    .split('')
    .sort(() => {
      return 0.5 - Math.random();
    })
    .join('');
  const ref = storage().ref(collection + name);
  await ref.putFile(file);
  const url = await ref.getDownloadURL();
  const data = {
    name: name,
    url: url,
  };
  return data;
}

export async function deleteFile(reference, file) {}
