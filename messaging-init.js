import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzjbq339_QizKUVygfbX2WjQ5Mb_4SLys",
  authDomain: "sondera-pwa.firebaseapp.com",
  projectId: "sondera-pwa",
  storageBucket: "sondera-pwa.firebasestorage.app",
  messagingSenderId: "1006942535696",
  appId: "1:1006942535696:web:f136db480044a602e30a95",
  measurementId: "G-NXX9DYK611"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    getToken(messaging, { vapidKey: "BLOAk7Zxjljd293LeS-KStSw9RSfFSTlOwusah4KebhfYSV4cD6LIIeLN8VTxySB_OHRW0Wjzrjin97hIr5_KlM" }).then((currentToken) => {
      if (currentToken) {
        console.log("Token received:", currentToken);
      } else {
        console.warn("No registration token available. Request permission to generate one.");
      }
    }).catch((err) => {
      console.error("An error occurred while retrieving token. ", err);
    });
  }
});

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
});