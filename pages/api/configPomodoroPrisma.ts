//imports
import { PrismaClient, Prisma } from ".prisma/client";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
//import type { NextApiRequest, NextApiResponse } from 'next';

//variables
const client = new PrismaClient();

// type ResponseData = {
//   message: string
// }

/* Metodo de comunicacion con Front-End
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
export default async function handler(req, res){

    console.log (req.body, "\n");
    
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

                console.log("Tarea creada: \n", crearTarea);
                res.status(200).json(crearTarea.tarea);
            } 
            //Tirar error si tarea ya existe
            catch (e) {
                if (e instanceof Prisma.PrismaClientKnownRequestError) {
                  if (e.code === 'P2002') {
                    console.log(
                      'Unique constraint violation, la tarea ya existe'
                    )
                    res.status(400).json({message: 'P2002'});
                  }
                }
                //throw e
            }
        }

        //crear timer
        else if (req.body.tipo == "timer") {
            
            try {
                const crearTimer = await client.tiempoPomodoro.create({
                    data: {
                        userId: usuario.id,
                        nombre: req.body.dato as string,
                        tiempoTrabajo: req.body.timerWork as string,
                        tiempoRecreo: req.body.RestTime as string, 
                     },
                })

                console.log("Timer creado: \n", crearTimer);
                res.status(200).json(crearTimer.nombre, crearTimer.tiempoTrabajo, crearTimer.tiempoRecreo);
            } 
            //Tirar error si timer ya existe
            catch (e) {
                if (e instanceof Prisma.PrismaClientKnownRequestError) {
                  if (e.code === 'P2002') {
                    console.log(
                      'Unique constraint violation, el timer ya existe'
                    )
                    res.status(400).json({message: 'P2002'});
                  }
                }
                //throw e
            }
        }
    }

    //borrar tarea/timer
    
    else if (req.method === "DELETE") {
        
        //borrar tarea
        if (req.body.tipo == "tarea") {

            const borrarTarea = await client.tareasPomodoro.delete({
                where: {
                  userId: usuario.id,
                  tarea: req.body.dato as string,
                },
            })
            
            console.log("Tarea borrada: \n", borrarTarea);
            res.status(200).json(borrarTarea.tarea);
        }

        //borar timer
        else if (req.body.tipo == "timer") {

            const borrarTimer = await client.tiempoPomodoro.delete({
                where: {
                  userId: usuario.id,
                  nombre: req.body.dato as string,
                },
            })

            console.log("timer borrado: \n", borrarTimer);
            res.status(200).json(borrarTimer.nombre);
        }

    }
    
}