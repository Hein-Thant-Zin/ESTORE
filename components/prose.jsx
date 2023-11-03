import { cn } from "@/lib/utils";
import React from "react";

export default function Prose({ html, className }) {
  return (
    <div
      className={cn(
        "mx-auto max-w-6xl text-base leading-7 text-black",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
