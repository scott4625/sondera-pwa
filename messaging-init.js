import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging.js";

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
const messaging = getMessaging(app);

document.getElementById("notifyBtn").addEventListener("click", async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: "BLOAk7Zxjljd293LeS-KStSw9RSfFSTlOwusah4KebhfYSV4cD6LIIeLN8VTxySB_OHRW0Wjzrjin97hIr5_KlM"
      });
      document.getElementById("status").innerText = "Notifications enabled!";
      console.log("Token:", token);
    } else {
      document.getElementById("status").innerText = "Permission denied.";
    }
  } catch (err) {
    console.error(err);
    document.getElementById("status").innerText = "Error requesting permission.";
  }
});
