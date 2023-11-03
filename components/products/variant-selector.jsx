import { Button } from "../ui/button";

export default function VariantSelector() {
  return (
    <dl className="mb-8">
      <dt className="mb-4 text-sm tracking-wide uppercase">SIZES</dt>
      <dd className="flex flex-wrap gap-3">
        <Button className="flex items-center justify-center text-sm rounded-full ">
          XL
        </Button>
      </dd>
    </dl>
  );
}
