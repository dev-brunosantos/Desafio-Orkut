import { ContainerComunity } from "@/src/components/ContainerComunity";
import { ContainerUsers } from "@/src/components/ContainerUsers";
import { MenuPrincipal } from "@/src/components/MenuPrincipal";
import { PerfilComponent } from "@/src/components/PerfilComponent";

export default function Home() {
    return (
        <div>
            <header className="w-[100%] flex items-center justify-center bg-dark40">
                <MenuPrincipal />
            </header>

            <main className="flex items-center justify-center">


                <div className="w-[100%] max-w-[1240px] flex gap-8">
                    <PerfilComponent />

                    <div className="w-auto h-[815px] flex flex-col gap-8">
                        <ContainerUsers />
                        <ContainerComunity />
                    </div>
                </div>
            </main>
        </div>
    )
}