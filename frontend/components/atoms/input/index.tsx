import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from "react"

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  className?: string
  placeholder?: string
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { onChange, disabled, className, placeholder, defaultValue, ...props },
    ref
  ) => {
    return (
      <div className="w-full">
        <div className="relative">
          <input
            {...props}
            ref={ref}
            onChange={onChange}
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
            className={[
              "w-full",
              "h-12",
              "py-3",
              "pl-20",
              "border",
              "rounded-full",
              "transition",
              "ease-in-out",
              "text-gray-dark",
              "placeholder-gray-medium",
              "outline-none",
            ].join(" ")}
          />
        </div>
      </div>
    )
  }
)
Input.displayName = "Input"
