"use client";

import React from "react";
import NavBar from "./components/NavBar";
import { usePathname } from "next/navigation";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import Card from "./components/Card";
import tours from "@/utils/tourData";
import Layout from "./layout";
import AddTourModal from "./components/AddTourModal";

const index = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Layout>
      <main className="mx-auto container p-6 flex flex-col gap-8">
        <div className="flex items-center justify-between gap-6">
          <h3 className="text-3xl font-medium min-w-[230px]">Tours creados</h3>
          <div className="w-full h-[13px] justify-start items-center gap-2.5 inline-flex">
            <div className="w-[13px] h-[13px] rounded-full border border-zinc-400" />
            <div className="grow shrink basis-0 h-[0px] border border-zinc-400 border-dashed"></div>
          </div>
          <Button
            onClick={onOpen}
            className="rounded-md"
            startContent={<PlusIcon className="w-8 h-8 text-white" />}
            color="primary"
          >
            Agregar tour
          </Button>
        </div>

        <div className="flex justify-between gap-4">
          <Input
            border="sm"
            className="max-w-sm"
            startContent={<MagnifyingGlassIcon className="w-4 h-4" />}
            size="sm"
            type="text"
            placeholder="Buscar tour"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <Card key={tour.id} info={tour} />
          ))}
        </div>
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
