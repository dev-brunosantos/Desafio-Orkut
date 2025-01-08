"use client"

import Link from "next/link";
import { ButtonHTMLAttributes } from "react"

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    titulo: string;
    btnPadrao: boolean;
}

export const BtnComponent = ({ titulo, btnPadrao, ...rest }: BtnProps) => {

    if (btnPadrao) {
        return (
            <div className="w-[336px] h-[52px] my-2 rounded-lg gap-2 relative flex items-center justify-center bg-brandColor overflow-hidden" >
                <button
                    {...rest}
                    className="w-[100%] h-[100%] bg-transparent px-4 text-[16px] text-dark40 font-semibold"
                >
                    <Link href='home' >{titulo}</Link>
                </button>
            </div >
        )
    }


    return (
        <div className="w-[336px] h-[52px] my-2 rounded-lg gap-2 relative flex items-center justify-center bg-dark30 overflow-hidden">
            <button
                {...rest}
                className="w-[100%] h-[100%] bg-transparent px-4 text-[16px] text-brandColor font-semibold "
            >
                {titulo}
            </button>
        </div>
    )
}