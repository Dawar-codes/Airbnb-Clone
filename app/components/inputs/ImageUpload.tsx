"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  var cloudinary: any;
}

interface ImagUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImagUploadProps> = ({ onChange, value }) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleUpload = useCallback((result: any) => {
    /* When a user uploads an image, Cloudinary returns an object called result.
        result.info.secure_url contains the URL of the uploaded image */
      onChange(result.info.secure_url);
    }, [onChange]
  );

  return (
    <div>
      <CldUploadWidget
        onSuccess={handleUpload}
        uploadPreset="scoer8oq"
        options={{
          maxFiles: 1,
        }}
      >
        {({ open }) => {
          return (
            <div
              onClick={() => open?.()}
              className="relative cursor-pointer hover:opacity-80 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
            >
              <TbPhotoPlus size={50} />
              <div className="font-semibold text-lg">Click to Upload</div>
              {value && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    alt="upload"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    src={value}
                  />
                </div>
              )}
            </div>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
