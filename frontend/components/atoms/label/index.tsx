type TypeLabel = {
  className: string
  label: string
}

export const Label = ({ className, label }: TypeLabel) => {
  return <label className={`text-white ${className}`} />
}

Label.displayName = "Label"
