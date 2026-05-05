import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { services } from "@/data/services";
import HeroBanner from "@/components/HeroBanner";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary font-body hover:underline">← Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HeroBanner title={service.title} subtitle="Our Services" image={service.image} />

      <div className="section-padding bg-background">
        <div className="container mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-body text-sm mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Back to Services
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-muted-foreground text-lg max-w-3xl mb-16 leading-relaxed"
          >
            {service.longDescription}
          </motion.p>

          <div className="space-y-20">
            {service.subcategories.map((sub, i) => {
              const isReversed = i % 2 !== 0;
              return (
                <motion.div
                  key={sub.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="rounded-2xl overflow-hidden img-zoom card-shadow">
                      <img src={sub.image} alt={sub.title} className="w-full h-64 md:h-80 object-cover" loading="lazy" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-full lg:w-1/2"
                  >
                    <span className="font-heading text-6xl font-bold text-primary/10">0{i + 1}</span>
                    <h3 className="font-heading text-2xl font-bold text-foreground mt-2 mb-4">{sub.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{sub.description}</p>
                    <Link
                      to="/contact"
                      className="inline-block mt-6 rounded-lg bg-primary text-primary-foreground px-6 py-2.5 font-body text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Get a Quote
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
