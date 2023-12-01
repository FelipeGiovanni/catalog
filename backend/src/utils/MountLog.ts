import { TypeLogRegister } from "../types/TypeLog"

export const MountLog = (listValues: string[]) => {
  let objectLog: TypeLogRegister[] = []

  for (let index = 0; index < listValues.length; index = index + 8) {
    objectLog.push({
      IpUser: listValues[index],
      DateTime: new Date(`${listValues[index + 1]}-${listValues[index + 2]}`),
      NameUser: listValues[index + 3],
      TimeConnection: listValues[index + 4],
      idLog: listValues[index + 5],
      titleLog: listValues[index + 6],
      mensage: listValues[index + 7],
      allContent: `${listValues[index]} - ${listValues[index + 1]}-${
        listValues[index + 2]
      } - ${listValues[index + 3]} - ${listValues[index + 4]} - ${
        listValues[index + 5]
      } - ${listValues[index + 6]} - ${listValues[index + 7]} - `,
    })
  }
  return objectLog
}
