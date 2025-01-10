import { MenuPrincipal } from "@/src/components/Menus/MenuPrincipal";
import { ContainerUsers } from "@/src/components/Conteiners/ContainerUsers";
import { ContainerComunity } from "@/src/components/Conteiners/ContainerComunity";
import { ContentProfile } from "@/src/components/profile/ContentProfile";
import { profileInfor } from "@/src/tools/profileInfor";
import { ContainerMusicsAndMovies } from "@/src/components/profile/ContainerMusicsAndMovies";
import { movies, musics } from "@/src/tools/musics_moviesInfor";
import { PerfilComponent } from "@/src/components/profile/PerfilComponent";

export default function Home() {
    return (
        <div>
            <header className="w-[100%] flex items-center justify-center bg-dark40">
                <MenuPrincipal />
            </header>

            <main className="flex items-center justify-center pt-[6%] pb-[3%]">
                <div className="w-[100%] max-w-[1240px] min-h-auto flex  gap-8">
                    <PerfilComponent />

                    <div className="w-[592px] h-[868px] py-8 px-6 flex flex-col items-start rounded-2xl gap-6 bg-dark40 ">
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

                    <div className="w-auto h-[815px] flex flex-col gap-8">
                        <ContainerUsers />

                        <ContainerComunity />
                    </div>
                </div>
            </main>
        </div>
    )
}