
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

const vapidKey = "BLOAk7Zxjljd293LeS-KStSw9RSfFSTlOwusah4KebhfYSV4cD6LIIeLN8VTxySB_OHRW0Wjzrjin97hIr5_KlM";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    return getToken(messaging, { vapidKey });
  } else {
    console.warn("Permission not granted for notifications");
  }
}).then((token) => {
  if (token) {
    console.log("Push token:", token);
    // You can send this to your server
  }
});

onMessage(messaging, (payload) => {
  console.log("Message received in foreground:", payload);
});
