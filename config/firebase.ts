// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCduxH-Rx03RUFPBpP0xrfczzlb-WFtjLw',
  authDomain: 'netflix-clone-yt-3cf2a.firebaseapp.com',
  projectId: 'netflix-clone-yt-3cf2a',
  storageBucket: 'netflix-clone-yt-3cf2a.appspot.com',
  messagingSenderId: '283953053918',
  appId: '1:283953053918:web:8658bd647d6b51df99824f',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;

export { db, auth };
