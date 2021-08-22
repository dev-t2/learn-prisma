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
