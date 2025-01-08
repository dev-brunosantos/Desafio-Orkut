import Link from "next/link"

import Logo from '../../public/img/svg/logo-orkut.svg'
import Image from "next/image"

export const MenuComponent = () => {
    return (
        <div className="w-[100%] max-w-[1240px] h-[62px] flex items-center justify-between bg-dark40 m-auto">
            <div>
                <Image src={Logo} alt="" />
            </div>

            <nav className="w-[332px] flex justify-evenly">
                <Link href="">Sobre o Orkut</Link>
                <Link href="">Centro de segurança</Link>
            </nav>
        </div>
    )
}