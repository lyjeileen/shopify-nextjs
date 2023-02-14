import Image from 'next/image';
import Link from 'next/link';

import { ProductItem } from './ProductGrid';

type ProductCardProps = {
  product: ProductItem;
};

export const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const { id, images, title, price } = product;

  return (
    <div key={id} className="aspect-squre mx-4 mb-2">
      <Link href={`product/${product.id}`}>
        <div className="relative aspect-[6/5]">
          {images[0] && (
            <Image
              alt={title}
              src={images[0]?.originalSrc}
              fill
              sizes="(max-width: 640px) 100vw,
              (max-width: 768px) 50vw,
              33vw"
              className="border rounded-lg"
            />
          )}
        </div>

        <div className="flex m-2">
          <div className="ml-2">
            <p className="font-semibold">{title}</p>
            <div className="text-xs text-gray-700">
              <div>${price}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
