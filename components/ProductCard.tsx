import Image from 'next/image';
import Link from 'next/link';

import { ProductItem } from './ProductGrid';

type ProductCardProps = {
  product: ProductItem;
};

export const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const { handle, images, title, price } = product;

  return (
    <Link href={`product/${handle}`}>
      <div className="relative aspect-[6/5]">
        {images[0] && (
          <Image
            alt={title}
            src={images[0].originalSrc}
            fill
            sizes="(max-width: 640px) 100vw,
              (max-width: 768px) 50vw,
              33vw"
            className="border rounded-lg"
          />
        )}
      </div>

      <div className="mt-2 pl-2">
        <p className="font-semibold">{title}</p>
        <div className="text-xs text-gray-700">
          <div>${price}</div>
        </div>
      </div>
    </Link>
  );
};
