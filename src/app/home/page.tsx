"use client"

import { MenuPrincipal } from "@/src/components/Menus/MenuPrincipal";
import { ContainerUsers } from "@/src/components/Conteiners/ContainerUsers";
import { ContainerComunity } from "@/src/components/Conteiners/ContainerComunity";
import { ContentProfile } from "@/src/components/profile/ContentProfile";
import { profileInfor } from "@/src/tools/profileInfor";
import { ContainerMusicsAndMovies } from "@/src/components/profile/ContainerMusicsAndMovies";
import { movies, musics } from "@/src/tools/musics_moviesInfor";
import { PerfilComponent } from "@/src/components/profile/PerfilComponent";
import Link from "next/link";
import { useState } from "react";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Home() {

    const [abrir, setAbrir] = useState('fechar-menu')

    function menu() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        abrir === 'fechar-menu' ?
            setAbrir('abrir-menu') :
            setAbrir('fechar-menu')
    }

    return (
        <div>
            <header className="w-[100%] flex items-center justify-center bg-dark40 relative">
                <MenuPrincipal funcao={menu}>
                    {
                        abrir === 'fechar-menu' ?
                            <FaChevronDown size={15} color="#ed2590 " /> :
                            <FaChevronUp size={15} color="#ed2590 " />
                    }
                </MenuPrincipal>

                <div className="w-[177px] h-auto flex items-center gap-[14px] absolute right-0 top-[97%] ">
                    {/* <div className="fechar-menu"> */}
                    {/* <nav className="w-[410px] h-[200px] bg-dark40 flex flex-col items-start justify-evenly px-4 rounded-md"> */}
                    {/* <nav className="w-[410px] h-[100%] bg-dark40 flex flex-col items-start justify-evenly px-4 rounded-md"> */}
                    <nav className={abrir}>
                        <Link href='' className="text-[14px] font-medium ">Inicio</Link>
                        <Link href='' className="text-[14px] font-medium ">Perfil</Link>
                        <Link href='' className="text-[14px] font-medium">Comunidades</Link>
                        <Link href='' className="text-[14px] font-medium ">Jogos</Link>
                        <Link href='/' className="text-[14px] font-medium ">Sair</Link>
                    </nav>
                </div>
            </header>

            <main className="flex items-center justify-center pt-[6%] pb-[3%]">
                <div className="
                    sm:w-[100%] sm:max-w-[1240px] sm:min-h-auto sm:flex sm:flex-col sm:items-center sm:gap-8
                    lg:w-[100%] lg:max-w-[1240px] lg:min-h-auto lg:flex lg:flex-row lg:items-start lg:gap-8
                ">
                    <PerfilComponent />

                    <div className="
                        md:w-[592px] md:h-[868px] md:py-8 md:px-6 md:flex md:flex-col md:items-start md:rounded-2xl md:gap-6 bg-dark40 
                    ">
                        <ContentProfile />

                        <div className="w-[80%] max-h-auto min-h-[596px] flex flex-col gap-6 ">
                            {
                                profileInfor.map(obj => (
                                    <p key={obj.Chave} className="text-[14px] text-dark20 font-normal">
                                        {obj.Chave}
                                        :
                                        <span className="text-dark10 ">
                                            {obj.Valor}
                                        </span>
                                    </p>
                                ))
                            }

                            <ContainerMusicsAndMovies category="Musicas">
                                {
                                    musics.map(item => (
                                        <span key={item.music} className="text-dark10 border border-brandColor rounded-[30px] py-0.5 px-4 ml-[4.5px] mr-[8.5px]">
                                            {item.music}
                                        </span>
                                    ))
                                }
                            </ContainerMusicsAndMovies>

                            <ContainerMusicsAndMovies category="Musicas">
                                {
                                    movies.map(item => (
                                        <span key={item.movie} className="text-dark10 border border-brandColor rounded-[30px] py-0.5 px-4 ml-[4.5px] mr-[8.5px]">
                                            {item.movie}
                                        </span>
                                    ))
                                }
                            </ContainerMusicsAndMovies>
                        </div>
                    </div>

                    <div className="
                        sm:flex sm:flex-row sm:items-center sm:justify-evenly sm:w-[90%] sm:min-h-auto sm:gap-6
                        lg:w-auto lg:h-[815px] lg:flex lg:flex-col lg:justify-evenly lg:gap-8       
                    ">
                        <ContainerUsers />

                        <ContainerComunity />
                    </div>
                </div>
            </main>
        </div>
    )
}