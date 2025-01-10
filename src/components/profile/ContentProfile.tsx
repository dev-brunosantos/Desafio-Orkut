import Image from "next/image"
import { CardProfile } from "./CardProfile"
import { CardProfileStatus } from "./CardProfileStatus"

import Stars from '../../../public/img/svg/star.svg'
import Smiley from '../../../public/img/svg/smiley.svg'
import Like from '../../../public/img/svg/like.svg'
import Heart from '../../../public/img/svg/heart.svg'

export const ContentProfile = () => {
    return (
        // <div className="w-[544px] h-[164px] flex flex-col gap-10">
        <div className="w-[327px] h-[178px] flex flex-col items-center gap-10 ">
            <CardProfileStatus />

            <div className="w-[279px] h-[46px] flex px-3">
                <CardProfile txt="Fã">
                    <Image src={Stars} alt="" className="w-[16px] h-[16px]"/>
                    <p className="text-[14px] text-dark10 font-normal">
                        85
                    </p>
                </CardProfile>

                <CardProfile txt="Confiável">
                    <Image src={Smiley} alt="" className="w-[16px] h-[16px]"/>
                    <Image src={Smiley} alt="" className="w-[16px] h-[16px]"/>
                </CardProfile>

                <CardProfile txt="Legal">
                    <Image src={Like} alt="" className="w-[16px] h-[16px]"/>
                    <Image src={Like} alt="" className="w-[16px] h-[16px]"/>
                    <Image src={Like} alt="" className="w-[16px] h-[16px]"/>
                </CardProfile>

                <CardProfile txt="Sexy">
                    <Image src={Heart} alt="" className="w-[16px] h-[16px]"/>
                    <Image src={Heart} alt="" className="w-[16px] h-[16px]"/>
                </CardProfile>
            </div>
        </div>
    )
}