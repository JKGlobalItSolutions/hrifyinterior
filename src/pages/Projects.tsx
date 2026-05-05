import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import kitchenImg from "@/assets/project-kitchen.jpg";
import bedroomImg from "@/assets/project-bedroom.jpg";
import livingImg from "@/assets/project-living.jpg";
import exteriorImg from "@/assets/project-exterior.jpg";
import officeImg from "@/assets/project-office.jpg";
import bathroomImg from "@/assets/project-bathroom.jpg";
import ceilingImg from "@/assets/service-ceiling.jpg";
import flooringImg from "@/assets/service-flooring.jpg";
import facadeImg from "@/assets/service-facade.jpg";

const projects = [
  { image: livingImg, title: "Modern Living Room", category: "Interior" },
  { image: kitchenImg, title: "Luxury Kitchen", category: "Interior" },
  { image: bedroomImg, title: "Master Bedroom Suite", category: "Interior" },
  { image: exteriorImg, title: "Contemporary Villa", category: "Exterior" },
  { image: officeImg, title: "Corporate Office", category: "Commercial" },
  { image: bathroomImg, title: "Premium Bathroom", category: "Interior" },
  { image: ceilingImg, title: "Designer Ceiling", category: "Interior" },
  { image: flooringImg, title: "Wooden Flooring", category: "Interior" },
  { image: facadeImg, title: "Modern Facade", category: "Exterior" },
];

const Projects = () => (
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
            <ProjectCard key={p.title + i} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Projects;
