import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyBb0D0AYAnQjxUOuaKRHCezkXLlHoN5Lno",
  authDomain: "tt-auth.firebaseapp.com",
  projectId: "tt-auth",
  storageBucket: "tt-auth.appspot.com",
  messagingSenderId: "339582581994",
  appId: "1:339582581994:web:8a0330719faa700d18ab93",
  measurementId: "G-64NDW6C9R5",
  databaseURL: 'https://tt-auth-default-rtdb.firebaseio.com/',
});

export default app; 

export const database = firebase.database();