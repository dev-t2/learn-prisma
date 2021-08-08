import firebase from 'firebase';

import firebaseConfig from './firebaseConfig';

const app = firebase.initializeApp(firebaseConfig);

export default app;
