import firebase from 'firebase';

export interface IState {
  user: firebase.User | null;
  isLoading: boolean;
}

export interface ISetUser {
  user: firebase.User | null;
}

export interface ISetIsLoading {
  isLoading: boolean;
}
