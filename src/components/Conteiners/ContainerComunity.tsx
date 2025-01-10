"use client"

import { ContainerComponent } from "./ConteinerComponent"
import { CardImg } from "../CardImg"
import { comunityImg } from "../../tools/comunityInfor"

export const ContainerComunity = () => {
    return (
        <ContainerComponent
            titulo="Amigos" link="Ver todos"
        >
            <div className="w-[232px] h-[286px] gap-6 flex flex-wrap justify-evenly">
                {
            comunityImg.map(card => (
              <CardImg 
                key={card.comunity}
                imagem={card.image}
                descricao={card.comunity}
              />
            ))
          }
            </div>
        </ContainerComponent>
    )
}