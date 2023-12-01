import { Router } from "express"
import { logController } from "./app/api/controllers/LogController"
import { ConnectMongo } from "./app/api/services/ConectorMongo"

const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ dest: "tmp", storage: storage })

const router: Router = Router()

//Routes
router.post("/api/sendfile", upload.single("log"), (req: any, res: any) => {
  try {
    ConnectMongo()
    const fileContent = req.file.buffer.toString("utf-8")
    logController.SendFile(fileContent)

    res.status(200).send({ mensage: "Arquivo recebido com sucesso!" })
  } catch (erro) {
    console.error("Erro ao processar o arquivo:", erro)
    res.status(400).send("Erro interno do servidor")
  }
})

export { router }
