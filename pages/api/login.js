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
                
                //tira error si mail o contraeña es incorrecto
                if (results.length > 0) {
                    console.log("> error: El mail y/o contraseña es incorrecto");
                    //res.redirect("http://localhost/GreenSense/html/registrar.html");
                    
                    //mandar res.status a front para que resuelva error
                    res.status(200).json("ErrIncorrecto");
                }

                //Sube datos a DB y mandar mail de registro
                else {
                    conexion.query('INSERT INTO usuarios ( mail, contrasenia) VALUES ("'+mail+'", "'+pass+'" )', function (error,results,fields){
                        if (error) throw error;
                        console.log ("> registro insertado");
                        //res.redirect("http://localhost/GreenSense/html/cuentaCreada.html");
                        
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
                    });     
                }
            });
        }

        //Instrucciones si le faltaron datos al usuario
        else {
            console.log ("> error, falta mail o contraseña");
            
            //BUSCAR MANERA DE SACAR ID DE USUARIO Y PASARLA A OTRO ARCHIVO DENODE JS
            //YA SE POR MEDIO DE FRONT O TODO POR BACK
            
            //res.redirect("http://localhost/GreenSense/html/registrar.html");
            
            //mandar res.status a front para que resuelva error
            res.status(200).json("ErrFalta");

        }
        

    }
}