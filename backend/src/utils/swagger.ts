import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import path from "path"

const options: swaggerJsdoc.Options = {
  swaggerDefinition: {
    info: {
      title: "Cata-Log",
      version: "1.0.0",
      description: "Api para tratamento de dados de Logs",
    },
  },
  apis: [path.resolve(__dirname, "../docs/swagger.ts")], // Substitua pelo caminho real dos seus arquivos de rota
}

const specs = swaggerJsdoc(options)

export { swaggerUi, specs }
