import getCategories from "@/actions/getCategories";
import getColors from "@/actions/getColors";
import getSizes from "@/actions/getSizes";
import ProductForm from "@/components/products/product-form";

export default async function ProductCreatePage() {
  const categories = await getCategories();
  const sizes = await getSizes();
  const colors = await getColors();
  return (
    <div>
      <ProductForm categories={categories} sizes={sizes} colors={colors} />
    </div>
  );
}
