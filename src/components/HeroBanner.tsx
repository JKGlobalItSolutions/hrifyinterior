import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  image: string;
}

const HeroBanner = ({ title, subtitle, image }: Props) => (
  <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-primary/60" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative text-center z-10 px-4"
    >
      {subtitle && (
        <p className="font-body text-sm uppercase tracking-widest text-primary-foreground/70 mb-3">{subtitle}</p>
      )}
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">{title}</h1>
    </motion.div>
  </div>
);

export default HeroBanner;
