import { ReactNode } from "react"

interface CardProfileProps {
    txt: string;
    children: ReactNode;
}

export const CardProfile = ({ txt, children }: CardProfileProps) => {
    return (
        <div className="flex flex-col justify-between items-start mr-[40px] relative">
            <p className="text-[14px] font-normal text-dark10">
                {txt}
            </p>
            <div className="w-auto max-w-[46px] flex items-center gap-[6px]">
                {children}
            </div>
        </div>
    )
}