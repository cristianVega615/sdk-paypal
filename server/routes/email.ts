import { Request, Response, Router } from "express";
import {sendEmail} from '../controllers/sendEmail'
 

const router = Router()


router.post("/",sendEmail)
router.get("/prueba", (req: Request, res: Response) => {
    res.send("Saludo de prueba")
})

export { router }
