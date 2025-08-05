import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { PrescriptionUploadSection } from '../components/PrescriptionUploadSection';
import { Benefits } from '../components/Benefits';
import { Footer } from '../components/Footer';
export const Home = () => {
  return <main className="flex-grow">
      <Hero />
      <FeaturedProducts />
      <PrescriptionUploadSection />
      <Benefits />
      <Footer />
    </main>;
};