import storage from '@react-native-firebase/storage';

export async function createFile(collection, file) {
  const name = '6AeJCYt1eU0PtSvTfiLZ'
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

export async function deleteFile(collection, name) {
  const ref = storage().ref(collection + name);
  await ref.delete();
}
