const URL = `${process.env.NEXT_PUBLIC_API_URL}/products?apikey=${process.env.NEXT_PUBLIC_API_KEY}&select=id,name,price,imageUrl,description,size: sizeId(id,name),color: colorId(id,name),category:categoryId(id,name),created_at`;

async function getProducts(id) {
  const res = await fetch(URL, { cache: "no-cache" });

  return res.json();
}

export default getProducts;
