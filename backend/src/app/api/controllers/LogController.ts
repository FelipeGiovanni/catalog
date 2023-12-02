import { LogServicesClass } from "../services/LogServices"
import { Request, Response } from "express"

class LogController {
  public SendFile = async (fileContent: string) => {
    await LogServicesClass.HandleUpload(fileContent)
  }

  public GetLogByDate = async (req: Request, res: Response) => {
    try {
      const initialdate = req.body.initialDate
      const finalDate = req.body.finalDate
      const DataLogs = await LogServicesClass.GetLogByDateService(
        initialdate,
        finalDate
      )
      res.status(200).send({ data: DataLogs, count: DataLogs.length })
    } catch (error) {
      res.status(400).send({ error: error })
    }
  }

  public GetLogByContent = async (req: Request, res: Response) => {
    try {
      const content = req.body.content
      const DataLogs = await LogServicesClass.GetLogByContentService(content)
      res.status(200).send({ data: DataLogs, count: DataLogs.length })
    } catch (error) {
      res.status(400).send({ error: error })
    }
  }

  public GetLogById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const DataLogs = await LogServicesClass.GetLogByIdService(id)
      res.status(200).send({ data: DataLogs })
    } catch (error) {
      res.status(400).send({ error: error })
    }
  }
}
export const logController = new LogController()
