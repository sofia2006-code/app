import { PrismaClient } from ".prisma/client";
//tengo que importar algo para tener getsession (sacar sesion nextauth)

const prisma = new PrismaClient;

let sesion: string;

let tarea: string;
let tiempoTrabajo: string;
let tiempoRecreo: string;
let insTarea: [number, string];

let idTarea : number;
let idTimer: number;

/* Los datos me los va a mandar asi front
    {
        tipo: tarea
        dato: diagrama de bloques
    }

    {
        tipo: timer
        dato: larguisimo
        tiempoTrabajo: 01:30:00
        tiempoRecreo: 00:30:00
    }
*/

export async function handler(req, res) {
    console.log(req.body)
    if (req.method === "POST") {
        res.status(200);

        //necesito importar getsession o ver como conseguir id de sesion
        //sesion = await getSession({req});
        
        // prisma.user.findFirst ({
        //     where: {
        //         id: sesion
        //     }
        // })

    }
}

// handler(req, res)
//     .catch(e => {
//         console.error(e.message);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     })