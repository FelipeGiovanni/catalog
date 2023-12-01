import { Request, Response } from "express"

class FirstController {
  public home(req: Request, res: Response) {
    return res.json({
      response: "Test",
    })
  }
}
export const firstController = new FirstController()
