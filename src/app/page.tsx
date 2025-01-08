"use client"

import Image from "next/image";
import { FormComponent } from "../components/FormComponent";
import { MenuComponent } from "../components/MenuComponent";

import ImgLogin from '../../public/img/users/img_login.png'

export default function App() {
  return (
    <div className="w-[1920px] flex flex-col justify-center">
      <header className="w-[100%]  bg-dark40 m-auto">
        <MenuComponent />
      </header>

      <main className="w-[100%] m-auto flex items-center justify-center">
        <div className="w-[1240px] h-[100%] flex items-center justify-between border-brandColor border">
          <Image src={ImgLogin} alt="" />

          <FormComponent />
        </div>
      </main>

      <footer className="w-[100%] h-12  bg-dark40 m-auto">
        <div className="w-[25%] h-[100%] m-auto flex items-center justify-center">
          <p className="text-brandColor font-normal text-[14px]">
            Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
