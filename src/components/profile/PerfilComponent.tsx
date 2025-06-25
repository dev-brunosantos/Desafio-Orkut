import Image from "next/image"

import Perfil from '../../../public/img/users/user-image.png'
import { BtnComponent } from "../BtnComponent"

export const PerfilComponent = () => {
    return (
        <div className="
            w-full flex flex-col items-center justify-evenly

            lg.w-auto lg:h-[400px] lg.flex lg.flex-col lg.items-center lg.relative 
        ">
            <div className="
                w-full flex flex-col items-center rounded-lg
                lg:w-[280px] lg:h-[312px] lg:rounded-2xl lg:flex lg:flex-col lg:items-center lg:justify-evenly lg:gap-6 bg-dark40
            "
            >

                <div className="w-[184px] h-[184px] flex items-center justify-center">
                    <Image src={Perfil} alt="" className="w-[100%] h-[100%]" />
                </div>

                <div className="w-[150px] h-[56px] flex flex-col items-center justify-center">
                    <p className="font-bold text-[20px] text-dark10">
                        Bruno Santos
                    </p>
                    <p className="text-[14px] text-dark10 font-normal">
                        Casado, Brasil
                    </p>
                </div>
            </div>

            <div className="w-[280px] h-auto ">
                <BtnComponent
                    titulo="Editar meu perfil"
                    btnPadrao={false}
                    btnBranco={true}
                />
            </div>
        </div>
    )
}