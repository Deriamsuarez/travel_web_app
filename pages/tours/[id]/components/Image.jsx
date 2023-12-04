import { useAddTourImg, useDeleteTourImg } from "@/connection";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { Button, Spinner } from "@nextui-org/react";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

const Image = ({ id, order, label = "agregar imagen", images }) => {
  const [image, setImage] = useState(null);
  let inputEl = null;

  const { data: addImg, isLoading, mutate } = useAddTourImg(id);

  const { mutate: deleteTourImg} = useDeleteTourImg(id)

  const queryClient = useQueryClient();

  const handleClickInput = () => {
    inputEl.click();
  };
  const handleImageChange = (e, imgId) => {
    const file = e?.target?.files?.[0];


    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      let base64Image = "";
      reader.onloadend = () => {
        base64Image = reader.result;
        const formattedBase = base64Image.split(",")[1];
        setImage(base64Image);
        const data = {
          data: formattedBase,
          order,
        };
        // const formData = new FormData();
        // formData.append("data", base64Image); // Puedes ajustar el nombre de la clave según tus necesidades
        // formData.append("order", 1); // Puedes ajustar el nombre de la clave según tus necesidades
    if(!imgId){
      mutate(data, {
        onSuccess: (data) => {
          toast.success("Imagen agregada correctamente");
          queryClient.invalidateQueries({
            queryKey: ["fetchExcursion"],
          });
        },
        onError: (error) => {
          toast.error("Ha ocurrido un error");
        },
      });

    }else{
      deleteTourImg(imgId, {
        onSuccess: (data) => {
          toast.success("Imagen agregada correctamente");
          queryClient.invalidateQueries({
            queryKey: ["fetchExcursion"],
          });
        },
        onError: (error) => {
          toast.error("Ha ocurrido un error");
        },
      });
    }
      };
    }
  };

  const handleDeleteImage = (e, imgId) => {
    console.log(imgId);
    if (imgId) {
      deleteTourImg(imgId, {
        onSuccess: (data) => {
          toast.success("Imagen eliminada correctamente");
          queryClient.invalidateQueries({
            queryKey: ["fetchExcursion"],
          });
        },
        onError: (error) => {
          toast.error("Ha ocurrido un error al eliminar la imagen");
        },
      });
    }
  };


  const imgFiltred = images.find((img) => img.order === order);
  return (
    <>
      {imgFiltred ? (
        <div className="relative">
          <Button
            onClick={(e) => handleDeleteImage(e, imgFiltred.id)}
            className="absolute right-2 top-2 "
            radius="full"
            color=""
            isIconOnly
          >
            <TrashIcon className="w-4 text-danger-500" />
          </Button>
          <input
            ref={(ref) => (inputEl = ref)}
            className="hidden"
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, imgFiltred.id)}
          />
          <img
            src={imgFiltred.url}
            className="cursor-pointer h-full w-full object-cover rounded-xl border-2  text-gray-400 p-2 min-h-[150px] max-h-[200px] flex flex-col gap-1 justify-center items-center"
          />
        </div>
      ) : !isLoading ? (
        <>
          <div
            onClick={handleClickInput}
            className="cursor-pointer rounded-xl border-2 hover:border-primary hover:text-primary text-gray-400 border-dashed p-4 min-h-[150px] max-h-[200px] flex flex-col gap-1 justify-center items-center"
          >
            <PhotoIcon className="w-6 " />
            <span className="uppercase font-bold text-[14px] ">{label}</span>
          </div>
          <input
            ref={(ref) => (inputEl = ref)}
            className="hidden"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </>
      ) : (
        <div className="cursor-pointer rounded-xl border-2   text-gray-400 border-dashed p-4 min-h-[150px] flex flex-col gap-1 justify-center items-center">
          <Spinner size="md" color="default" />
        </div>
      )}
    </>
  );
};

export default Image;
