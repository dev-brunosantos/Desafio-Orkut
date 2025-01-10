import { ContainerComunity } from "@/src/components/ContainerComunity";
import { ContainerUsers } from "@/src/components/ContainerUsers";
import { MenuPrincipal } from "@/src/components/MenuPrincipal";
import { PerfilComponent } from "@/src/components/PerfilComponent";
import Image from "next/image";

import ImgFrase from '../../../public/frase-efeito.png'
import Stars from '../../../public/img/svg/star.svg'
import Smiley from '../../../public/img/svg/smiley.svg'
import Like from '../../../public/img/svg/like.svg'
import Heart from '../../../public/img/svg/heart.svg'
import { CardProfile } from "@/src/components/profile/cardProfile";

export default function Home() {
    return (
        <div>
            <header className="w-[100%] flex items-center justify-center bg-dark40">
                <MenuPrincipal />
            </header>

            <main className="flex items-center justify-center">


                <div className="w-[100%] max-w-[1240px] flex gap-8">
                    <PerfilComponent />

                    <div className="w-[592px] h-[868px] flex flex-col items-center rounded-2xl gap-6 bg-dark40">
                        {/* CRIAR O COMPONENTE DE STATUS */}
                        <div className="w-[544px] h-[184px] flex flex-col gap-10">
                            <div className="w-[544px] h-[78px] gap-1">
                                <p className="text-[20px] font-medium text-[#4B4B4B]">
                                    Boa tarde, Iuri Silva
                                </p>

                                <Image src={ImgFrase} alt="" />
                            </div>

                            {/* <div className="[346px] h-[46px] flex justify-start"> */}
                            <div className="[346px] h-[46px] inline-flex">
                                {/* <div className="flex flex-col justify-between mr-10">
                                    <p className="text-[16px] font-normal text-[#4b4b4b]">
                                        Fã
                                    </p>
                                    <div className="w-auto max-w-[46px] flex items-center justify-center gap-[6px]">
                                        <Image src={Stars} alt="" />
                                        <p className="text-[16px] text-[#4B4B4B] font-normal">
                                            85
                                        </p>
                                    </div>
                                </div> */}

                                <CardProfile txt="Fã">
                                    <Image src={Stars} alt="" />
                                    <p className="text-[16px] text-[#4B4B4B] font-normal">
                                        85
                                    </p>
                                </CardProfile>

                                {/* <div className="flex flex-col justify-between mr-10">
                                    <p className="text-[16px] font-normal text-[#4b4b4b]">
                                        Confiável
                                    </p>
                                    <div className="w-auto max-w-[62px] flex items-center gap-[6px]">
                                        <Image src={Smiley} alt="" />
                                        <Image src={Smiley} alt="" />
                                    </div>
                                </div> */}

                                <CardProfile txt="Confiável">
                                    <Image src={Smiley} alt="" />
                                    <Image src={Smiley} alt="" />
                                </CardProfile>

                                {/* <div className="flex flex-col justify-between mr-16">
                                    <p className="text-[16px] font-normal text-[#4b4b4b]">
                                        Legal
                                    </p>
                                    <div className="w-auto max-w-[76px] flex items-center gap-[6px]">
                                        <Image src={Like} alt="" />
                                        <Image src={Like} alt="" />
                                        <Image src={Like} alt="" />
                                    </div>
                                </div> */}

                                <CardProfile txt="Legal">
                                    <Image src={Like} alt="" />
                                    <Image src={Like} alt="" />
                                    <Image src={Like} alt="" />
                                </CardProfile>

                                {/* <div className="flex flex-col justify-between mr-10">
                                    <p className="text-[16px] font-normal text-[#4b4b4b]">
                                        Sexy
                                    </p>
                                    <div className="w-auto max-w-[46px] flex items-center gap-[6px]">
                                        <Image src={Heart} alt="" />
                                        <Image src={Heart} alt="" />
                                    </div>
                                </div> */}

                                <CardProfile txt="Sexy">
                                    <Image src={Heart} alt="" />
                                    <Image src={Heart} alt="" />
                                </CardProfile>
                            </div>
                        </div>
                    </div>

                    <div className="w-auto h-[815px] flex flex-col gap-8">
                        <ContainerUsers />

                        <ContainerComunity />
                    </div>
                </div>
            </main>
        </div>
    )
}