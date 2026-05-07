import { useState } from "react";
import { X } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import livingImg from "@/assets/project-living.jpg";
const imageModules = import.meta.glob<{ default: string }>('@/assets/projects/*.{jpeg,jpg,png,webp}', { eager: true });

const projects = Object.values(imageModules).map((mod, index) => ({
  image: mod.default,
  title: `Project Showcase ${index + 1}`,
  category: "Gallery"
}));

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <HeroBanner title="Our Projects" subtitle="Portfolio" image={livingImg} />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Portfolio"
            title="Our Latest Work"
            description="Explore our collection of beautifully designed spaces across residential and commercial projects."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.title + i} {...p} index={i} onClick={() => setSelectedImage(p.image)} />
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors bg-black/50 p-2 rounded-full cursor-pointer z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size project" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
