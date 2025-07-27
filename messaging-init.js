import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzjbq339_QizKUVygfbX2WjQ5Mb_4SLys",
  authDomain: "sondera-pwa.firebaseapp.com",
  projectId: "sondera-pwa",
  storageBucket: "sondera-pwa.appspot.com",
  messagingSenderId: "1006942535696",
  appId: "1:1006942535696:web:f136db480044a602e30a95",
  measurementId: "G-NXX9DYK611"
};

const app = initializeApp(firebaseConfig);

async function requestPermission() {
  try {
    const registration = await navigator.serviceWorker.register('./firebase-messaging-sw.js', { scope: './' });
    const messaging = getMessaging(app);
    const token = await getToken(messaging, {
      vapidKey: "BLOAk7Zxjljd293LeS-KStSw9RSfFSTlOwusah4KebhfYSV4cD6LIIeLN8VTxySB_OHRW0Wjzrjin97hIr5_KlM",
      serviceWorkerRegistration: registration
    });
    console.log("Push notification token:", token);
    alert("Push notification permission granted.");
  } catch (err) {
    console.error("Error requesting permission:", err);
    alert("Notification permission failed.");
  }
}
window.requestPermission = requestPermission;
