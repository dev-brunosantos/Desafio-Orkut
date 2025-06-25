import Image from "next/image"
import Link from "next/link"

import Logo from '../../../public/img/svg/logo-orkut.svg'

export const MenuComponent = () => {
    return (
        <div className="w-[100%] max-w-[1240px] h-[62px] flex items-center justify-center bg-dark40 m-auto sm:justify-between sm:px-[2rem]">
            <div className="flex items-center justify-center">
                <Image src={Logo} alt="" />
            </div>

            <nav className="w-[332px] hidden justify-evenly sm:flex ">
                <Link href="">Sobre o Orkut</Link>
                <Link href="">Centro de segurança</Link>
            </nav>
        </div>
    )
}