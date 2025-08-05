import React from 'react';
import { Button } from './Button';
const products = [{
  id: 1,
  name: 'Daily Comfort',
  description: 'Breathable daily disposable lenses for all-day comfort',
  price: 'R399.99',
  image: 'https://images.unsplash.com/photo-1587258459922-7a83f86a78e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
}, {
  id: 2,
  name: 'Hydra Clear',
  description: 'Monthly lenses with superior moisture retention',
  price: 'R599.99',
  image: 'https://images.unsplash.com/photo-1616065297013-2dab7b3a917b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
}, {
  id: 3,
  name: 'Color Enhance',
  description: 'Vibrant colored contacts for a natural look',
  price: 'R499.99',
  image: 'https://images.unsplash.com/photo-1577037834201-1975f9b1b8d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
}, {
  id: 4,
  name: 'Vision Extended',
  description: 'Extended wear contacts for up to 30 days',
  price: 'R699.99',
  image: 'https://images.unsplash.com/photo-1609181726987-e0b9c63e7e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
}];
export const FeaturedProducts = () => {
  return <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most popular contact lenses, designed for comfort,
            clarity, and eye health.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">
                    {product.price}
                  </span>
                  <Button variant="secondary" size="small">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <Button size="large">View All Products</Button>
        </div>
      </div>
    </section>;
};