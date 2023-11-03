"use client";

import { TrashIcon } from "lucide-react";

import deleteProduct from "@/actions/deleteProduct";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";

export default function DeleteButton({ id }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [isPending, startTransition] = useTransition();
  const isMutating = isLoading || isPending;

  async function handleDelete(id) {
    // const isConfirmed = confirm("Sure to delete?");

    try {
      await deleteProduct(id);
      startTransition(() => {
        router.refresh();
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // <>
    //   <button onClick={() => handleDelete(id)}>Delete</button>
    // </>
    <Button
      disabled={isMutating}
      onClick={() => handleDelete(id)}
      variant="destructive"
      size="icon"
    >
      <TrashIcon className="w-4 h-4" />
      {isMutating ? <Loader2 className="w-4 h-4 ml-2 animate-spin" /> : null}
    </Button>
  );
}
