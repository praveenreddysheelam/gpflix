// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6ZzaBYklE2m82t8cy8sv7hdsGQ_zlMBI",
  authDomain: "gptflix-a05c6.firebaseapp.com",
  projectId: "gptflix-a05c6",
  storageBucket: "gptflix-a05c6.appspot.com",
  messagingSenderId: "1040054546193",
  appId: "1:1040054546193:web:c7402a4f2f0051e2e8a6b0",
  measurementId: "G-VKLTEHZ89W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();