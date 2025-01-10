"use client"

import { ReactNode } from "react"

interface ContainerTxtProps {
    titulo: string;
    link: string;
    children: ReactNode;
}

export const ContainerComponent = ({ titulo, link, children }: ContainerTxtProps) => {
    return (
        // <div className="w-[280px] h-[384px] p-6 gap-8 rounded-2xl bg-dark40 flex flex-col">
        <div className="w-[327px] h-[384px] p-6 gap-8 rounded-2xl bg-dark40 flex flex-col items-center">
            <div className="w-[232px] h-[18px] items-center justify-between flex">
                <p className="text-[12px] font-semibold text-dark10">{titulo}</p>
                <a href="" className="text-[12px] text-brandColor font-medium">{link}</a>
            </div>

            { children }
        </div>
    )
}