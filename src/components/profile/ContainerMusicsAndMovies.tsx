import { ReactNode } from "react"

interface Props {
    category: string;
    children: ReactNode;
    isMobile?: boolean;
}

export const ContainerMusicsAndMovies = ({ category, children, isMobile }: Props) => {

    if (isMobile) {
        return (
            <div className="flex items-center md:hidden">
                <p className="text-[14px] text-dark20 font-normal">
                    {category}:

                    {children}
                </p>

                <a href="" className="text-[12px] text-brandColor font-medium">Ver todos</a>
            </div>
        )
    }

    return (
        <div className="hidden md:flex md:items-center ">
            <p className="text-[14px] text-dark20 font-normal">
                {category}:

                {children}
            </p>

            <a href="" className="text-[12px] text-brandColor font-medium">Ver todos</a>
        </div>
    )
}