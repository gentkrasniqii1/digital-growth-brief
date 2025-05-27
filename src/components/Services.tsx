
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Shield, Database, Cpu, Network, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Migrate to the cloud with confidence. Our expert team ensures seamless transitions and optimal performance.",
      features: ["AWS & Azure Migration", "Cloud Architecture", "Cost Optimization"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with enterprise-grade security solutions and 24/7 monitoring.",
      features: ["Threat Detection", "Security Audits", "Compliance Management"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Transform your data into actionable insights with our comprehensive data solutions.",
      features: ["Data Analytics", "Database Optimization", "Backup Solutions"]
    },
    {
      icon: Cpu,
      title: "Infrastructure",
      description: "Build robust, scalable infrastructure that grows with your business needs.",
      features: ["Server Management", "Network Design", "Hardware Procurement"]
    },
    {
      icon: Network,
      title: "Network Solutions",
      description: "Ensure reliable connectivity and optimal network performance across your organization.",
      features: ["Network Monitoring", "VPN Setup", "Bandwidth Optimization"]
    },
    {
      icon: HeadphonesIcon,
      title: "IT Support",
      description: "Round-the-clock technical support to keep your business running smoothly.",
      features: ["24/7 Help Desk", "Remote Support", "On-site Services"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive IT Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From cloud migration to cybersecurity, we provide end-to-end IT solutions 
            tailored to your business requirements and growth objectives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
