import { ProductCard } from './ProductCard';

export type ProductItem = {
  description: string;
  id: string;
  images: ImageItem[];
  title: string;
  price: string;
  handle: string;
};

type ImageItem = {
  altText: string;
  height: number;
  originalSrc: string;
  width: number;
};

type ProductGridProps = {
  products: ProductItem[];
};

export const ProductGrid = (props: ProductGridProps) => {
  const { products } = props;

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};
