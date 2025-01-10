// import Image from "next/image";

import { MenuPrincipal } from "@/src/components/MenuPrincipal";
import { PerfilComponent } from "@/src/components/PerfilComponent";
// import { CardProfileStatus } from "@/src/components/profile/CardProfileStatus";
// import { CardProfile } from "@/src/components/profile/CardProfile";
import { ContainerUsers } from "@/src/components/ContainerUsers";
import { ContainerComunity } from "@/src/components/ContainerComunity";
import { ContentProfile } from "@/src/components/profile/ContentProfile";
// import { pessoaInfor } from "@/src/components/profile/inforPerfil";
import pessoaInfor from "@/src/components/profile/inforPerfil.json";

export default function Home() {
    return (
        <div>
            <header className="w-[100%] flex items-center justify-center bg-dark40">
                <MenuPrincipal />
            </header>

            <main className="flex items-center justify-center">
                <div className="w-[100%] max-w-[1240px] flex  gap-8">
                    <PerfilComponent />

                    <div className="w-[592px] h-[868px] py-8 px-6 flex flex-col items-start rounded-2xl gap-6 bg-dark40">
                        <ContentProfile />

                        <div className="w-[405px] h-[596px] flex flex-col gap-6">
                            {
                                pessoaInfor.map(obj => (
                                    <p key={obj.Chave} className="text-[16px] text-[#B4AEAE] font-normal">
                                            {obj.Chave}
                                            : 
                                        <span className="text-[#4B4B4B] ">
                                            {obj.Valor}
                                        </span>
                                    </p>
                                ))
                            }
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