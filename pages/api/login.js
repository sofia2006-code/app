//Variables mysql
const mysql = require ('mysql');

//Conexion DB
const conexion  = mysql.createConnection({
    
    host: 'localhost',
    database: 'tafocus',
    user: 'root',
    password: 'rootroot'

});

let mail;
let pass;
let idUsu;

export default function handler(req, res) {
    console.log(req.body)
    if (req.method === "POST") {

        res.status(200);

        //ver como me pasa front eso req.body.???
        mail = req.body.mail;
        pass = req.body.contra;

        //Instrucciones si el usuario puso todos los datos
        if (mail && pass) {

            conexion.query('SELECT mail AND contrasenia FROM usuarios WHERE mail = ? AND contrasenia = ?', [mail, pass], function (err, results, fields) {
                
                //datos que me pasa el front luego de login con google
                //probar porque quizas es al revez (if significa registro y else significa login)                
                //registro en nuestra DB
                if (results.length > 0) {
                    
                    conexion.query('INSERT INTO usuarios ( mail, contrasenia) VALUES ("'+mail+'", "'+pass+'" )', function (error,results,fields){
                        if (error) throw error;
                        console.log ("> registro insertado");
                        
                        //ver para mandar mail de registro
                        /*
                        transporter = nodemailer.createTransport({
                            host: "smtp.gmail.com",
                            port: 465,
                            secure: true,
                            auth: {
                                user: "greensense22@gmail.com",
                                pass: "tjdngfvodfqdlsbn",
                            },
                        });

                        mailOptions = {
                            from: "greensense22@gmail.com",
                            to: email,
                            subject: "Registro en Green Sense",
                            text: "Su cuenta de Green Sense ha sido creada exitosamente.",
                        };
                        
                        transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                console.log ("> error enviando mail de registracion");
                                console.log (error);
                            }
                            else {
                                console.log ("> mail de registracion enviado");
                            }
                        });
                        */

                        //BUSCAR MANERA DE SACAR ID DE USUARIO Y PASARLA A OTRO ARCHIVO DENODE JS
                        //YA SE POR MEDIO DE FRONT O TODO POR BACK
                        conexion.query('SELECT idUsu FROM usuarios WHERE usuario = ? AND contrasenia = ?', [usuario, contrasenia], function (err, results) {

                            //guardamos id de usuario loggeado (hay que guardarlo globalmente para pantalla de pomodoro)
                            //otra es postarlo y recibirlo desde pantalla pomodoro
                            idUsu = results[0].idUsu;
                    
                            console.log ("usuario "+idUsu+" loggeado");
                            
                        });
                    });     

                }

                //login
                else {

                    conexion.query('SELECT idUsu FROM usuarios WHERE usuario = ? AND contrasenia = ?', [usuario, contrasenia], function (err, results) {

                        //guardamos id de usuario loggeado (hay que guardarlo globalmente para pantalla de pomodoro)
                        //otra es postarlo y recibirlo desde pantalla pomodoro
                        idUsu = results[0].idUsu;
                
                        console.log ("usuario "+idUsu+" loggeado");
                        
                    });
                }
            });
        }

        //Instrucciones si le faltaron datos al usuario
        else {
            console.log ("> error, falta mail o contraseña");
            
            //mandar res.status a front para que resuelva error
            res.status(200).json("ErrFalta");

        }
        

    }
}