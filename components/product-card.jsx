'use client';
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { Expand } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductCard() {
    const router = useRouter();
    function handleClick() {
        router.push('/products/polo-tee')
    }

    function preventEventBubbling(e) {
        e.stopPropagation();
    }
    
  return (
    <article onClick={handleClick} className="max-w-md space-y-3 text-center cursor-pointer group">
          <div className="relative aspect-square rounded-xl">
              <Image src='https://picsum.photos/400/600' alt='Product Label' fill className='object-cover rounded-md aspect-square' />
              <div onClick={preventEventBubbling} className="absolute flex items-center justify-center w-full space-x-1 transition opacity-0 bottom-5 group-hover:opacity-100">
                  <Button variant='outline'>
                      <Expand size={20} className="text-gray-600"></Expand>
                  </Button>
                  <Button variant='outline'>
                      <ShoppingCart size={20} className="text-gray-600"></ShoppingCart>
                  </Button>
              </div>

          </div>
          <div>
              <p>Polo tee</p>
              <p>Shirt</p>
          </div>

          <div>$45</div>
    </article>
  )
}
