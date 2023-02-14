import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { getAllProducts } from 'lib/shopify';
import { ProductItem, ProductGrid } from 'components/ProductGrid';

type HomeProps = {
  products: ProductItem[];
};

export default function Home(props: HomeProps) {
  const { products } = props;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductGrid products={products} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await getAllProducts();

  return {
    props: {
      products: products.body.data.products.edges.map((e: any) => ({
        ...e.node,
        images: e.node.images.edges.map((image: any) => image.node),
        price: e.node.variants.edges[0].node.priceV2.amount,
      })),
    },
  };
};
