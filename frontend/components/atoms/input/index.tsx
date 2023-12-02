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
              "h-10",
              "py-3",
              "pl-4",
              "border",
              "border-violet-400",
              "focus:border-violet-800",
              "focus:border-2",
              "hover:border-violet-500",
              "rounded-md",
              "transition",
              "ease-in-out",
              "text-gray-800",
              "placeholder-gray-600",
              "outline-none",
            ].join(" ")}
          />
        </div>
      </div>
    )
  }
)
Input.displayName = "Input"
