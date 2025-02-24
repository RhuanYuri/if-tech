import { type ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonNavPros extends ComponentProps<'button'> {}

export function ButtonNav({ className, ...props }: ButtonNavPros) {
  return (
    <button
      className={twMerge( "relative flex items-center px-3 gap-2 rounded h-[40px] border border-solid border-gray-600 box-border transition-colors cursor-pointer hover:enabled:border-gray-500 data-[state=open]:!border-transparent data-[state=open]:[background-image:linear-gradient(#29292E,#29292E),linear-gradient(106.93deg,#E15D32_0%,#FFBD36_100%)] data-[state=open]:[background-origin:padding-box,_border-box] data-[state=open]:[background-clip:padding-box,_border-box] disabled:cursor-default disabled:pointer-events-none [&_svg]:transition-all duration-300", className)}
      {...props}
    />
  )
}
