import React from "react";
import NavBar from "./components/NavBar";
import { usePathname } from "next/navigation";
import { Button, Input, Spinner, useDisclosure } from "@nextui-org/react";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import Card from "./components/Card";
import Layout from "./layout";
import AddTourModal from "./components/AddTourModal";
import { useTours } from "@/connection";

const index = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const tours = useTours();

  const activeTours = tours.data?.filter((elem) => elem.isActive !== false);
  console.log(activeTours);
  return (
    <Layout>
      <main className="mx-auto container p-6 flex flex-col gap-8">
        <div className="flex items-center justify-between gap-6">
          <h3 className="text-3xl font-medium min-w-[230px]">Tours creados</h3>
          <div className="w-full h-[13px] justify-start items-center gap-2.5 inline-flex"></div>
          <Button onClick={onOpen} className="rounded-md" color="primary">
            Agregar tour
          </Button>
        </div>

        <div className="flex justify-between gap-4"></div>
        {tours.isSuccess ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeTours.map((tour, index) => (
              <Card key={tour.id} info={tour} />
            ))}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        )}
      </main>

      <AddTourModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </Layout>
  );
};

export default index;
