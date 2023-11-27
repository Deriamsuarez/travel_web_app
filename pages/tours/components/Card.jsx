import React from "react";
import {
  Card as CardUi,
  CardBody,
  CardFooter,
  Image,
  Button,
  Chip
} from "@nextui-org/react";
import {MapPinIcon} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

const Card = ({info}) => {
    const router = useRouter()

  return (
    <CardUi
      className="w-full"
      shadow="sm"
      isPressable
      onPress={() => router.push(`/dashboard/${info.id}`)}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          src="https://www.blogdelfotografo.com/wp-content/uploads/2014/08/61.jpg"
          shadow="sm"
          radius="lg"
          width="100%"
          className="w-full object-cover h-[140px]"
        />
        <div className="p-4  items-center flex justify-between">
          <div className="leading-4">
            <h3 className="font-bold text-md">Escursión al Este</h3>
            <span className="font-thin text-[12px] tracking-tighter	">
              República Dominicana
            </span>
          </div>
          <Chip startContent={<MapPinIcon className="w-4 h-4" />} color="primary" variant="bordered">Punta Cana</Chip>
        </div>

        <div className="p-4 flex justify-between text-[#607D8A]">
          <div className="leading-2 flex flex-col items-center">
            <span className="font-thin text-[14px] tracking-tighter	">
              Viajeros
            </span>
            <h3 className="font-medium text-green-600 ">20<span className="font-light text-gray-600">/50 </span> </h3>
          </div>
          <div className="leading-2 flex flex-col items-center">
            <span className="font-thin text-[14px] tracking-tighter	">
              Tiempo
            </span>
            <h3 className="font-medium">2 días</h3>
          </div>
          <div className="leading-2 flex flex-col items-center">
            <span className="font-thin text-[14px] tracking-tighter	">
              Disponibilidad
            </span>
            <div className="flex gap-2 items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full"/>
            <h3 className="font-medium">Sí</h3>

            </div>
          </div>
         
        </div>
      </CardBody>
    </CardUi>
  );
};

export default Card;
