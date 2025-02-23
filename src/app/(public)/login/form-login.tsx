'use client'
import { Button } from "@/componets/button";
import { InputField, InputRoot } from "@/componets/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const subscriptionSchema = z.object({
    email: z.string().email('Digite um email válido'),
    password: z.string().min(4, 'Digite uma senha com mais de 4 caracteres'),
  })
  
  type SubscriptionSchema = z.infer<typeof subscriptionSchema>
  
  

export function FormLogin(){
    const router = useRouter()
  const searchParms = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })
  async function onSubscribe({ email, password }: SubscriptionSchema) {
    const referrer = searchParms.get('referrer')
    console.log('teste')
    //const { subscriberId } = await subscribeToEvent({ name, email, referrer })
    //router.push(`/invite/${subscriberId}`)
  }

    return (
        <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 [&>label]:text-sm [&>label]:text-gray-200">
                <span>E-mail</span>
                <InputRoot>
                  <InputField placeholder="Seu e-mail" />
                </InputRoot>
                {errors.email && (
                  <p className='text-danger text-xs font-semibold'>{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2 [&>label]:text-sm [&>label]:text-gray-200">
                <span>Senha</span>
                <InputRoot>
                  <InputField placeholder="Sua Senha" />
                </InputRoot>
                {errors.password && (
                  <p className='text-danger text-xs font-semibold'>{errors.password.message}</p>
                )}
                <a className="text-sm font-medium font-semibold color-purpleseat-light text-purpleseat-light hover:brightness-125 transition" href="/forgot">Esqueci minha senha</a>
              </div>
              <Button type="submit" className="AuiButton-root relative inline-flex flex-shrink-0 justify-center items-center gap-2 rounded transition-colors ease-in-out duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:select-none border-none cursor-pointer overflow-hidden bg-purpleseat-dark hover:enabled:bg-purpleseat-base text-white px-4 py-3 [&_svg]:size-6 text-md leading-[1.5rem]">Entrar</Button>

          </form>
    )
}