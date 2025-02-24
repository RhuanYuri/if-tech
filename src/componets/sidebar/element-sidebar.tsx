import { Route } from "lucide-react";
import { ComponentProps } from "react";

interface ElementSideBarProps extends ComponentProps<'div'>{}

export function ElementSideBar(porps: ElementSideBarProps){
    return (
        <div data-state="closed">
            <a className="group relative flex items-center gap-4 w-full h-12 px-3 rounded transition-all text-gray-300 hover:bg-gray-800" href="/">
                <Route />
                <span className="flex flex-col flex-shrink-0 text-sm text-gray-100 font-semibold">Item</span>
            </a>
            
        </div>
    )
}