// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCy4ELpEsQMWdHfXy9rT9RwyBrTqugX36w',
  authDomain: 'kanhaiya-portfolios.firebaseapp.com',
  databaseURL: 'https://kanhaiya-portfolios.firebaseio.com',
  projectId: 'kanhaiya-portfolios',
  storageBucket: 'kanhaiya-portfolios.appspot.com',
  messagingSenderId: '994702590448',
  appId: '1:994702590448:web:3b5b29d699a86e3bce1d35',
  measurementId: 'G-547Z57R0KW',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const database = getFirestore(firebaseApp);

export { firebaseApp, analytics, database };
