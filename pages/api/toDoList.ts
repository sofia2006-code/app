//imports
import { PrismaClient, Prisma } from ".prisma/client";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import type { NextApiRequest, NextApiResponse } from 'next';


//variables
const client = new PrismaClient;

type ResponseData = {
    message: string
    object: {}[]
  }

//esperar front
export async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
){
    
    console.log (req.body, "\n");

    const session = await getServerSession(req, res, authOptions);
    console.log(session);

    //Conseguir usuario loggeado
    const usuario = await client.user.findFirst ({
        where: {
            email: session.user.email,
        }
    })

    //conseguir todas las tareas
    if (req.method === "GET") {
        const tareas = await client.tareasPomodoro.findMany({
            where: {
                userId: usuario.id,
            },
        })
    
        console.log("Tareas: \n", tareas);
        res.status(200).json({object: [tareas.tarea]});
    }

    //Crear tarea
    else if (req.method === "POST") {
        
        try {
            const crearTarea = await client.tareasPomodoro.create({
                data: {
                    userId: usuario.id,
                    tarea: req.body.dato as string, 
                    completado: false,
                 },
            }) 

            console.log("Tarea creada: \n", crearTarea);
            res.status(200);
        } 
        //Tirar error si tarea ya existe
        catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
              // The .code property can be accessed in a type-safe manner
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

    //actualizar tarea (chequear que dato me llego)
    
    else if (req.method === "PUT") {
        
        try {
            const cambiarTarea = await client.tareasPomodoro.update ({
                where: {
                    userId: usuario.id,
                    tarea: req.body.dato,
                },
                data: {
                    tarea: req.body.dato2,
                }
            })    

            console.log("Tarea actualizada: \n", cambiarTarea);
            res.status(200);
        } 
        //Tirar error si tarea ya existe
        catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
              // The .code property can be accessed in a type-safe manner
              if (e.code === 'P2002') {
                console.log(
                  'Unique constraint violation, Hay otra tarea con ese nombre'
                )
                res.status(400).json({message: 'P2002'});
              }
            }
            //throw e
        }

    }

    //borrar tarea
    else if (req.method === "DELETE") {
        const borrarTarea = await client.tareasPomodoro.delete ({
          where: {
            userId: usuario.id,
            tarea: req.body.dato as string,
          },
        })

        console.log("Tarea borrada: \n", borrarTarea);
        res.status(200);
    }
}