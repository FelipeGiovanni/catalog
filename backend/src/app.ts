import express from "express"
import { router } from "./router"
import cors from "cors"

export class App {
  public server: express.Application

  constructor() {
    this.server = express()
    this.middleware()
    this.router()
  }

  private middleware() {
    this.server.use(express.json())
    this.server.use(
      cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
        optionsSuccessStatus: 204,
      })
    )
  }

  private router() {
    this.server.use(router)
  }
}
