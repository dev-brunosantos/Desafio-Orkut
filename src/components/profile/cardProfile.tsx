// import Image from "next/image"
import { ReactNode } from "react"

// import ImgFrase from '../../../public/frase-efeito.png'
// import Stars from '../../../public/img/svg/star.svg'
// import Smiley from '../../../public/img/svg/smiley.svg'
// import Like from '../../../public/img/svg/like.svg'
// import Heart from '../../../public/img/svg/heart.svg'

interface CardProfileProps {
    txt: string;
    children: ReactNode;
}

export const CardProfile = ({ txt, children }: CardProfileProps) => {
    return (
        <div className="flex flex-col justify-between mr-10">
            <p className="text-[16px] font-normal text-[#4b4b4b]">
                {txt}
            </p>
            <div className="w-auto max-w-[46px] flex items-center justify-center gap-[6px]">
                {children}
                <p className="text-[16px] text-[#4B4B4B] font-normal">
                    85
                </p>
            </div>
        </div>
    )
}