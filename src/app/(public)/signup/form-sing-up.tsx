'use client'
import { Button } from "@/componets/button";
import { InputField, InputRoot } from "@/componets/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const singUpSchema = z.object({
    name: z.string().min(2, 'Digite seu nome completo'),
    email: z.string().email('Digite um email válido'),
    password: z.string().min(7, 'Digite uma senha com mais de 4 caracteres'),
    passwordConfirm: z.string().min(7, 'Confirme sua senha')
  }).refine((data) => data.password === data.passwordConfirm, {
    message: 'As senhas devem ser iguais',
    path: ['passwordConfirm'], // A mensagem de erro será exibida neste campo
  });
  
  type singUpSchema = z.infer<typeof singUpSchema>
  
  

export function FormSingUp(){
    const router = useRouter()
  const searchParms = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<singUpSchema>({
    resolver: zodResolver(singUpSchema),
  })
  async function onSingUp({ name, email, password, passwordConfirm }: singUpSchema) {
    const referrer = searchParms.get('referrer')
    console.log('teste')
    //const { subscriberId } = await subscribeToEvent({ name, email, referrer })
    //router.push(`/invite/${subscriberId}`)
  }

    return (
        <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 [&>label]:text-sm [&>label]:text-gray-200">
                <span>Nome completo</span>
                <InputRoot>
                  <InputField placeholder="Seu nome completo" />
                </InputRoot>
                {errors.name && (
                  <p className='text-danger text-xs font-semibold'>{errors.name.message}</p>
                )}
              </div>
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
                  <InputField placeholder="Deve ter no mínimo 7 caracteres" />
                </InputRoot>
                {errors.password && (
                  <p className='text-danger text-xs font-semibold'>{errors.password.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2 [&>label]:text-sm [&>label]:text-gray-200">
                <span>Confirme sua senha</span>
                <InputRoot>
                  <InputField placeholder="Deve ter no mínimo 7 caracteres" />
                </InputRoot>
                {errors.passwordConfirm && (
                  <p className='text-danger text-xs font-semibold'>{errors.passwordConfirm.message}</p>
                )}
              </div>
              <p className="text-sm text-gray-200 [&>a]:text-purpleseat-light [&>a]:transition [&>a:hover]:brightness-125">
              Ao se cadastrar, você aceita nossos <a href="/" target="_blank">termos de uso</a> e a nossa <a href="/" target="_blank">política de privacidade</a>.
              </p>
              <Button type="submit" className="AuiButton-root relative inline-flex flex-shrink-0 justify-center items-center gap-2 rounded transition-colors ease-in-out duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:select-none border-none cursor-pointer overflow-hidden bg-purpleseat-dark hover:enabled:bg-purpleseat-base text-white px-4 py-3 [&_svg]:size-6 text-md leading-[1.5rem]">Entrar</Button>

          </form>
    )
}