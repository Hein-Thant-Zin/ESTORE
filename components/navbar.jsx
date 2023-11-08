"use client";
import Link from "next/link";
// import { motion } from "framer-motion";

import NavLinks from "./nav-links";
import CartAction from "./cart-action";
import getCategories from "@/actions/getCategories";
import SearchForm from "./search-form";
import { useQuery } from "@tanstack/react-query";

export default function NavBar() {
  // const categories = await getCategories();
  const {
    data: categories,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  // if (isPending) return <p>Loading</p>;
  // if (isError) return <p>{error.message}</p>;
  // console.log(categories);
  return (
    <header className="border-b ">
      <div className="container flex items-center justify-between px-4 mx-auto lg:px-8 h-14">
        <div className="flex text-center">
          <Link href="/" className="text-3xl font-bold">
            Hub.
          </Link>
          {isPending ? (
            <p className="text-center">Loading</p>
          ) : isError ? (
            <p>{error.message}</p>
          ) : (
            <NavLinks data={categories} />
          )}
        </div>

        <SearchForm />

        <CartAction />
      </div>
    </header>
  );
}
