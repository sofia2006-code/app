import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuXf3ZrVRaQnaSswJY9yuzFPFiVgs7G54",
  authDomain: "pwa-cofocus.firebaseapp.com",
  projectId: "pwa-cofocus",
  storageBucket: "pwa-cofocus.appspot.com",
  messagingSenderId: "483956566609",
  appId: "1:483956566609:web:1b9cf5c78dec8520f3a670"
};

//https://www.audreyhal.com/blog/push-notifications-with-firebase-in-react 

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
    return getToken(messaging, { vapidKey: "BNPYLNnUjhKDPOZmxUCvw9ILv5c2D4vgkXppb2ELg37f-hOLi032gP_r1PXvG0f3WsEsy-UNwPXJRftLFeG0j54" })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
    })
        .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
};

//notificaciones con app de fondo 
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });

  

//estop tampoco anda (viejo)
/*
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
*/


