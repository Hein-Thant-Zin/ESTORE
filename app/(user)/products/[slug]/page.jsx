import Gallery from "@/components/products/gallery";
import ProductDescription from "@/components/products/product-description";

export default function ProductPage() {
  return (
    <section>
      <div className="container px-4 py-10 mx-auto lg:px-0 ">
        <div className="flex flex-col p-8 border rounded-lg shadow lg:gap-8 lg:flex-row border-neutral-200">
          <div className="w-full h-full basis-full lg:basis-4/6">
            <Gallery />
          </div>
          <div className="basis-full lg:basis-2/6">
            <ProductDescription />
          </div>
        </div>
      </div>

      {/* related products */}
    </section>
  );
}
