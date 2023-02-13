import Image from 'next/image';

import { ProductItem } from './ProductGrid';

type ProductCardProps = {
  product: ProductItem;
};

export const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const { id, description, images, title } = product;

  return (
    <div key={id} className="aspect-sqaure mx-4 mb-2">
      <div className="relative aspect-video">
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
            <p>{}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
