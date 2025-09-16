"use client";

import { SectionHeader } from "@/components/sectionHeader";
import phone from "../../public/phone_contact.svg";
import linkedin from "../../public/linkedin_contact.svg"
import github from "../../public/github_contact.svg"
import Image from "next/image";
import FlickeringGrid from "@/components/ui/flickering-grid";
// import { useMediaQuery } from "react-responsive";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import { useTranslation } from "react-i18next";

const formsResponse = z.object({
  nome: z.string().nonempty().min(2, {message: 'Porfavor entre com seu nome'}),
  email: z.string().nonempty().email({message: 'Porfavor entre com um email válido'}),
  mensagem: z.string().nonempty().min(10, {message: 'Porfavor entre com uma mensagem de no mínimo 10 caracteres'}),
})

type FormsResponse = z.infer<typeof formsResponse>

export default function Contact() {

  const { t } = useTranslation()

  const { register, handleSubmit, formState, reset } = useForm<FormsResponse>({
    resolver: zodResolver(formsResponse)
  });

  const isLoading = formState.isSubmitting;

  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const onSubmit = async (data: FormsResponse) => {
    const mailText = 
    `Nome: ${data.nome}\n` +
    `Email: ${data.email}\n` +
    `Mensagem: ${data.mensagem}`;

    const response = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        subject: `Contato pelo portfólio - ${data.nome}`,
        text: mailText,
      }),
    });

    if (response.ok) {
      toast.success(t("contact.toast.success"));
      reset();
    }
    else {
      toast.error(t("contact.toast.error"));
      console.error('Erro ao enviar email:', response.statusText);
    }
  }

  return (
    <div id="contact" className="relative dark:bg-zinc-800 bg-violet-200 px-8 md:px-16 py-6 md:py-20 bg-background overflow-hidden">

      <FlickeringGrid 
        className="z-0 absolute inset-2 inset-y-2 size-full"
        squareSize={4}
        gridGap={8}
        color="#8b5cf6"
        maxOpacity={0.4}
        flickerChance={0.1}
      />
      {/* {!isMobile && ( */}
        {/* <BackgroundBeams /> */}
      {/* )} */}

      <SectionHeader sectionNumber={"101"} sectionName={t("contact.title")} />

      <div className="relative z-20 flex flex-col justify-center items-center text-center gap-4">
        <div className="max-w-[634px]">
          <span className="font-poppins font-bold text-4xl md:text-6xl dark:text-white text-black">{t("contact.t2")}</span>
        </div>
        
        <div className="max-w-[634px]">
          <form className="p-6 rounded-lg space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2  dark:bg-zinc-900 text-white rounded-[6px] border border-violet-400 dark:border-zinc-700 focus:ring-2 focus:ring-violet-500 focus:outline-none"
              placeholder={t("contact.name")}
              {...register("nome")}
            />
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 dark:bg-zinc-900 text-white rounded-[6px] border border-violet-400 dark:border-zinc-700 focus:ring-2 focus:ring-violet-500 focus:outline-none"
              placeholder={t("contact.email")}
              {...register("email")}
            />
            <textarea
              id="message"
              rows={4}
              className="resize-none w-full px-4 py-2 dark:bg-zinc-900 text-white rounded-[6px] border border-violet-400 dark:border-zinc-700 focus:ring-2 focus:ring-violet-500 focus:outline-none"
              placeholder={t("contact.message")}
              {...register("mensagem")}
            />
            <button
              type="submit"
              className="shadow-glow w-8/12 px-4 py-2 bg-violet-500 dark:bg-zinc-900 border border-violet-500 text-white dark:text-violet-500 rounded-[6px] font-semibold hover:bg-violet-700  dark:hover:bg-violet-500 hover:text-white transition focus:ring-white dark:focus:ring-violet-500 focus:outline-none"
              disabled={isLoading}
            >
              {isLoading ? t("contact.button.loading") : t("contact.button.submit")}
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-0 md:flex-row w-full md:justify-around max-w-[600px] pt-2">
          <div className="flex flex-col items-center gap-2 max-w-[222px] w-full">
            <div className="shadow-glow bg-white dark:bg-zinc-900 w-fit h-fit p-4 rounded-full flex items-center justify-center border border-violet-500 dark:border-none">
              <a href="https://wa.me/5535984232379" target="_blank" rel="noopener noreferrer"><Image src={phone} alt={''} width={40} height={40}/></a>
            </div>
            <div className="flex flex-col">
              <span className="text-black dark:text-white font-semibold text-lg">{t("contact.cellphone")}</span>
              <span className="text-zinc-600 dark:text-zinc-300 font-semibold">(+55) 35 98423-2379</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 max-w-[222px] w-full">
            <div className="shadow-glow bg-white dark:bg-zinc-900 w-fit h-fit p-4 rounded-full flex items-center justify-center border border-violet-500 dark:border-none">
              <a href="https://www.linkedin.com/in/yvessrib" target="_blank" rel="noopener noreferrer"><Image src={linkedin} alt={''} width={40} height={40} /></a>
            </div>
            <div className="flex flex-col">
              <span className="text-black dark:text-white font-semibold text-lg">Linkedin</span>
              <span className="text-zinc-600 dark:text-zinc-300 font-semibold">@yvessrib</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 max-w-[222px] w-full">
            <div className="shadow-glow bg-white dark:bg-zinc-900 w-fit h-fit p-4 rounded-full flex items-center justify-center border border-violet-500 dark:border-none">
              <a href="https://github.com/yvessrib" target="_blank" rel="noopener noreferrer"><Image src={github} alt={''} width={40} height={40} /></a>
            </div>
            <div className="flex flex-col">
              <span className="text-black dark:text-white font-semibold text-lg">Github</span>
              <span className="text-zinc-600 dark:text-zinc-300 font-semibold">@yvessrib</span>
            </div>
          </div>

        </div>
      </div>
      <Toaster />
    </div>
  );
}
