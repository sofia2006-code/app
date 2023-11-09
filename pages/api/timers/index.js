/*import { data1 } from "../../../pages/timers"

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(203).json(data1)
    }
    else if (req.method === 'POST') {
        const dato = req.body.dato
        const timerWork = req.body.timerWork
        const newTimer = {
            id: Date.now(),
            text: dato,
            number: timerWork,
            number: RestTime
        }
        timers.push(newTimer)
        res.status(204).json(newTimer)
    }
}*/