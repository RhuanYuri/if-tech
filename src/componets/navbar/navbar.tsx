import { ComponentProps } from "react";
import { ButtonNav } from "./button-navbar";
import { Bell, Flame, ListCollapse, Search, SquareSlash } from "lucide-react";
import logo from "../../assets/logo-if.png"
import Image from "next/image";
import user from "../../assets/img-user.png"
import { InputField, InputIcon, InputRoot } from "../input";

interface NavBarProps extends ComponentProps<'div'> { }

export function NavBar(pops: NavBarProps) {
    return (
        <div className="h-[72px] lg:h-[80px] px-4 lg:pr-8 bg-gray-800 border border-transparent border-b-gray-700 flex items-center">
            <div className="flex items-center mr-auto flex-shrink-0">
                <ButtonNav className="bg-gray-800 text-gray-200 w-10 h-10 hidden lg:flex items-center justify-center rounded hover:bg-gray-700 hover:text-gray-200 transition mr-4">
                    <ListCollapse className="size-5" />
                </ButtonNav>
                <a className="flex h-[40px] my-auto justify-center items-center gap-4 overflow-hidden cursor-pointer" href="/">
                    <Image src={logo} alt="if-tech" width={202} height={20} />
                </a>
            </div>

            <div className="w-full max-w-[478px] relative flex justify-center my-0 mx-6 max-lg:hidden max-lg:absolute max-lg:top-[72px] max-lg:left-[15px] max-lg:m-0 max-lg:max-w-[calc(100%-30px)]">
                <InputRoot className="relative w-full h-12 flex items-center gap-2 py-0 px-4">
                    <InputIcon>
                        <Search className="size-5" />
                    </InputIcon>
                    <InputField type="text" placeholder="Busque por assunto e aulas" />
                    <InputIcon>
                        <SquareSlash className="size-5" />
                    </InputIcon>
                </InputRoot>
            </div>

            <div className="flex items-center ml-auto gap-3 lg:gap-4">
                <ButtonNav>
                    <div className="relative flex items-center md-col px-5 gap-2">
                    <Flame />
                    0
                    </div>
                    
                </ButtonNav>
                <ButtonNav>
                    <Bell />    
                </ButtonNav>
                <ButtonNav>
                    <Image className="h-full w-full rounded-[inherit] object-cover" alt="user" src={user} width={52} height={42} />   
                </ButtonNav>
            </div>
            
        </div>
    )
}