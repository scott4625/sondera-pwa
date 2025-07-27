importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDzjbq339_QizKUVygfbX2WjQ5Mb_4SLys",
  authDomain: "sondera-pwa.firebaseapp.com",
  projectId: "sondera-pwa",
  storageBucket: "sondera-pwa.appspot.com",
  messagingSenderId: "1006942535696",
  appId: "1:1006942535696:web:f136db480044a602e30a95",
  measurementId: "G-NXX9DYK611"
});

const messaging = firebase.messaging();
