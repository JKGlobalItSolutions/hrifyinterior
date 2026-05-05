import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  category: string;
  index: number;
}

const ProjectCard = ({ image, title, category, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="group relative rounded-2xl overflow-hidden img-zoom cursor-pointer"
  >
    <img src={image} alt={title} className="w-full h-64 md:h-72 object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-end">
      <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-xs font-body uppercase tracking-wider text-primary-foreground/80">{category}</span>
        <h3 className="font-heading text-lg font-semibold text-primary-foreground">{title}</h3>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
