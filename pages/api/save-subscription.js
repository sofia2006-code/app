/*
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