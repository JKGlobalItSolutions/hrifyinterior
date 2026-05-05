import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  image: string;
  title: string;
  description: string;
  index: number;
  slug?: string;
}

const ServiceCard = ({ image, title, description, index, slug }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
  >
    <div className="img-zoom h-48 md:h-56">
      <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="p-6">
      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      {slug && (
        <Link
          to={`/services/${slug}`}
          className="inline-flex items-center gap-1.5 text-primary font-body font-medium text-sm hover:gap-2.5 transition-all"
        >
          View Details <ArrowRight size={14} />
        </Link>
      )}
    </div>
  </motion.div>
);

export default ServiceCard;
