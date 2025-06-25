"use client"

import Image from "next/image";
import { FormComponent } from "../components/FormComponent";
import { MenuComponent } from "../components/Menus/MenuComponent";

import ImgLogin from '../../public/img/users/img_login.png'

export default function App() {
  return (
    <div>
      <header className="w-[100%] flex items-center justify-center bg-dark40 fixed top-0">
        <MenuComponent />
      </header>

      <main className="w-[100%] h-[100vh] flex items-center justify-center ">
        <div className="w-auto h-[75%] gap-8 flex items-center justify-center">
          <Image src={ImgLogin} alt="" className="max-w-[700px] h-[100%] max-h-[598px] hidden lg:flex" />
          <FormComponent />
        </div>
      </main>

      <footer className="w-[100%] h-12 bg-dark40 flex items-center justify-center fixed bottom-0">
        <div className="w-[25%] flex items-center justify-center">
          <p className="text-[14px] font-normal text-brandColor">
            Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
