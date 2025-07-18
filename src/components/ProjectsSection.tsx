import React from 'react';
import Projects from '@/components/Projects';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <Projects /> {/* Use the Services component here */}
      </div>
    </section>
  );
};

export default ProjectsSection;