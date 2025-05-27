
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Their cloud migration expertise saved us months of development time and significantly reduced our infrastructure costs. Outstanding service!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "IT Director, FinanceFirst",
      content: "The cybersecurity solutions they implemented have given us complete peace of mind. Their team is incredibly knowledgeable and responsive.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "CEO, StartupX",
      content: "From day one, they understood our vision and delivered solutions that scaled with our rapid growth. True technology partners.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            working with our team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-blue-100 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-300 text-sm">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
