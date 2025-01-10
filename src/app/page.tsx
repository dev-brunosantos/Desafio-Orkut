"use client"

import Image from "next/image";
import { FormComponent } from "../components/FormComponent";
import { MenuComponent } from "../components/Menus/MenuComponent";

import ImgLogin from '../../public/img/users/img_login.png'

export default function App() {
  return (
    <div>
      <header className="w-[100%] flex items-center justify-center bg-dark40 fixed top-0 md:w-full sm:w-w-full">
        <MenuComponent />
      </header>

      <main className="w-[100%] h-[90vh] flex items-center justify-center ">
        <div className="w-auto h-[75%] gap-8 flex items-center justify-center">
          <Image src={ImgLogin} alt="" className="hidden lg:max-w-[700px] lg:h-[100%] lg:max-h-[598px] lg:block " />
          <FormComponent />
        </div>
      </main>

      <footer className="w-[100%] h-12 bg-dark40 flex items-center justify-center fixed bottom-0 md:w-full sm:w-full sm:px-6 sm:py-8">
        <div className="w-[100%] flex items-center justify-center md:w-full sm:w-full sm:bg-[red]">
          <p className="text-[14px] font-normal text-brandColor md:w-full sm:w-w-full">
            Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
