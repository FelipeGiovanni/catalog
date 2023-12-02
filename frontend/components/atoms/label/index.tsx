import { ReactNode } from "react"

type TypeLabel = {
  children: ReactNode
}

export const Label = ({ children }: TypeLabel) => {
  return <label className={"text-black-700"}>{children}</label>
}

Label.displayName = "Label"
