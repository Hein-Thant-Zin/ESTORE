"use client";

import { useRouter } from "next/navigation";
import ImageUpload from "../image-upload";
import { Button } from "../ui/button";
import { Controller, useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { tr } from "date-fns/locale";
import updateProduct from "@/actions/updateProduct";
import { Loader } from "lucide-react";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function ProductForm({
  initialData,
  categories,
  sizes,
  colors,
}) {
  // console.log({ initialData });
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [isPending, startTransition] = useTransition();
  const isMutating = isLoading || isPending;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    ...(initialData && { defaultValues: initialData }),
  });

  async function onSubmit(formData) {
    try {
      setIsLoading(true);
      //update mode
      if (initialData) {
        await updateProduct(initialData.id, formData);
      } else {
        await fetch(URL, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      startTransition(() => {
        router.refresh();
      });
      router.push("/admin/products");
    } catch (error) {
      console.log("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <article className="max-w-sm p-4 mx-auto ">
      <h1 className="text-2xl font-semibold text-center">
        {initialData ? "Update the Product" : "Make New Product"}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-2 ">
        <div className="">
          <label htmlFor="image">Image</label>
          <Controller
            name="imageUrl"
            control={control}
            render={({ field: { value, onChange } }) => (
              <ImageUpload
                value={value ? [value] : []}
                onChange={(url) => onChange(url)}
                onRemove={(url) => onChange(url)}
              />
            )}
          />
        </div>
        <div className="my-2">
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: "true" })}
            className="w-full px-2 py-1 mt-1 border rounded"
            type="text"
            id="name"
          />
          {errors.name && (
            <small className="mt-1 text-red-500">
              Enter your product name idiot 🙂
            </small>
          )}
        </div>

        <div>
          <label htmlFor="categoryId">Category</label>
          <select
            {...register("categoryId", { required: "true" })}
            className="w-full px-2 py-1 mt-1 border rounded"
            id="category"
          >
            <option value="">Choose Category</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <small className="mt-1 text-red-500">Choose category</small>
          )}
        </div>

        <div>
          <label htmlFor="sizeId">Size</label>
          <select
            {...register("sizeId", { required: "true" })}
            className="w-full px-2 py-1 mt-1 border rounded"
            id="name"
          >
            {sizes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="colorId">Color</label>
          <select
            {...register("colorId", { required: "true" })}
            className="w-full px-2 py-1 mt-1 border rounded"
            id="name"
          >
            {colors.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            {...register("price", { required: "true" })}
            className="w-full px-2 py-1 mt-1 border rounded"
            type="text"
            id="name"
          />
          {errors.price && (
            <small className="mt-1 text-red-500">Where is price</small>
          )}
        </div>
        <div>
          <label htmlFor="description">
            Description
            <textarea
              {...register("description")}
              className="w-full px-2 py-1 mt-1 border rounded"
              id="description"
              rows="5"
            ></textarea>
          </label>
        </div>

        <div className="float-right pb-2">
          <Link href="/admin/products">
            <Button className="mr-1" variant="outline" size="sm">
              Cancel
            </Button>
          </Link>
          <Button disabled={isMutating} size="sm">
            {initialData ? "Update" : "Create"}
            {isMutating ? (
              <Loader2 className="w-4 h-4 ml-2 animate-spin" />
            ) : null}
          </Button>
        </div>
      </form>
    </article>
  );
}
