"use client"

import Image, { StaticImageData } from "next/image"

interface CardImgProps {
    imagem: StaticImageData;
    descricao: string
}

export const CardImg = ({ imagem, descricao }:CardImgProps) => {
    return(
        <div className="w-14 h-20 gap-2 flex flex-col items-center justify-center cursor-pointer">
            <Image src={imagem} alt="" width={56} height={56} />
            <p className="text-[12px] font-normal text-dark10 text-center">
                {descricao}
            </p>
        </div>
    )
}