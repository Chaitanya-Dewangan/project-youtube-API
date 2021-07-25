import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVptl77VWZf7QZu4l8fxz2AkEisUPHQ80",
  authDomain: "iyoutudein.firebaseapp.com",
  projectId: "iyoutudein",
  storageBucket: "iyoutudein.appspot.com",
  messagingSenderId: "1042941360348",
  appId: "1:1042941360348:web:95233bd3db5a2383d2dc19",
  measurementId: "G-JS3DN493BM",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();