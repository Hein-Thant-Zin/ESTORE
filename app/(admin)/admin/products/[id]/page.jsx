import getCategories from "@/actions/getCategories";
import getColors from "@/actions/getColors";
import getProduct from "@/actions/getProduct";
import getSizes from "@/actions/getSizes";
import ProductForm from "@/components/products/product-form";
import React from "react";

export default async function ProductUpdatePage({ params }) {
  if (!params.id) {
    return null;
  }
  const categories = await getCategories();
  const sizes = await getSizes();
  const colors = await getColors();
  // console.log(categories);
  const result = await getProduct(params.id);
  const product = result[0];

  // console.log({ product });
  return (
    <>
      <ProductForm
        initialData={product}
        categories={categories}
        sizes={sizes}
        colors={colors}
      />
    </>
  );
}
