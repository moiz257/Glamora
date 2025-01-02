'use client';

import { useEffect, useState } from 'react';
import { ProductCard } from '@/components/products/ProductCard';
import { getFeaturedProducts } from '@/lib/products';
import type { Product } from '@/types/product';

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const featuredProducts = await getFeaturedProducts();
      setProducts(featuredProducts);
    };
    loadProducts();
  }, []);

  return (
    <section
      className="py-16 px-4 md:px-6 lg:px-8 "
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;