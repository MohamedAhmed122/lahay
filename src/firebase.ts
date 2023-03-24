// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCqGfFFbZL2D5HYVMh5DduSaIzX-KeR_gM',
  authDomain: 'lahay-lounge.firebaseapp.com',
  projectId: 'lahay-lounge',
  storageBucket: 'lahay-lounge.appspot.com',
  messagingSenderId: '255234086639',
  appId: '1:255234086639:web:178500b3670eecdf30ad1a',
  measurementId: 'G-LEGYGLVDNP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
