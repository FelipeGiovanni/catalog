import Link from "next/link"
import React from "react"
type BackProps = {
  href?: string
  title: string
}
export const HeaderPage = ({ title, href, ...props }: BackProps) => {
  return (
    <div
      className="flex flex-row justify-between border-b border-violet-300 bg-violet-200 min-h-20 w-full align-middle"
      {...props}
    >
      <div className="px-8 py-3 flex flex-row">
        <div className="pr-4 self-center justify-start">
          {href && (
            <Link href={href}>
              <button className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={"#3C0054"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </Link>
          )}
        </div>
        <div className=" -space-y-3 justify-start">
          <h1 className="font-bold text-xl leading-10 tracking-wide text-dark-800">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}

HeaderPage.displayName = "Header"
