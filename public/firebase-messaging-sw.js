import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuXf3ZrVRaQnaSswJY9yuzFPFiVgs7G54",
  authDomain: "pwa-cofocus.firebaseapp.com",
  projectId: "pwa-cofocus",
  storageBucket: "pwa-cofocus.appspot.com",
  messagingSenderId: "483956566609",
  appId: "1:483956566609:web:1b9cf5c78dec8520f3a670"
};
  
function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BNPYLNnUjhKDPOZmxUCvw9ILv5c2D4vgkXppb2ELg37f-hOLi032gP_r1PXvG0f3WsEsy-UNwPXJRftLFeG0j54",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
