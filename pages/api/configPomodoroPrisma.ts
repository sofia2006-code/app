import { PrismaClient } from ".prisma/client";

//no entiendo por que no puedo importar esto 

import { getServerSession } from "next-auth/next"
import Nextauth from "../api/auth/[...nextauth]"

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

        const session = await getServerSession(req, res, Nextauth)
        
        prisma.user.findFirst ({
            where: {
                sessions: session
            }
        })

    }
}

// handler(req, res)
//     .catch(e => {
//         console.error(e.message);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     })