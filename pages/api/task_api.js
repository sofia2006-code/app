//import {pool} from '../../database de thiago'

export default async function handler(req, res) {
    
    switch(req.method){
        case 'GET':
            return res.status(200).json('getting a task')
        case 'POST':
            
            const {name, dato} = req.body
            /* const result = await pool.query('INSERT INTO (nombre de la variable a donde va los datos) SET?', {
                name,
                dato,
            })

            console.log(result);
            return res.status(200).json('creating a task') */


    }

}