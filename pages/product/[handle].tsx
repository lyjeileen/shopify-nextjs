import { getProduct } from 'lib/shopify';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

type ProductProps = {
  description: string;
  id: string;
  title: string;
  price: string;
  images: string;
};

export default function SingleProduct(props: ProductProps) {
  const { description, id, title, price, images } = props;

  return (
    <>
      <h1>{title}</h1>
      <div>
        {images && <Image alt={title} src={images} height={400} width={400} />}
      </div>
      <p>${price}</p>
      <h2>Description:</h2>
      <p>{description}</p>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let product = await getProduct(params?.handle);

  const { description, id, title, images, variants } =
    product.body.data.productByHandle;

  return {
    props: {
      description,
      id,
      title,
      images: images.edges[0].node.originalSrc,
      price: variants.edges[0].node.priceV2.amount,
    },
  };
};
