import Image from "next/image"

import ImgFrase from '../../../public/frase-efeito.png'

export const CardProfileStatus = () => {
    return (
        // <div className="w-[544px] h-[78px] gap-1">
        <div className="w-[279px] h-[76px] flex flex-col gap-1">
            <p className="text-[20px] font-medium text-dark10">
                Boa tarde, Iuri Silva
            </p>

            <Image src={ImgFrase} alt="" className="w-[100%] h-[48px]"/>
        </div>
    )
}