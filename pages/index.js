import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Link } from "@nextui-org/react";
import { UserIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} bg-[url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MjA0OTgzNC13aWtpbWVkaWEtaW1hZ2Uta293ZmM0bHouanBn.jpg')] bg-cover bg-no-repeat `}
    >
     
      <div className="h-screen grid grid-cols-5 container mx-auto max-w-7xl">
        <div className="col-span-full mt-8 max-h-16 flex items-center justify-between">
        <img src="/logo.png" />
        <Link href="/login">
        <Button isIconOnly size="sm" color="">
        <UserIcon className="text-white" />
      
      </Button>    
      </Link>
          </div>
        <div className="flex flex-col justify-center col-span-4 gap-4">
          <h3 className=" uppercase font-bold text-[120px] text-white">
            Descubre <br /> Punta Cana
          </h3>
          <Link href="/login">
          <Button className="self-start" radius="full" color="primary">
            Conocer más
          </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
