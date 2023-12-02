import PropTypes from "prop-types"
import React, { forwardRef, ReactNode, useState } from "react"
import DatePicker, {
  CalendarContainer,
  ReactDatePickerProps,
} from "react-datepicker"
import { Button } from "../../atoms"
import "react-datepicker/dist/react-datepicker.css"

type DateSelectprops = {
  placeholder?: string
  selected?: any
  onChange: (event: any) => void
  onSelect?: (event: any) => void
  onFocus?: (event: any) => void
  icon?: ReactNode
  clearDateButton?: ReactNode
  reverse?: boolean
}

export const DateSelect = forwardRef<ReactDatePickerProps, DateSelectprops>(
  (
    {
      placeholder,
      onChange,
      onSelect,
      onFocus,
      selected,
      icon,
      reverse,
      clearDateButton,
      ...props
    },
    ref
  ) => {
    const [isStartDateValue, setIsStartDateValue] = useState<boolean>(true)

    return (
      <>
        <div className="w-full relative">
          <div className={["flex", "flex-row", "rounded-lg"].join(" ")}>
            <DatePicker
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
                isStartDateValue && "border-violet-500",
              ].join(" ")}
              placeholderText={placeholder}
              wrapperClassName="date-picker"
              selected={selected}
              dateFormat="dd/MM/yyyy"
              onChange={onChange}
              onSelect={onSelect}
              onFocus={() => setIsStartDateValue(false)}
              closeOnScroll={(e) => e.target === document}
              {...props}
            />
          </div>
        </div>
      </>
    )
  }
)

DateSelect.propTypes = {
  placeholder: PropTypes.string,
}

DateSelect.defaultProps = {
  placeholder: "Data",
}

DateSelect.displayName = "DateSelect"
