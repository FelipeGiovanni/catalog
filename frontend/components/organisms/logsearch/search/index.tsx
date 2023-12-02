import { useState } from "react"
import { Button, Input, Label } from "../../../atoms"
import { HeaderPage } from "../../../molecules/header"
import { DateSelect } from "../../../molecules"
import { GetLogByDate, GetLogByContent } from "../../../../methods"
import DataTable from "react-data-table-component"
import { TypeLog } from "../../../../types/TypeLog"
import Link from "next/link"

export const SearchPage = () => {
  const [searchByDate, setSearchByDate] = useState<boolean>(false)
  const [initialDate, setInitialDate] = useState<Date | null>()
  const [finalDate, setFinalDate] = useState<Date | null>()
  const [contentToFind, setContentToFind] = useState<string | null>()

  const [listOfLogs, setListOfLogs] = useState()

  const FindLog = async () => {
    if (contentToFind || (finalDate && initialDate)) {
      if (searchByDate) {
        const listLogs = await GetLogByDate(initialDate!, finalDate!)
        setListOfLogs(listLogs!)
        console.log(listOfLogs)
      } else {
        const listLogs = await GetLogByContent(contentToFind!)
        setListOfLogs(listLogs!)
      }
    } else {
    }
  }

  const columns = [
    {
      name: "Id do Log",
      width: "8%",
      selector: (row: any) => row.idLog,
    },
    {
      name: "Nome do Usuário",
      width: "10%",
      selector: (row: any) => row.NameUser,
    },
    {
      name: "Ip do Usuário",
      width: "10%",
      selector: (row: any) => row.IpUser,
    },
    {
      name: "Título",
      width: "37%",
      selector: (row: any) => row.mensage,
    },
    {
      name: "Data/Horário",
      width: "15%",
      selector: (row: any) => row.DateTime,
    },
    {
      name: "Tempo de Conexão",
      width: "10%",
      selector: (row: any) => row.TimeConnection,
    },
  ]

  return (
    <>
      <HeaderPage title={"Pesquisa de Log"} />
      <div className="px-10 py-4">
        <div className="py-4 w-1/6">
          <Label>
            {searchByDate ? "Busca Por Data" : "Busca Por Conteúdo"}
          </Label>

          <Button
            primary
            small
            onClick={() => {
              setSearchByDate(!searchByDate)
              setInitialDate(null)
              setFinalDate(null)
              setContentToFind(null)
            }}
          >
            Alterar Tipo de Busca
          </Button>
        </div>
        <div className="flex flex-row w-1/2 space-x-4">
          <div className="basis-3/4">
            {searchByDate ? (
              <div className="flex flex-row space-x-2">
                <div>
                  <Label>Data Inicial</Label>
                  <DateSelect
                    selected={initialDate}
                    onChange={(initialDate: Date) => {
                      setInitialDate(initialDate)
                    }}
                  />
                </div>

                <div>
                  <Label>Data Final</Label>
                  <DateSelect
                    selected={finalDate}
                    onChange={(finalDate: Date) => {
                      setFinalDate(finalDate)
                    }}
                  />
                </div>
              </div>
            ) : (
              <>
                <Label>Conteudo do Log</Label>
                <Input
                  onChange={(textToFind) =>
                    setContentToFind(textToFind.target.value)
                  }
                  placeholder="Digite o conteúdo da busca"
                />
              </>
            )}
          </div>
          <div className="basis-1/4 align-middle">
            <Button onClick={FindLog}>Pesquisar</Button>
          </div>
        </div>
      </div>
      <div className="px-10 py-4">
        <DataTable
          columns={columns}
          data={listOfLogs!}
          pagination
          highlightOnHover
        />
      </div>
    </>
  )
}
