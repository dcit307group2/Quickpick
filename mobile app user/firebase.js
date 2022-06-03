// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa2789RXNJ2-yhGZhvPldbC1hXls8McAE",
  authDomain: "quickpick-auth.firebaseapp.com",
  projectId: "quickpick-auth",
  storageBucket: "quickpick-auth.appspot.com",
  messagingSenderId: "384219604746",
  appId: "1:384219604746:web:ad4f51aa1e3ab93e523cf3"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };