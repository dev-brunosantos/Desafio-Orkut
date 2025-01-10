"use client"

import { ContainerComponent } from "./ConteinerComponent"
import { CardImg } from "../CardImg"
import { usersImg } from "../../tools/usersInfor"

export const ContainerUsers = () => {
    return (
        <ContainerComponent
            titulo="Amigos" link="Ver todos"
        >
            <div className="w-[232px] h-[286px] gap-6 flex flex-wrap justify-evenly">
                {
            usersImg.map(card => (
              <CardImg 
                key={card.user}
                imagem={card.img}
                descricao={card.user}
              />
            ))
          }
            </div>
        </ContainerComponent>
    )
}