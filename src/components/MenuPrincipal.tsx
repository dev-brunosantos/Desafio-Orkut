"use client"

import Image from "next/image"
import Link from "next/link"
import { FaChevronDown } from "react-icons/fa";

import Logo from '../../public/img/svg/logo-orkut.svg'

export const MenuPrincipal = () => {
    return (
        <div className="w-[100%] max-w-[1240px] h-[62px] flex items-center justify-between bg-dark40 m-auto">
            <div className="w-[518px] flex items-center justify-around">
                <div>
                    <Image src={Logo} alt="" />
                </div>

                <nav className="w-[410px] flex items-center justify-evenly">
                    <Link href='' className="text-[16px] font-medium ">Inicio</Link>
                    <Link href='' className="text-[16px] font-medium text-brandColor">Perfil</Link>
                    <Link href='' className="text-[16px] font-medium">Comunidades</Link>
                    <Link href='' className="text-[16px] font-medium ">Jogos</Link>
                </nav>
            </div>

            <div className="w-[570px] flex ">
                <input type="text" placeholder="Pesquise no Orkut" />

                <div className="flex">
                    {/* <Image src='' alt="" /> */}

                    <p>Bruno Santos</p>

                    <button>
                        <FaChevronDown size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}