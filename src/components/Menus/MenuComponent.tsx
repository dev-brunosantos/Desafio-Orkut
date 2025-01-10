import Image from "next/image"
import Link from "next/link"

import Logo from '../../../public/img/svg/logo-orkut.svg'

export const MenuComponent = () => {
    return (
        <div className="w-[100%] max-w-[1240px] h-[62px] flex items-center justify-between bg-dark40 m-auto ">
            <div className="w-[100%] flex items-center justify-center md:w-auto md:px-8 xl:w-auto">
                <Image src={Logo} alt="" />
            </div>

            <nav className="w-[332px]  justify-evenly hidden sm:flex">
                <Link href="">Sobre o Orkut</Link>
                <Link href="">Centro de segurança</Link>
            </nav>
        </div>
    )
}