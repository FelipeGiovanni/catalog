import { ReactNode } from "react"

type TypeLabel = {
  children: ReactNode
  bold?: boolean
  normal?: boolean
}

export const Label = ({ children, bold, normal }: TypeLabel) => {
  return (
    <label
      className={[
        "text-violet-950",
        bold && "font-bold",
        normal && "font-medium",
      ].join(" ")}
    >
      {children}
    </label>
  )
}

Label.displayName = "Label"
