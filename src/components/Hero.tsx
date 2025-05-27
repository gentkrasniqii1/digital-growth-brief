
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/30 rounded-full border border-blue-400/30 backdrop-blur-sm">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Trusted IT Solutions Partner</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Business with 
              <span className="text-blue-300 block">Expert IT Solutions</span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
              Empower your organization with cutting-edge technology solutions. From cloud infrastructure to cybersecurity, we deliver comprehensive IT services that drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-300 text-blue-100 hover:bg-blue-800/50 px-8 py-4 text-lg">
                Schedule Consultation
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-sm">500+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm">99.9% Uptime</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-500/20 rounded-lg border border-green-400/30">
                  <span className="text-green-300">System Status</span>
                  <span className="text-green-400 font-semibold">All Systems Operational</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-500/20 rounded-lg border border-blue-400/30">
                  <span className="text-blue-300">Security Level</span>
                  <span className="text-blue-400 font-semibold">Maximum Protection</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-500/20 rounded-lg border border-purple-400/30">
                  <span className="text-purple-300">Performance</span>
                  <span className="text-purple-400 font-semibold">Optimized</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
