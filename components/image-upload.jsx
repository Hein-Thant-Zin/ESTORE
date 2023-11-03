"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import { LucideUploadCloud } from "lucide-react";

export default function ImageUpload({ value, onChange, onRemove }) {
  function onUpload(result) {
    onChange(result.info.secure_url);
    // console.log(result.info);
  }

  return (
    <section>
      <ul>
        {value.map((url) => (
          <li className="relative w-[220px] aspect-square rounded-md" key={url}>
            <button
              type="button"
              className="absolute z-10 top-2 right-1"
              onClick={() => onRemove(url)}
            >
              <TrashIcon />
            </button>
            <Image
              src={url}
              className="object-cover"
              fill
              alt="product photo"
            />
          </li>
        ))}
      </ul>
      <CldUploadWidget onUpload={onUpload} uploadPreset="x0fiv9ll">
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return (
            <Button
              className="w-24 h-10 p-1 py-2 mt-1 rounded button bg-slate-500"
              onClick={handleOnClick}
            >
              <LucideUploadCloud className="" variant="" size="md" />
            </Button>
          );
        }}
      </CldUploadWidget>
    </section>
  );
}
