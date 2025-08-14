import { APP_NAME } from "@/lib/constants";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export default async function Home() {
  const latestProductsRaw = await getLatestProducts();
  const latestProducts = latestProductsRaw.map((product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
  }));
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
}

export const metadata = {
  title: `HOME | ${APP_NAME}`,
};
