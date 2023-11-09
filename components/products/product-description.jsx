import React from "react";
import VariantSelector from "./variant-selector";
import AddToCart from "../cart/add-to-cart";
import Prose from "../prose";

export default function ProductDescription({ product }) {
  const { id, name, category, imageUrl, price, description, sizes } = product;

  return (
    <>
      <div className="flex flex-col py-6 mb-6 border-b">
        <h1 className="mb-5 text-5xl font-medium">{name}</h1>
        <div className="p-2 mr-auto text-sm text-white bg-blue-500 rounded-full ">
          <p>
            ${price} <span className="inline ml-1">USD</span>
          </p>
        </div>
      </div>
      {/* <VariantSelector sizes={sizes} /> */}
      <p>{category?.name}</p>
      {description ? (
        <Prose
          className="my-6 text-sm leading-tight dark:text-white/60"
          html={description}
        />
      ) : null}
      <AddToCart />
    </>
  );
}
