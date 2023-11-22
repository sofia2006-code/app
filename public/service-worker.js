/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

//todo esto copypaste, adaptar a programa despues
//ESTO ES FRONT, DESPUES PEDIRLE A SOFI QUE CHECKEE Y AYUDE
//las notificaciones son para el timer pomodoro, yo diria que cuando esto se ejecute o cuando abris la app
//(especificando que notificaciones son para pomnodoro, o al comenzar un timer, que solo la primera vez te pida
// acceso a notificaciones)

var data;
self.addEventListener("push", (event) => {
  if (!event.target) return "error";
  data = event.data.json();
  console.log(data);
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "./favicon.ico", //VER QUE FOTO PONER
      Image: "./favicon.ico", //VER QUE FOTO PONER
    })
  );
});
self.addEventListener('notificationclick', (event) => {
  const url=data.url;
  console.log(url);
  event.waitUntil(self.clients.openWindow(""+url));
  event.notification.close();
});