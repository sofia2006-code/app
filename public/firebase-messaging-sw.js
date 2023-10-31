// Scripts for firebase and firebase messaging
/*importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuXf3ZrVRaQnaSswJY9yuzFPFiVgs7G54",
  authDomain: "pwa-cofocus.firebaseapp.com",
  projectId: "pwa-cofocus",
  storageBucket: "pwa-cofocus.appspot.com",
  messagingSenderId: "483956566609",
  appId: "1:483956566609:web:1b9cf5c78dec8520f3a670"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});*/