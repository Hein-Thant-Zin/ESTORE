async function deleteProduct(id) {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products?apikey=${process.env.NEXT_PUBLIC_API_KEY}&id=eq.${id}`;

  const res = await fetch(URL, {
    method: "DELETE",
  });

  return res;
}

export default deleteProduct;
