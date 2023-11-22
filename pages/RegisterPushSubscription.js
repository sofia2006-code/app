//registrar SW
export function registerServiceWorker() {
  return navigator.serviceWorker
    .register("../public/service-worker.js") //hay que ver si esta bien enrutado
    .then(function (registration) {
      return registration;
    })
    .catch(function (err) {
      alert(err);
    });
}

//perimso a usuario para suscribirlo
function askPermission() {
  return new Promise(function (resolve, reject) {
    const permissionResult = Notification.requestPermission(function (result) {
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  }).then(function (permissionResult) {
    if (permissionResult !== 'granted') {
      throw new Error("We weren't granted permission.");
    }
    else if (permissionResult === "granted") {
    subscribeUserToPush();
  }
  });
}

//Suscribir a usuario 
export function subscribeUserToPush() {
  void navigator.serviceWorker
    .register("../public/service-worker.js") // hay que ver si esta bien enrutado
    .then(function (registration) {
      const subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey:
          "BEOFCrJM6FyyHQ2vPbvlHNjhBZKiKNx6YQU2kj5LWmcbs0yhqNbIk2Egf-d2qFFMAjmQcSdbyKGK2Xi6liPUtnE", //clave publica generada en https://web-push-codelab.glitch.me/
      };

      return registration.pushManager.subscribe(subscribeOptions);
    })
    .then((pushSubscription) => {
      return pushSubscription;
    });
}


/*

(no entiendo en que archivo deberia estar esto)
//Enviar suscripcion a servidor 
export default async function handler(req, res){

    if (req.method === "POST") {
        if (!req.body || !req.body.endpoint) {
            // Not a valid subscription.
            res.status(400);
            res.setHeader('Content-Type', 'application/json');
            res.send(
              JSON.stringify({
                error: {
                  id: 'no-endpoint',
                  message: 'Subscription must have an endpoint.',
                },
              }),
            );
            return false;
          }
          return true;        
    }

    //ver cpmo guardar subscripcion en DB si es valida

}
*/
