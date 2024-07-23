import { products } from "@/utils/dataPlaceholder";

export function generateStaticParams() {
  const productsList = products;

  return productsList.map((product) => ({
    slug: product.slug,
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = products.filter((product) => product.slug === slug);
  console.log(product);
  return <h1>{slug}</h1>;
}
