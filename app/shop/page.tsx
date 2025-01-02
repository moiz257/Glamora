'use client';

import { useState, useEffect } from 'react';
import { ProductCard } from '@/components/products/ProductCard';
import { getFeaturedProducts } from '@/lib/products';
import type { Product } from '@/types/product';

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getFeaturedProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div className="min-h-screen  py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Shop Title */}
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Featured Products</h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="transform transition duration-300 hover:scale-105">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
