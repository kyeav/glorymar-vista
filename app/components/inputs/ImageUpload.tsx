"use client";

import { Card, CardBody } from "@chakra-ui/react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

const uploadPreset = "hl31fk2n";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <Card
            variant={"outline"}
            onClick={() => open?.()}
            className="p-20 relative cursor-pointer hover:opacity-70 transition border-dashed border-2 border-neutral-300 gap-4 text-neutral-600
          "
          >
            <CardBody className="flex flex-col justify-center items-center">
              <TbPhotoPlus size={50} />
              <div className="font-semibold text-lg">Click to upload</div>
              {value && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={value}
                    alt="House"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
            </CardBody>
          </Card>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
