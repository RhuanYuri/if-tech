import { ComponentProps } from "react";

interface ButaoAcessarPaginaProps extends ComponentProps<'div'>{}

export function ButaoAcessarPagina(props: ButaoAcessarPaginaProps){
    return (
        <button className="flex flex-col w-full justify-start rounded-[10px] hover:bg-gray-800 overflow-hidden transition cursor-pointer text-left bg-gray-850 border border-gray-700" >
            <div className="flex flex-col flex-1 w-full gap-4 p-6 bg-[url(/assets/images/catalog/bg.png)] bg-[length:310px_auto] bg-no-repeat">
            

            </div>
        </button>


    )
}