"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { FileEdit } from "lucide-react";
import { FileEditIcon } from "lucide-react";

export default function UpdateButton({ id }) {
  return (
    <Link href={`/admin/products/${id}`}>
      <Button size="icon" variant="outline">
        <FileEditIcon />
      </Button>
    </Link>
  );
}
