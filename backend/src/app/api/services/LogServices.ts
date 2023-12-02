import mongoose from "mongoose"
import { LogRegisterSchema } from "../schemas/LogRegisterSchema"
import { TypeLogRegister } from "../../../types/TypeLog"
import { MountLog } from "../../../utils/MountLog"
import { MongoClient } from "mongodb"

export class LogServicesClass {
  static AddRegister(register: TypeLogRegister) {
    try {
      const newLog = mongoose.model("newLog", LogRegisterSchema)
      const log = new newLog({
        IpUser: register.IpUser,
        NameUser: register.NameUser,
        DateTime: register.DateTime,
        TimeConnection: register.TimeConnection,
        idLog: register.idLog,
        titleLog: register.titleLog,
        mensage: register.mensage,
        allContent: register.allContent,
      })
      log.save().then(
        () => console.log(`One entry ${register.idLog} added`),
        (err) => console.log(err)
      )
    } catch (error) {
      console.log("error")
      console.log(error)
    }
  }

  static HandleUpload = async (fileString: string) => {
    let dadosStringSemQuebra = fileString.replace(/\n/g, ";")
    let dadosArray = dadosStringSemQuebra.split(";")
    const objectLog = MountLog(dadosArray)
    for (let index = 0; index < objectLog.length; index++) {
      console.log("Add log of index: " + index)
      LogServicesClass.AddRegister(objectLog[index])
    }
  }

  static GetLogByDateService = async (
    initialDate: string,
    finalDate: string
  ) => {
    const client = new MongoClient("mongodb://localhost:27017", {})
    await client.connect()

    const database = client.db("test")
    const collection = database.collection("newlogs")

    // Converta as strings de data para objetos Date do JavaScript
    const dataInicialDate = new Date(initialDate)
    const dataFinalDate = new Date(finalDate)

    // Realize a consulta usando o operador $gte (maior ou igual) e $lte (menor ou igual)
    const resultados = await collection
      .find({
        DateTime: {
          $gte: dataInicialDate,
          $lte: dataFinalDate,
        },
      })
      .toArray()

    return resultados
  }

  static GetLogByContentService = async (content: string) => {
    const client = new MongoClient("mongodb://localhost:27017", {})
    await client.connect()

    const database = client.db("test")
    const collection = database.collection("newlogs")

    const resultados = await collection
      .find({
        allContent: new RegExp(content),
      })
      .toArray()

    return resultados
  }

  static GetLogByIdService = async (content: string) => {
    const client = new MongoClient("mongodb://localhost:27017", {})
    await client.connect()

    const database = client.db("test")
    const collection = database.collection("newlogs")

    const result = await collection
      .find({
        idLog: content,
      })
      .toArray()

    return result
  }
}
