import { ComponentProps } from "react";

interface ListarConteudoProps extends ComponentProps<'div'>{}

export function ListarConteudo(props: ListarConteudoProps){
    return (
        <div className="flex flex-col gap-4 lg:gap-6">
            <div className="flex justify-between items-center">
                <h2 className="inline-flex items-center gap-2 text-gray-100 lg:text-lg font-bold text-md">
                    Matérias
                </h2>
                <button className="flex items-center gap-2 text-sm text-purpleseat-light hover:brightness-125 transition">Ver tudo<svg stroke="currentColor" fill="none" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="16" height="16"><path d="M7.50004 5C7.50004 5 12.5 8.68242 12.5 10C12.5 11.3177 7.5 15 7.5 15" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>

            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 lg:gap-5" {...props} />
        </div>
    )
}


interface ListarConteudoItemProps extends ComponentProps<'div'>{}

export function ListarConteudoItem(props: ListarConteudoItemProps){
    return (
        <div className="relative flex w-full data-[locked=true]:pointer-events-none">

        </div>

    )
}