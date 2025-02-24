import { ComponentProps } from "react";
import { ElementSideBar } from "./element-sidebar";

interface SideBarProps extends ComponentProps<'div'>{}

export function SideBar(porps: SideBarProps){
    return (
        <div className="hidden lg:flex flex-col gap-3 p-3 pt-6 border border-transparent border-r-gray-700 transition-all ease-in-out duration-300 w-[216px]">
            <ElementSideBar />
            <ElementSideBar />
            <ElementSideBar />
            <ElementSideBar />
            <ElementSideBar />
            <ElementSideBar />
            <ElementSideBar />
        </div>
    )
}