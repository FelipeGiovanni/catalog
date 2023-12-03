import { TypeLog } from "../../../../types/TypeLog"
import { Label } from "../../../atoms"
import { HeaderPage } from "../../../molecules/header"

export const ViewPage = (logContent: any) => {
  const log: TypeLog = logContent.logContent
  const dateLog = log.DateTime.split("T")[0].split("-").reverse().join("/")
  const timeLog = log.DateTime.split("T")[1].replace(".000Z", "")

  return (
    <>
      <HeaderPage
        title={"Visualização de Log"}
        subtitle={`Log ${log.idLog}`}
        href="/"
      />
      <div className=" mt-5 flex flex-col p-12 rounded-lg bg-violet-50">
        <div className="flex flex-row space-x-5 my-8">
          <div className="basis-1/3">
            <Label bold>Nome de Usuário</Label>
            <h1 className="font-normal">{log.NameUser}</h1>
          </div>
          <div className="basis-1/3">
            <Label bold>Ip do Usuário</Label>
            <h1 className="font-normal">{log.IpUser}</h1>
          </div>
          <div className="basis-1/3">
            <Label bold>Numero do Log</Label>
            <h1 className="font-normal">{log.idLog}</h1>
          </div>
        </div>

        <div className="flex flex-row space-x-5 my-8">
          <div className="basis-1/3">
            <Label bold>Data do log</Label>
            <h1 className="font-normal">{dateLog}</h1>
          </div>
          <div className="basis-1/3">
            <Label bold>Horário</Label>
            <h1 className="font-normal">{timeLog}</h1>
          </div>
          <div className="basis-1/3">
            <Label bold>Tempo de Conexão</Label>
            <h1 className="font-normal">{log.TimeConnection}</h1>
          </div>
        </div>

        <div className="mt-6">
          <div>
            <Label bold>Titulo do log</Label>
            <h1 className="font-normal">{log.titleLog}</h1>
          </div>
        </div>

        <div className="mt-12">
          <div>
            <Label bold>Mensagem do log</Label>
            <h1 className="font-normal">{log.mensage}</h1>
          </div>
        </div>
      </div>
    </>
  )
}
