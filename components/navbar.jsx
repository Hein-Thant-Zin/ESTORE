import Link from "next/link";
import { motion } from "framer-motion";

import NavLinks from "./nav-links";
import CartAction from "./cart-action";
import getCategories from "@/actions/getCategories";
import SearchForm from "./search-form";

export default async function NavBar() {
  const categories = await getCategories();
  // const categories = [
  //   { id: 1, name: 'Bags', slug: 'bags' },
  //   { id: 2, name: 'Shoes', slug: 'shoes' },
  //   { id: 3, name: 'Shirts', slug: 'shirts' },
  //   { id: 4, name: 'Trousers', slug: 'trousers' },
  // ];
  // console.log(categories);
  // const categories = [];

  return (
    <header className="border-b ">
      <div className="container flex items-center justify-between px-4 mx-auto lg:px-8 h-14">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-bold">
            Hub.
          </Link>
          <NavLinks data={categories} />
        </div>

        <SearchForm />

        <CartAction />
      </div>
    </header>
  );
}
