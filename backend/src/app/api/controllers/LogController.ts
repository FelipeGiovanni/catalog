import { LogServicesClass } from "../services/LogServices"

class LogController {
  public SendFile = async (fileContent: string) => {
    await LogServicesClass.HandleUpload(fileContent)
  }
}
export const logController = new LogController()
