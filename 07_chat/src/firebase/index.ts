import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { IMessage } from 'react-native-gifted-chat';

import firebaseConfig from './firebaseConfig';

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = app.auth();

interface ISignIn {
  email: string;
  password: string;
}

export const signIn = async ({ email, password }: ISignIn) => {
  await auth.signInWithEmailAndPassword(email, password);
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

  const ref = app.storage().ref(`/profile/${auth.currentUser?.uid}/avatar.png`);
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
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  const photoURL = await uploadStorage(photo);

  await user?.updateProfile({ displayName, photoURL });

  return user;
};

export const updateUserInfo = async (photo: string) => {
  const photoURL = await uploadStorage(photo);

  await auth.currentUser?.updateProfile({ photoURL });
};

export const signOut = async () => {
  await auth.signOut();
};

interface ICreateChannel {
  title: string;
  description: string;
}

export const createChannel = async ({ title, description }: ICreateChannel) => {
  const newChannel = firestore.collection('channels').doc();
  const date = Date.now();

  await newChannel.set({
    id: newChannel.id,
    title,
    description,
    createdAt: date,
    updatedAt: date,
  });

  return newChannel;
};

export type ChannelType = {
  id: string;
  title: string;
  description: string;
  createdAt: number;
  updatedAt: number;
};

interface ICreateMessage {
  channelId: string;
  message: IMessage;
}

export const createMessage = async ({ channelId, message }: ICreateMessage) => {
  const date = Date.now();

  const newMessage = await firestore
    .collection('channels')
    .doc(channelId)
    .collection('messages')
    .doc(`${message._id}`)
    .set({
      ...message,
      createdAt: date,
      updatedAt: date,
    });

  return newMessage;
};
