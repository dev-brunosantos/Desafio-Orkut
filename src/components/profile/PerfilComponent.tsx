import Image from "next/image"

import Perfil from '../../../public/img/users/user-image.png'
import { BtnComponent } from "../BtnComponent"

export const PerfilComponent = () => {
    return (
        <div className="w-auto h-[400px] flex flex-col items-center relative z-0">
            {/* <div className="w-[280px] h-[312px] rounded-2xl flex flex-col items-center justify-evenly gap-6 bg-dark40"> */}
            <div className="w-[327px] h-[312px] rounded-2xl flex flex-col items-center justify-evenly gap-8 bg-dark40">
                <div className="w-[184px] h-[184px] flex items-center justify-center">
                    <Image src={Perfil} alt="" className="w-[100%] h-[100%]" />
                </div>

                <div className="w-[95px] h-[56px] flex flex-col items-center justify-center">
                    <p className="font-bold text-[20px] text-dark10">
                        Iuri Silva
                    </p>
                    <p className="text-[14px] text-dark10 font-normal">
                        Solteiro, Brasil
                    </p>
                </div>
            </div>

            {/* <div className="w-[280px] h-auto "> */}
            <div className="w-full h-auto flex items-center justify-center">
                <BtnComponent
                    titulo="Editar meu perfil"
                    btnPadrao={false}
                    btnBranco={true}
                />
            </div>
        </div>
    )
}