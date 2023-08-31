//imports
import { PrismaClient, Prisma } from ".prisma/client";
import { authOptions } from "../api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"


//variables
const client = new PrismaClient();

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
    const usuario = await client.user.findFirst ({
        where: {
            email: session.user.email,
        }
    })
  
    //crear tarea/timer
    if (req.method === "POST") {

        //crear tarea
        if (req.body.tipo == "tarea") {
            
            try {
                const crearTarea = await client.tareasPomodoro.create({
                    data: {
                        userId: usuario.id,
                        tarea: req.body.dato as string, 
                        completado: false,
                     },
                })    
                res.status(200);
            } 
            //Tirar error si tarea ya existe
            catch (e) {
                if (e instanceof Prisma.PrismaClientKnownRequestError) {
                  // The .code property can be accessed in a type-safe manner
                  if (e.code === 'P2002') {
                    console.log(
                      'Tunique constraint violation, la tarea ya existe'
                    )
                    res.status(400);
                  }
                }
                //throw e
            }
        }

        //crear timer
        else if (req.body.tipo == "timer") {
            
            try {
                const creatTiempo = await client.tiempoPomodoro.create({
                    data: {
                        userId: usuario.id,
                        nombre: req.body.dato as string,
                        tiempoTrabajo: req.body.timerWork as string,
                        tiempoRecreo: req.body.RestTime as string, 
                     },
                })
                res.status(200);
            } 
            //Tirar error si timer ya existe
            catch (e) {
                if (e instanceof Prisma.PrismaClientKnownRequestError) {
                  // The .code property can be accessed in a type-safe manner
                  if (e.code === 'P2002') {
                    console.log(
                      'Tunique constraint violation, el timer ya existe'
                    )
                    res.status(400);
                  }
                }
                //throw e
            }

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