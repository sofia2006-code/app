//imports
import { PrismaClient } from ".prisma/client";
import { getServerSession } from "next-auth/next"
import Nextauth from "../api/auth/[...nextauth]"

//variables
const prisma = new PrismaClient;

let sesion: [string];

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

//esperar front
export default async function handler(req, res) {
    
    console.log (req.body);
    
    const session = await getServerSession(Nextauth);
    console.log(session);
    
    //Conseguir usuario loggeado
    const usuario = await prisma.user.findFirst ({
        where: {
            sessions: session
        }
    })

    //conseguir todas las tareas
    if (req.method === "GET") {
        await prisma.tareasPomodoro.findMany({
            where: {
                userId: usuario.id,
            },
        })
        
    }

    //crear tarea/timer
    else if (req.method === "POST") {
        res.status(200);

        //crear tarea
        /*
        if (req.body.tipo == "tarea") {
            
            const crearTarea = await prisma.tareasPomodoro.create({
                data: {
                    userId: usuario.id,
                    tarea: req.body.dato as string, 
                 },
            })
            res.status(200).json(crearTarea);
        }

        //crear timer
        else if (req.body.tipo == "timer") {

            await prisma.tiempoPomodoro.create({
                data: {
                    userId: usuario.id,
                    nombre: req.body.dato as string,
                    tiempoTrabajo: req.body.tiempoTrabajo as string,
                    tiempoRecreo: req.body.tiempoRecreo as string, 
                 },
            })
        }
        */
    }

    //borrar tarea/timer
    /*
    else if (req.method === "DELETE") {
        
        //borrar tarea
        if (req.body.tipo == "tarea") {

            await prisma.tareasPomodoro.delete({
                where: {
                  userId: usuario.id,
                  tarea: req.body.dato as string,
                },
            })
        }

        //borar timer
        else if (req.body.tipo == "timer") {

            await prisma.tiempoPomodoro.delete({
                where: {
                  userId: usuario.id,
                  nombre: req.body.dato as string,
                  tiempoTrabajo: req.body.tiempoTrabajo as string,
                  tiempoRecreo: req.body.tiempoRecreo as string, 
                },
            })
        }

    }
    */
}