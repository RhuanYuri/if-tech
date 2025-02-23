import { ComponentProps } from "react";

interface BannerProps extends ComponentProps<'div'> { }
export function Banner(props: BannerProps) {
  return (
    <div {...props} className="w-full flex items-center justify-between gap-4 px-6 py-4 bg-gray-700 border border-gray-600 hover:brightness-125 transition rounded-md" />
  )
}

interface BannerTitleProps extends ComponentProps<'div'> {
  title: string,
  subtitle: string,
}
export function BannerTitle({ title, subtitle, ...props }: BannerTitleProps) {
  return (
    <div className="flex flex-col text-gray-200" {...props}>{title}
      <span className="text-purpleseat-light font-medium">{subtitle}</span>
    </div>
  )

}