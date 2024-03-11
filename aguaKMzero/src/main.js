import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwVS6KqHPTY2AEldIJ0-Kep09-x2_bVEA",
  authDomain: "refill-impact-dashboard-6c9e9.firebaseapp.com",
  projectId: "refill-impact-dashboard-6c9e9",
  storageBucket: "refill-impact-dashboard-6c9e9.appspot.com",
  messagingSenderId: "1017751068971",
  appId: "1:1017751068971:web:ff5a96966454551f22256e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).mount('#app')
