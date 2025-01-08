"use client"

import Image from "next/image"
import { BtnComponent } from "./BtnComponent"
import { InputComponent } from "./InputComponent"

import PsOrkut from '../../public/img/svg/ps_orkut.svg';

export const FormComponent = () => {
    return (
        <div className="w-[384px] h-[596px] flex flex-col items-center justify-evenly bg-dark40 rounded-2xl">
            <div className="w-[178px] h-[78px] flex flex-col items-center justify-evenly">
                <Image src={PsOrkut} alt="" />

                <h1 className="text-brandColor text-[24px] font-semibold">Acesse o Orkut</h1>
            </div>

            <div>
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu usuário"
                />

                <InputComponent
                    isPassword={false}
                    placeholder="Digite sua senha"
                />
            </div>

            <div className="w-[336px] flex items-center">
                <input type="checkbox" name="" id="lembrarSenha" 
                    className="appearance-none w-4 h-4 border rounded cursor-pointer relative bg-dark30 checked:bg-brandColor " 
                />
                <label htmlFor="lembrarSenha" className="text-brandColor text-[12px] font-normal ml-2">Lembrar minha senha</label>
            </div>

            <div>
                <BtnComponent
                    titulo="Entrar na conta"
                    btnPadrao={true}
                />

                <BtnComponent
                    titulo="Cria uma conta"
                    btnPadrao={false}
                />
            </div>
        </div>
    )
}