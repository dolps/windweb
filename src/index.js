import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDRnQsTswBcCBmweQK2kp1NuWsYLmxwpJM",
  authDomain: "windwebbb.firebaseapp.com",
  projectId: "windwebbb",
  storageBucket: "windwebbb.appspot.com",
  messagingSenderId: "105454599429",
  appId: "1:105454599429:web:adb7b9fbe2e1e9ce41cb6c"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
