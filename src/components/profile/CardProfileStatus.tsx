import Image from "next/image"

import ImgFrase from '../../../public/frase-efeito.png'

export const CardProfileStatus = () => {
    return (
        <div className="w-[544px] h-[78px] gap-1">
            <p className="text-[20px] font-medium text-dark10">
                Boa tarde, Bruno Santos
            </p>

            <Image src={ImgFrase} alt="" />
        </div>
    )
}