//imports
import { PrismaClient } from ".prisma/client";
import { getServerSession } from "next-auth/next"
import Nextauth from "../api/auth/[...nextauth]"

//variables
const prisma = new PrismaClient;
let sesion: string;
let tarea: string;

//esperar front
export async function handler(req, res) {
    
    console.log (req.body);

    const session = await getServerSession(Nextauth);
    console.log(session);

    //Conseguir usuario loggeado
    const usuario = await prisma.user.findFirst ({
        where: {
            sessions: session
        }
    })

    //Crear tarea
    if (req.method === "POST") {
        
        await prisma.tareasPomodoro.create({
            data: {
                userId: usuario.id,
                tarea: req.body.dato as string, 
             },
        })
    }

    //conseguir todas las tareas
    else if (req.method === "GET") {
        await prisma.tareasPomodoro.findMany({
            where: {
                userId: usuario.id,
            },
        })
    }

    //actualizar tarea (chequear que dato me llego)
    /*
    else if (req.method === "PUT") {
        await prisma.tareasPomodoro.update ({
            where: {
                userId: usuario.id,
                tarea: req.body.dato,
            },
            data: {
                tarea: req.body.dato2,
            }
        })
    }
    */

    //borrar tarea
    else if (req.method === "DELETE") {
        await prisma.tareasPomodoro.delete ({
          where: {
            userId: usuario.id,
            tarea: req.body.dato as string,
          },
        })
    }
}