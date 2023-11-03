import getProducts from "@/actions/getProducts";
import DeleteButton from "@/components/delete-button";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UpdateButton from "@/components/update-button";
import { format, formatDistance } from "date-fns";
import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Products() {
  const products = await getProducts();
  // console.log(products);
  return (
    <section>
      <div className="container max-w-6xl mx-auto">
        <div className="flex justify-end ">
          <Link href="/admin/products/create">
            <Button className="mt-3" size="sm">
              <PlusCircleIcon className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </Link>
        </div>

        <h1 className="py-3 text-3xl font-semibold text-center">
          Your Products
        </h1>
        <Table>
          <TableCaption>A list of your Products</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Color</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-center" colSpan="2">
                Action
              </TableHead>
              <TableHead>Created</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium ">
                  {product.imageUrl ? (
                    <figure className="relative w-12 aspect-[2.5/3]">
                      <Image
                        className="object-cover"
                        fill
                        priority
                        alt="image"
                        src={product.imageUrl}
                      />
                    </figure>
                  ) : null}
                </TableCell>
                <TableCell>{product.name ?? ""}</TableCell>
                <TableCell>{product.category?.name}</TableCell>
                <TableCell>{product.size?.name}</TableCell>
                <TableCell>{product.color?.name}</TableCell>
                <TableCell>${product.price ?? ""}</TableCell>
                <TableCell>
                  <UpdateButton id={product.id} />
                </TableCell>
                <TableCell>
                  <DeleteButton id={product.id} />
                </TableCell>
                <TableCell>
                  {formatDistance(new Date(product.created_at), new Date())} ago
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
