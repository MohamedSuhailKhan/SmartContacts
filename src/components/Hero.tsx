import React from 'react';
import { Button } from './Button';
export const Hero = () => {
  return <section className="bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              South Africa's{' '}
              <span className="text-blue-600">
                Premier Contact Lens Provider
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Quality contact lenses with easy prescription uploads and fast
              delivery throughout South Africa. Your vision deserves the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="large">Shop Now</Button>
              <Button variant="outline" size="large">
                Upload Prescription
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Person wearing contact lenses" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>;
};