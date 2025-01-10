import { ReactNode } from "react"

interface CardProfileProps {
    txt: string;
    children: ReactNode;
}

export const CardProfile = ({ txt, children }: CardProfileProps) => {
    return (
        <div className="w-[130px] flex flex-col justify-between mr-[80px] relative">
            <p className="text-[14px] font-normal text-[#4b4b4b]">
                {txt}
            </p>
            <div className="w-auto max-w-[46px] flex items-center gap-[6px]">
                {children}
            </div>
        </div>
    )
}