
import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Clock, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Satisfied Clients" },
    { icon: Clock, number: "15+", label: "Years Experience" },
    { icon: Award, number: "99.9%", label: "Uptime Guarantee" },
    { icon: TrendingUp, number: "200%", label: "Average ROI" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Technology Partner
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 15 years, we've been helping businesses transform their operations 
              through innovative technology solutions. Our team of certified experts brings 
              deep industry knowledge and a commitment to excellence.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand that every business is unique, which is why we take a 
              consultative approach to understand your specific challenges and goals 
              before recommending solutions.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
              Learn More About Us
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
