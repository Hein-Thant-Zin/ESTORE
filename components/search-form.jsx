"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const keyword = formData.get("keyword");

    router.push(`/products/keyword=${keyword}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="max-w-full px-3 py-1 mt-1 border rounded-md outline-none w-96 focus:ring-slate-500 focus:ring-2 ring-offset"
        type="search"
        name="keyword"
        defaultValue={searchParams.get("keyword") || ""}
        placeholder="Search..."
        key={searchParams.get("keyword")}
      />
    </form>
  );
}
