'use client';

import { Truck, Shield, Clock, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $50',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure payment',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Dedicated support',
  },
  {
    icon: CreditCard,
    title: 'Money Back',
    description: '30-day guarantee',
  },
];

const StoreInfo = () => {
  return (
    <section className="py-16 px-6 md:px-8 lg:px-10 bg-gradient-to-r from-[#D7BBAA] via-[#A47C65] to-[#6C4F3D] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-shadow-lg">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-white rounded-xl shadow-xl hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="mb-6 p-4 rounded-full bg-gradient-to-r from-[#D7BBAA] to-[#A47C65] text-[#6C4F3D] group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-[#6C4F3D] ">{feature.title}</h3>
                <p className="text-lg text-[#6C4F3D] ">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;
