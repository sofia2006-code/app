/*
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useEffect, useState } from "react";

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

const useFirebase = () => {

  const [messaging, setMessaging] = useState();

  useEffect(() => {
    initializeApp(firebaseConfig);
    setMessaging(getMessaging());
  })

  const requestForToken = () => {
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
  const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        console.log("payload", payload)
        resolve(payload);
      });
    });


  return {
    requestForToken,
    onMessageListener
  }
}

export default useFirebase;
*/

