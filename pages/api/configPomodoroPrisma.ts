//imports
import { PrismaClient } from ".prisma/client";
import { authOptions } from "../api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"


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
    
    const session = await getServerSession(req, res, authOptions);
    
   //Conseguir usuario loggeado
    const usuario = await prisma.user.findFirst ({
        where: {
            email: session.user.email,
        }
    })
  
    //crear tarea/timer
    if (req.method === "POST") {
        //res.status(200);

        //crear tarea (no esta andando)
        if (req.body.tipo == "tarea") {
            
            const crearTarea = await prisma.tareasPomodoro.create({
                data: {
                    userId: usuario.id,
                    tarea: req.body.dato as string, 
                 },
            })
            console.log(crearTarea);
            res.status(200);
            //res.status(200).json(crearTarea);
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