import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

const app = firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();

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
      reject(new TypeError('Network request failed'));
    };

    xhr.responseType = 'blob';

    xhr.open('GET', photo, true);
    xhr.send(null);
  });

  const ref = app.storage().ref(`/profile/${Auth.currentUser?.uid}/avatar.png`);
  const snapshot = await ref.put(blob, { contentType: 'image/png' });
  const photoUrl = await snapshot.ref.getDownloadURL();

  return photoUrl;
};

interface ISignUp {
  photo: string;
  email: string;
  displayName: string;
  password: string;
}

export const signUp = async ({
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

export const updateUserInfo = async (photo: string) => {
  const photoURL = await uploadStorage(photo);

  await Auth.currentUser?.updateProfile({ photoURL });

  return Auth.currentUser;
};

export const signOut = async () => {
  await Auth.signOut();
};

interface ICreateChannel {
  title: string;
  description: string;
}

export const createChannel = async ({ title, description }: ICreateChannel) => {
  const channel = database.collection('channels').doc();
  const date = Date.now();

  await channel.set({
    id: channel.id,
    title,
    description,
    createdAt: date,
    updatedAt: date,
  });

  return channel.id;
};

export type ChannelType = {
  id: string;
  title: string;
  description: string;
  createdAt: number;
  updatedAt: number;
};
