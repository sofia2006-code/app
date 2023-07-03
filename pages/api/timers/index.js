import { timers } from "../../../data1/timers"

export default function handler (req, res){
    if (req.method === 'GET'){
        res.status(203).json(timers)
    }
    else if (req.method === 'POST'){
        const timer = req.body.timer
    }
}