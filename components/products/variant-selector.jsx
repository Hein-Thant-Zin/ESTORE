import { Button } from "../ui/button";

export default function VariantSelector({ size }) {
  return (
    <dl className="mb-8">
      <dt className="mb-4 text-sm tracking-wide uppercase">SIZES</dt>
      <dd className="flex flex-wrap gap-3">
        <Button className="flex items-center justify-center text-sm rounded-full ">
          {size}
        </Button>
      </dd>
    </dl>
  );
}
