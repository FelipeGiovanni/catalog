import React, { ReactNode, forwardRef } from "react"

type ButtonProps = {
  primary?: boolean
  small?: boolean
  medium?: boolean
  children: ReactNode
  disabled?: boolean
  warning?: boolean
  onClick?: (event: any) => void
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { primary = true, warning, disabled, small, medium, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        disabled={disabled}
        className={[
          "transform",
          "rounded-md",
          "py-2",
          "px-1",
          "w-full",
          "h-full",
          "transition",
          "ease-out",
          small && ["w-44"],
          medium && ["w-56"],
          primary && [
            "bg-violet-700 text-white hover:bg-violet-800 active:bg-violet-600",
          ],
          warning && ["bg-red-700 text-white"],
        ].join(" ")}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
