"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function NavLinks({ data }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category");
  const firstThreeItems = data.slice(0, 3);

  const links = firstThreeItems.map((item) => ({
    href: `/products?category=${item.slug}`,
    label: item.name,
    isActive:
      `${pathname}?category=${currentCategory}` ===
      `/products?category=${item.slug}`,
  }));
  // console.log(pathname);
  return (
    <nav className="flex items-center gap-4 mx-6 lg:gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium hover:underline hover:text-black transition-colors  duration-500 ",
            link.isActive ? "text-black underline transition" : "text-slate-500"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
