"use client"

import Image from "next/image"
import Link from "next/link"
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import Logo from '../../../public/img/svg/logo-orkut.svg'
import LogoPerfil from '../../../public/img/users/iuricode 1.png'
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    funcao: () => void;
}

export const MenuPrincipal = ({ children, funcao }: Props) => {
    return (
        <div className="w-[100%] max-w-[1240px] h-[62px] flex items-center justify-between bg-dark40 m-auto">
            <div className="w-[518px] flex items-center justify-around">
                <div>
                    <Image src={Logo} alt="" />
                </div>

                <nav className="hidden w-[410px] md:flex items-center justify-evenly">
                    <Link href='' className="text-[16px] font-medium ">Inicio</Link>
                    <Link href='' className="text-[16px] font-medium text-brandColor">Perfil</Link>
                    <Link href='' className="text-[16px] font-medium">Comunidades</Link>
                    <Link href='' className="text-[16px] font-medium ">Jogos</Link>
                </nav>
            </div>

            <div className="w-auto mr-3 flex gap-12 lg:w-[560px]">
                <div className="w-[355px] h-9 rounded-lg overflow-hidden hidden items-center gap-3 relative bg-dark30 lg:flex">

                    <FiSearch size={20} color="#B4AEAE"
                        className="absolute left-2"
                    />

                    <input type="text"
                        placeholder="Pesquise no Orkut"
                        className="w-[100%] h-[100%] outline-none bg-transparent text-[14px] 
                            font-normal text-[##B4AEAE] pl-9 z-50"
                    />
                </div>

                <div className="w-[157px] h-9 flex items-center gap-[14px]">
                    <Image src={LogoPerfil} alt="" className="h-[90%]" />

                    <div className="flex">
                        <p className="w-24 h-[100%] text-[14px] ">
                            Bruno Santos
                        </p>
                        <button className="" onClick={funcao}>
                            {children}
                            {/* <FaChevronDown size={15} color="#ed2590 " /> */}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}