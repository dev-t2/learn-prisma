import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

const app = firebase.initializeApp(firebaseConfig);

const Auth = app.auth();

interface ISignIn {
  email: string;
  password: string;
}

export const signIn = async ({ email, password }: ISignIn) => {
  const { user } = await Auth.signInWithEmailAndPassword(email, password);

  return user;
};

export const uploadStorage = async (photo: string) => {
  if (photo.startsWith('https://')) {
    return photo;
  }

  const blob: Blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      resolve(xhr.response);
    };

    xhr.onerror = () => {
      reject(new TypeError('Network Request Error'));
    };

    xhr.responseType = 'blob';
    xhr.open('GET', photo, true);
    xhr.send(null);
  });

  const user = Auth.currentUser;
  const ref = app.storage().ref(`/profile/${user?.uid}/avatar.png`);
  const snapshot = await ref.put(blob, { contentType: 'image/png' });

  return await snapshot.ref.getDownloadURL();
};

interface ISignUp {
  photo: string;
  email: string;
  displayName: string;
  password: string;
}

export const signup = async ({
  photo,
  email,
  displayName,
  password,
}: ISignUp) => {
  const { user } = await Auth.createUserWithEmailAndPassword(email, password);
  const photoURL = await uploadStorage(photo);

  await user?.updateProfile({ displayName, photoURL });

  return user;
};
