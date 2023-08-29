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

/*
interface tarea {
    user: string;
    tarea: string;
}
*/

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

    const session = await getServerSession(Nextauth);
    console.log(session);
        
    const usuario = await prisma.user.findFirst ({
        where: {
            sessions: session
        }
        //tengo que tomar solo la ID
    })

    if (req.method === "POST") {
        res.status(200);

        if (req.body.tipo == "tarea") {

            await prisma.tareasPomodoro.create({
                data: {
                    userId: usuario.id,
                    tarea: req.body.dato, 
                 },
            })
        }

        else if (req.body.tipo == "timer") {

            await prisma.tiempoPomodoro.create({
                data: {
                    userId: usuario.id,
                    nombre: req.body.dato,
                    tiempoTrabajo: req.body.tiempoTrabajo,
                    tiempoRecreo: req.body.tiempoRecreo, 
                 },
            })
        }
    }
    else if (req.method === "DELETE") {
        
        if (req.body.tipo == "tarea") {

            await prisma.tareasPomodoro.delete({
                where: {
                  userId: usuario.id,
                  tarea: req.body.dato,
                },
            })
        }

        else if (req.body.tipo == "timer") {

            await prisma.tiempoPomodoro.delete({
                where: {
                  userId: usuario.id,
                  nombre: req.body.dato,
                  tiempoTrabajo: req.body.tiempoTrabajo,
                  tiempoRecreo: req.body.tiempoRecreo, 
                },
            })
        }

    }
}

// handler(req, res)
//     .catch(e => {
//         console.error(e.message);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     })