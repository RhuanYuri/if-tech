import { type ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonPros extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonPros) {
  return (
    <button
      className={twMerge( "p-1.5 bg-gray-500 text-purple-500 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900", className)}
      {...props}
    />
  )
}
