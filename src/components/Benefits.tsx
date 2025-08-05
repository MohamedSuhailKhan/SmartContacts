import React, { Component } from 'react';
import { ShieldCheckIcon, TruckIcon, BadgeCheckIcon, HeartIcon } from 'lucide-react';
const benefits = [{
  id: 1,
  title: 'Quality Guaranteed',
  description: 'We only stock premium contact lenses from trusted manufacturers with full warranties.',
  icon: ShieldCheckIcon
}, {
  id: 2,
  title: 'Nationwide Delivery',
  description: 'Fast delivery to all major South African cities and towns within 2-5 business days.',
  icon: TruckIcon
}, {
  id: 3,
  title: 'Expert Verification',
  description: 'Our licensed opticians verify every prescription for accuracy and safety.',
  icon: BadgeCheckIcon
}, {
  id: 4,
  title: 'Local Customer Care',
  description: 'South African-based support team available 7 days a week to answer all your questions.',
  icon: HeartIcon
}];
export const Benefits = () => {
  return <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Smart Contacts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            South Africa's trusted provider of quality contact lenses with
            exceptional service and nationwide delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(benefit => {
          const IconComponent = benefit.icon;
          return <div key={benefit.id} className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};