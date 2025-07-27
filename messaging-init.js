
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

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
const db = getFirestore(app);

document.getElementById('enable-notifications')?.addEventListener('click', async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: "BLOAk7Zxjljd293LeS-KStSw9RSfFSTlOwusah4KebhfYSV4cD6LIIeLN8VTxySB_OHRW0Wjzrjin97hIr5_KlM"
      });
      console.log("Token received:", token);
      localStorage.setItem("notificationPrompted", "true");
      await addDoc(collection(db, "deviceTokens"), {
        token: token,
        createdAt: new Date().toISOString()
      });
    }
    window.location.href = "https://sonderalife.mykajabi.com/login";
  } catch (err) {
    console.error("Notification error:", err);
    window.location.href = "https://sonderalife.mykajabi.com/login";
  }
});
