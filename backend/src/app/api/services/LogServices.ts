import mongoose from "mongoose"
import { LogRegisterSchema } from "../schemas/LogRegisterSchema"
import { TypeLogRegister } from "../../../types/TypeLog"
import { MountLog } from "../../../utils/MountLog"

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
}
