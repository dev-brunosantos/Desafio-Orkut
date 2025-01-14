"use client"

import Link from "next/link";

interface BtnProps {
    titulo: string;
    btnPadrao: boolean;
    btnBranco?: boolean;
}

export const BtnComponent = ({ titulo, btnPadrao, btnBranco }: BtnProps) => {

    if (btnPadrao) {
        return (
            <div className="w-[336px] h-[52px] my-2 rounded-lg gap-2 relative flex items-center justify-center bg-brandColor overflow-hidden" >
                <Link href='home' className="w-[100%] h-[100%] bg-transparent px-4 text-[16px] text-dark40 font-semibold flex items-center justify-center " >
                    {titulo}
                </Link>
            </div >
        )
    }

    if (btnBranco) {
        return (
            <div className="w-[100%] h-[52px] my-2 rounded-lg gap-2 flex items-center justify-center bg-dark40 overflow-hidden relative">
                <Link href='home' className="w-[100%] h-[100%] bg-transparent px-4 text-[16px] text-brandColor font-semibold flex items-center justify-center " >
                    {titulo}
                </Link>
            </div>
        )
    }

    return (
        <div className="w-[336px] h-[52px] my-2 rounded-lg gap-2 relative flex items-center justify-center bg-dark30 overflow-hidden">
            <Link href='home' className="w-[100%] h-[100%] bg-transparent px-4 text-[16px] text-brandColor font-semibold flex items-center justify-center " >
                {titulo}
            </Link>
        </div>
    )
}