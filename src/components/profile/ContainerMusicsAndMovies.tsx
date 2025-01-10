import { ReactNode } from "react"

interface Props {
    category: string;
    children: ReactNode;
}

export const ContainerMusicsAndMovies = ({ category, children }: Props) => {
    return (
        <div className="flex items-center">
            <p className="text-[14px] text-[#B4AEAE] font-normal">
                {category}:

                {children}

                {/* <span className="text-[#4B4B4B] border border-brandColor rounded-[30px] py-0.5 px-4 ml-[4.5px] mr-[13px]">
                    Trap
                </span>
                <span className="text-[#4B4B4B] border border-brandColor rounded-[30px] py-0.5 px-4 mr-[13px]">
                    Rap
                </span>
                <span className="text-[#4B4B4B] border border-brandColor rounded-[30px] py-0.5 px-4 mr-[13px]">
                    Indie
                </span> */}
            </p>

            <a href="" className="text-[12px] text-brandColor font-medium">Ver todos</a>
        </div>
    )
}