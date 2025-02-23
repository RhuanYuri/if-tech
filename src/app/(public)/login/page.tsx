'use client'
import { InputField, InputIcon, InputRoot } from "@/componets/input";
import { ArrowRight, EyeIcon } from "lucide-react";
import fundo from "../../../assets/fundo-iftech.png";
import logo from "../../../assets/logo-if.png"
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from "@/componets/button";
import { FormLogin } from "./form-login";
import { Separator } from "@/componets/separator";
import { Banner, BannerTitle } from "@/componets/banner";


export default function SingIn() {
    return (
      <div className="flex items-stretch">
        <div className="flex-1 bg-cover bg-center max-[1100px]:hidden" style={{ backgroundImage: `url(${fundo.src})` }}>

        </div>
        <div className="flex-[560px_1_0] min-[1101px]:max-w-[560px] max-[1100px]:flex-1">
          <div className="h-[100dvh] bg-gray-850 p-20 overflow-auto max-[1100px]:h-auto max-[1100px]:min-h-[calc(100dvh-16px)] max-[1100px]:p-7">
          <div className="flex flex-col">
            <Image src={logo} alt="IF" width={202} height={20} />
            <h1 className="font-bold text-gray-200 text-2xl mt-16 mb-12 max-md:mt-12 max-md:mb-8">Acesse sua conta</h1>
            <FormLogin />
          </div>

          <Separator />
          <a href="/signup">
          <Banner className="justify-between">
            <BannerTitle title="Não tem uma conta?" subtitle="Se inscreva" />
            <ArrowRight />
          </Banner>
        
        </a>
         
          </div>
         
        </div>
        

      </div>
    );
}
  