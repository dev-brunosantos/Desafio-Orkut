import Image from "next/image"
import { CardProfile } from "./CardProfile"
import { CardProfileStatus } from "./CardProfileStatus"

import Stars from '../../../public/img/svg/star.svg'
import Smiley from '../../../public/img/svg/smiley.svg'
import Like from '../../../public/img/svg/like.svg'
import Heart from '../../../public/img/svg/heart.svg'

export const ContentProfile = () => {
    return (
        <div className="w-[544px] h-[184px] flex flex-col gap-10">
            <CardProfileStatus />

            <div className="[346px] h-[46px] flex">
                <CardProfile txt="Fã">
                    <Image src={Stars} alt="" className="w-[18px] h-[18px]"/>
                    <p className="text-[14px] text-[#4B4B4B] font-normal">
                        85
                    </p>
                </CardProfile>

                <CardProfile txt="Confiável">
                    <Image src={Smiley} alt="" className="w-[18px] h-[18px]"/>
                    <Image src={Smiley} alt="" className="w-[18px] h-[18px]"/>
                </CardProfile>

                <CardProfile txt="Legal">
                    <Image src={Like} alt="" className="w-[18px] h-[18px]"/>
                    <Image src={Like} alt="" className="w-[18px] h-[18px]"/>
                    <Image src={Like} alt="" className="w-[18px] h-[18px]"/>
                </CardProfile>

                <CardProfile txt="Sexy">
                    <Image src={Heart} alt="" className="w-[18px] h-[18px]"/>
                    <Image src={Heart} alt="" className="w-[18px] h-[18px]"/>
                </CardProfile>
            </div>
        </div>
    )
}