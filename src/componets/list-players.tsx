import { PlayCircle } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";
import { IconButton } from "./icon-button";

interface ListPlayersRootProps extends ComponentProps<'div'> { }

export function ListPlayersRoot(props: ListPlayersRootProps) {
    return (
        <div className="grid grid-cols-2 gap-5 h-max min-[1300px]:grid-cols-3">
            <div className="flex flex-col gap-4 col-span-3">
                <h3 className="text-sm font-bold">Continue de onde parou</h3>
                <div {...props} />
            </div>
        </div>
    );
}

interface ListPlayersGridProps extends ComponentProps<'ul'> { }

export function ListPlayersGrid(props: ListPlayersGridProps) {
    return (
        <div className="relative">
            <div className="react-multi-carousel-list static overflow-hidden -mx-2.5">
                <ul className="flex overflow-x-auto react-multi-carousel-track transition-none overflow-visible transform-none" {...props} />
            </div>
        </div>
    );
}

interface ListPlayersItemnProps extends ComponentProps<'div'> { }

export function ListPlayersItemn(props: ListPlayersItemnProps) {
    return (
        <li className="react-multi-carousel-item react-multi-carousel-item--active flex-1 relative w-[242px]">
            <div className="mx-2.5">
                <Link href="/">
                    <div className="relative bg-gray-850 rounded-md">
                        <div
                            className="group flex items-center gap-2 px-4 py-3 border border-gray-700 rounded-md h-full 
                            bg-[url(/assets/images/catalog/full-bg.png)] bg-[length:70%_auto] bg-no-repeat bg-left 
                            transition-all duration-150 hover:border-purple-500 cursor-pointer"
                            {...props}
                        />
                    </div>
                </Link>
            </div>
        </li>
    );
}

interface ListPlayersImageProps extends ComponentProps<'div'> { }

export function ListPlayersImage(props: ListPlayersImageProps) {
    return (
        <div className="relative shrink-0 w-[70px] h-[66px]" {...props} />
    );
}

interface ListPlayersTextProps extends ComponentProps<'div'> { }

export function ListPlayersText(props: ListPlayersTextProps) {
    return (
        <div className="flex flex-col">
            <span className="text-gray-300 uppercase text-[0.625rem] font-medium tracking-[0.4px]">
                Formação
            </span>
            <strong className="text-sm line-clamp-2 max-w-[8.75rem] data-[short='true']:line-clamp-1">
                ReactJS
            </strong>

            <IconButton className="absolute right-4 invisible group-hover:visible flex items-center justify-center w-10 h-10 rounded-full bg-purple-900 text-white transition-colors duration-200 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed">
                <PlayCircle className="size-5" />
            </IconButton>
        </div>
    );
}
