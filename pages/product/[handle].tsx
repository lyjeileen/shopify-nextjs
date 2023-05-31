import { getProduct } from 'lib/shopify';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

type ProductProps = {
  description: string;
  id: string;
  title: string;
  price: string;
  images: [string];
};

type image = {
  node: {
    originalSrc: string;
    altText: null;
    width: number;
    height: number;
  };
};

export default function SingleProduct(props: ProductProps) {
  const { description, id, title, price, images } = props;
  const imageList = images.map((image) => (
    <Image alt={title} src={image} height={400} width={400} />
  ));
  return (
    <>
      <h1>{title}</h1>

      <div>{imageList}</div>

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

  const imageURLs = images.edges.map((image: image) => image.node.originalSrc);

  return {
    props: {
      description,
      id,
      title,
      images: imageURLs,
      price: variants.edges[0].node.priceV2.amount,
    },
  };
};
