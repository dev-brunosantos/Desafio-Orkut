import { ReactNode } from "react"

interface Props {
    category: string;
    children: ReactNode;
}

export const ContainerMusicsAndMovies = ({ category, children }: Props) => {
    return (
        <div className="flex items-center">
            <p className="text-[14px] text-dark20 font-normal">
                {category}:

                {children}
            </p>

            <a href="" className="text-[12px] text-brandColor font-medium">Ver todos</a>
        </div>
    )
}