import React from 'react';
import Services from "@/components/Services";

const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <Services /> {/* Use the Services component here */}
      </div>
    </section>
  );
};

export default ServicesSection;