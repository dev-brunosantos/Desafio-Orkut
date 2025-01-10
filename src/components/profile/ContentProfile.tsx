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

            <div className="[346px] h-[46px] inline-flex">
                <CardProfile txt="Fã">
                    <Image src={Stars} alt="" />
                    <p className="text-[16px] text-[#4B4B4B] font-normal">
                        85
                    </p>
                </CardProfile>

                <CardProfile txt="Confiável">
                    <Image src={Smiley} alt="" />
                    <Image src={Smiley} alt="" />
                </CardProfile>

                <CardProfile txt="Legal">
                    <Image src={Like} alt="" />
                    <Image src={Like} alt="" />
                    <Image src={Like} alt="" />
                </CardProfile>

                <CardProfile txt="Sexy">
                    <Image src={Heart} alt="" />
                    <Image src={Heart} alt="" />
                </CardProfile>
            </div>
        </div>
    )
}