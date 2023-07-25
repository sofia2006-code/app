//Variables mysql
const mysql = require ('mysql');

//Conexion DB
const conexion  = mysql.createConnection({
    
    host: 'localhost',
    database: 'tafocus',
    user: 'root',
    password: 'rootroot'

});

/*
 const express = require("express");
 const app = express();
 const port = 3000;

 app.use(express.json());
 */

//pantalla pomodoro

//esta pantalla se encarga de esperar a que el usuario quiera borrar o insertar timers o tareas en pomodoro. En ese caso calculo
//que escuchara un post con los datos de que quiere borrar o insertar para despues hacer el sql desde aca 

//tengo que postear desde login el id de usuario y recibirlo desde aca

//tengo que recibir de variable global o post lo que sea el idusu que se sacaria en login (POR AHORA HARDCODEADO)

let idUsu = 1;

let tarea;
let tiempoTrabajo;
let tiempoRecreo;

let idTarea;
let idTimer;

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

/*
//recibir post o delete de tareas/timers
app.post ("/configuracionTimer", (req, res) => {

    res.status(200);

    if (req.body.tipo == "tarea") {

        insTarea = [idUsu, req.body.dato];        

        conexion.query('INSERT INTO tareaspomodoro (idUsu, tarea) VALUES (?)', [insTarea], function (err, resultsTarea){ 
            
            if (err) {
                res.send("Error consultando: " + err);
                return;
            }

            else {
                console.log("tarea '"+insTarea[1]+"' insertada en usuario "+idUsu+"")
                res.send(resultsTarea);
                //solo lo meto a DB y front se encarga de displayear todas las tareas (que le mande en login) + la nueva
            } 
        });
    }

    else if (req.body.tipo == "timer")
    {

        insTimer = [idUsu, req.body.dato, req.body.tiempoTrabajo, req.body.tiempoRecreo];

        conexion.query('INSERT INTO tiempopomodoro (idUsu, nombre, tiempoTrabajo, tiempoRecreo) VALUES (?)', [insTimer], function (err, resultsTimer){ 
            
            if (err) {
                res.send("Error consultando: " + err);
                return;
            }

            else {
                console.log("timer '"+insTimer[1]+"' insertado en usuario "+idUsu+"")
                res.send(resultsTimer);
                //solo lo meto a DB y front se encarga de displayear todas las tareas (que le mande en login) + la nueva
            } 
        });
    }
});

app.delete ("/configuracionTimer", (req, res) => {

    res.status(200);

    if (req.body.tipo == "tarea") {

        tarea = req.body.dato;        

        conexion.query('SELECT id FROM tareaspomodoro WHERE idUsu = ? AND tarea = ?', [idUsu, tarea], function (err, resultsidTarea){ 
            
            if (err) {
                res.send("Error consultando: " + err);
                return;
            }

            else {

                idTarea = resultsidTarea[0].id;

                conexion.query ('DELETE FROM tareaspomodoro WHERE id = ?', [idTarea], function (err, resultsTarea){
                    if (err) {
                        res.send("Error consultando: " + err);
                        return;
                    }

                    else {
                        console.log("tarea '"+tarea+"' borrada en usuario "+idUsu+"")
                        res.send(resultsTarea);
                        //solo lo meto a DB y front se encarga de displayear todas las tareas (que le mande en login) - la borrada
                    } 
                });
            }
        });


    }

    else if (req.body.tipo == "timer")
    {

        timer = req.body.dato;
        tiempoTrabajo = req.body.tiempoTrabajo;
        tiempoRecreo = req.body.tiempoRecreo;
        
        conexion.query(`SELECT id FROM tiempopomodoro 
        WHERE idUsu = ? AND nombre = ? AND tiempoTrabajo = ? AND tiempoRecreo = ?`, [idUsu, timer, tiempoTrabajo, tiempoRecreo], function (err, resultsidTimer){ 
            
            if (err) {
                res.send("Error consultando: " + err);
                return;
            }

            else {

                idTimer = resultsidTimer[0].id;

                conexion.query ('DELETE FROM tiempopomodoro WHERE id = ?', [idTimer], function (err, resultsTimer){
                    if (err) {
                        res.send("Error consultando: " + err);
                        return;
                    }

                    else {
                        console.log("timer '"+timer+"' borrado en usuario "+idUsu+"")
                        res.send(resultsTimer);
                        //solo lo meto a DB y front se encarga de displayear todas las tareas (que le mande en login) - la borrada
                    } 
                });
            }
        });
    }
});
*/


//insertar tarea en pomodor (next)

export default function handler(req, res) {
    console.log(req.body)
    if (req.method === "POST") {

        res.status(200);

        if (req.body.tipo == "tarea") {

            const insTarea = [idUsu, req.body.dato];  
            console.log("a")      

            conexion.query('INSERT INTO tareaspomodoro (idUsu, tarea) VALUES (?)', [insTarea], function (err, resultsTarea){ 
                
                if (err) {
                    console.log("b");
                    res.send("Error consultando: " + err);
                    return;
                }

                else {
                    console.log("tarea '"+insTarea[1]+"' insertada en usuario "+idUsu+"")
                    res.send(resultsTarea);
                    //solo lo meto a DB y front se encarga de displayear todas las tareas (que le mande en login) + la nueva
                } 
            });
        }

        else if (req.body.tipo == "timer")
        {

            insTimer = [idUsu, req.body.dato, req.body.tiempoTrabajo, req.body.tiempoRecreo];

            conexion.query('INSERT INTO tiempopomodoro (idUsu, nombre, tiempoTrabajo, tiempoRecreo) VALUES (?)', [insTimer], function (err, resultsTimer){ 
                
                if (err) {
                    res.send("Error consultando: " + err);
                    return;
                }

                else {
                    console.log("timer '"+insTimer[1]+"' insertado en usuario "+idUsu+"")
                    res.send(resultsTimer);
                    //solo lo meto a DB y front se encarga de displayear todas las tareas (que le mande en login) + la nueva
                } 
            });
        }
    } 

    else if (req.method === "DELETE") {

        res.status(200);

    if (req.body.tipo == "tarea") {

        tarea = req.body.dato;        

        conexion.query('SELECT id FROM tareaspomodoro WHERE idUsu = ? AND tarea = ?', [idUsu, tarea], function (err, resultsidTarea){ 
            
            if (err) {
                res.send("Error consultando: " + err);
                return;
            }

            else {

                idTarea = resultsidTarea[0].id;

                conexion.query ('DELETE FROM tareaspomodoro WHERE id = ?', [idTarea], function (err, resultsTarea){
                    if (err) {
                        res.send("Error consultando: " + err);
                        return;
                    }

                    else {
                        console.log("tarea '"+tarea+"' borrada en usuario "+idUsu+"")
                        res.send(resultsTarea);
                        //solo lo meto a DB y front se encarga de displayear todas las tareas (que le mande en login) + la nueva
                    } 
                });
            }
        });


    }
}
    else if (req.body.tipo == "timer")
    {

        timer = req.body.dato;
        tiempoTrabajo = req.body.tiempoTrabajo;
        tiempoRecreo = req.body.tiempoRecreo;
        
        conexion.query(`SELECT id FROM tiempopomodoro 
        WHERE idUsu = ? AND nombre = ? AND tiempoTrabajo = ? AND tiempoRecreo = ?`, [idUsu, timer, tiempoTrabajo, tiempoRecreo], function (err, resultsidTimer){ 
            
            if (err) {
                res.send("Error consultando: " + err);
                return;
            }

            else {

                idTimer = resultsidTimer[0].id;

                conexion.query ('DELETE FROM tiempopomodoro WHERE id = ?', [idTimer], function (err, resultsTimer){
                    if (err) {
                        res.send("Error consultando: " + err);
                        return;
                    }

                    else {
                        console.log("timer '"+timer+"' borrado en usuario "+idUsu+"")
                        res.send(resultsTimer);
                        //solo lo meto a DB y front se encarga de displayear todas las tareas (que le mande en login) + la nueva
                    } 
                });
            }
        });
    }
}


/*
 app.listen(port, () => {
     console.log(`API listening at http://localhost:${port}`);
 });
*/
