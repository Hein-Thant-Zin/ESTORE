import { ArrowRightIcon } from "lucide-react";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const btnClassName =
    "items-center justify-center h-full px-6 flex  transition-all ease-in-out hover:scale-110 hover:text-black ";

  return (
    <div className="relative aspect-square  h-full w-full max-h-[550px] overflow-hidden">
      <Image
        className="object-contain "
        src="https://picsum.photos/400/600"
        alt="Product Label"
        fill
        priority={true}
      />
      <div className="absolute bottom-[15%]   flex w-full justify-center">
        <div className="flex items-center border border-white rounded-full ring-black ring-1 h-11 backdrop-blur ">
          <Link scroll={false} className={btnClassName} href="#">
            <ArrowLeftIcon className="w-5 h-5" />
          </Link>
          <Link scroll={false} className={btnClassName} href="#">
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
