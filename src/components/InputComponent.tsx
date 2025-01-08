"use client"

import { InputHTMLAttributes, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isPassword: boolean
}

export const InputComponent = ({ isPassword, ...rest }: InputProps) => {

    const [tipo, setTipo] = useState('password')

    const verSenha = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        tipo === 'password' ?
            setTipo('text') :
            setTipo('password')
    }

    if (isPassword) {
        return (
            <div className="w-[336px] h-[52px] my-2 rounded-lg gap-2 relative flex items-center justify-center bg-dark30 overflow-hidden">
                <input
                    type={tipo} {...rest}
                    className="w-[100%] h-[100%] bg-transparent px-4 text-[16px] text-dark10 outline-none placeholder:text-[#868686]"
                />

                <button
                    onClick={verSenha}
                    className="absolute right-0 bg-transparent h-[100%] p-4 flex items-center justify-center"
                >
                    {
                        tipo === 'password' ?
                            <FaEyeSlash size={30} color="#868686" /> :
                            <FaEye size={30} color="#868686" />
                    }
                </button>
            </div>
        )
    }

    return (
        <div className="w-[336px] h-[52px] my-2 rounded-lg gap-2 relative flex items-center justify-center bg-dark30 overflow-hidden">
            <input
                type='text' {...rest}
                className="w-[100%] h-[100%] bg-transparent px-4 text-[16px] text-dark10 outline-none placeholder:text-[#868686]"
            />
        </div>
    )
}