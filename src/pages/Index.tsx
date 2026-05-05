import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Award, Users, Clock, Shield, Zap, DollarSign, MessageSquareQuote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import heroImg from "@/assets/hero-home.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import bedroomImg from "@/assets/project-bedroom.jpg";
import livingImg from "@/assets/project-living.jpg";
import exteriorImg from "@/assets/project-exterior.jpg";
import officeImg from "@/assets/project-office.jpg";
import bathroomImg from "@/assets/project-bathroom.jpg";
import { services } from "@/data/services";

const homeServices = services.slice(0, 6);

const whyChoose = [
  { icon: Users, title: "Experienced Team", desc: "Skilled designers and craftsmen with years of expertise" },
  { icon: Award, title: "Premium Materials", desc: "Only the finest quality materials for lasting results" },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Competitive rates without compromising quality" },
  { icon: Shield, title: "Modern Designs", desc: "Contemporary aesthetics with functional innovation" },
  { icon: Zap, title: "Fast Execution", desc: "On-time project delivery with efficient workflow" },
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "We listen to your vision, understand your requirements, and provide expert guidance." },
  { step: "02", title: "Design Planning", desc: "Detailed 3D visualizations, material selection, and comprehensive project planning." },
  { step: "03", title: "Material Selection", desc: "Hand-picked premium materials sourced from trusted suppliers for quality assurance." },
  { step: "04", title: "Execution", desc: "Expert implementation with regular quality checks and on-time project delivery." },
];

const projects = [
  { image: livingImg, title: "Modern Living Room", category: "Interior" },
  { image: kitchenImg, title: "Luxury Kitchen", category: "Interior" },
  { image: bedroomImg, title: "Master Bedroom", category: "Interior" },
  { image: exteriorImg, title: "Contemporary Villa", category: "Exterior" },
  { image: officeImg, title: "Office Space", category: "Commercial" },
  { image: bathroomImg, title: "Spa Bathroom", category: "Interior" },
];

const testimonials = [
  { name: "Rahul Sharma", text: "HRIFY transformed our home beyond our imagination. Every detail was crafted to perfection. The team was professional and delivered on time!", role: "Homeowner" },
  { name: "Priya Patel", text: "Professional team, timely delivery, and stunning results. Our villa looks like a magazine cover now. Highly recommend their services!", role: "Villa Owner" },
  { name: "Ankit Mehta", text: "The best investment we made for our business. Our office space looks world-class and employee satisfaction has significantly improved.", role: "Business Owner" },
  { name: "Sneha Reddy", text: "From false ceiling to modular kitchen, HRIFY handled everything seamlessly. Their attention to detail is truly remarkable.", role: "Apartment Owner" },
];

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const nextTestimonial = useCallback(() => setCurrentTestimonial((p) => (p + 1) % testimonials.length), []);
  const prevTestimonial = useCallback(() => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <div>
      {/* Hero with parallax zoom */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
        <motion.img
          src={heroImg}
          alt="HRIFY Interior Design"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale: heroScale }}
        />
        <motion.div className="absolute inset-0 bg-primary/50" style={{ opacity: heroOpacity }} />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-body text-sm uppercase tracking-[0.3em] text-primary-foreground/70"
            >
              HRIFY Interior & Exterior
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mt-4 leading-tight"
            >
              Transforming Spaces Into Beautiful Living Experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="font-body text-lg text-primary-foreground/80 mt-6 max-w-lg"
            >
              We create beautiful, functional spaces that reflect your personality and elevate your everyday living.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link to="/contact" className="rounded-lg bg-card text-foreground px-7 py-3 font-body font-medium text-sm hover:bg-card/90 transition-colors">
                Get Free Consultation
              </Link>
              <Link to="/projects" className="rounded-lg border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3 font-body font-medium text-sm hover:bg-primary-foreground/10 transition-colors">
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading subtitle="What We Do" title="Our Services" description="From concept to completion, we offer comprehensive interior and exterior design solutions." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((s, i) => (
              <ServiceCard key={s.title} image={s.image} title={s.title} description={s.description} index={i} slug={s.slug} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-body font-medium text-sm hover:gap-3 transition-all">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <SectionHeading subtitle="Why HRIFY" title="Why Choose Us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-6 text-center card-shadow hover:card-shadow-hover transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
                <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading subtitle="How We Work" title="Our Working Process" />
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((p, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className={`relative md:flex items-center md:min-h-[160px] ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="bg-card rounded-2xl p-6 card-shadow">
                        <span className="font-heading text-3xl font-bold text-primary/20">{p.step}</span>
                        <h3 className="font-heading font-semibold text-foreground mt-1">{p.title}</h3>
                        <p className="font-body text-sm text-muted-foreground mt-2">{p.desc}</p>
                      </div>
                    </div>
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                    <div className="md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding parallax-section bg-muted">
        <div className="container mx-auto">
          <SectionHeading subtitle="Portfolio" title="Our Projects" description="Explore our portfolio of stunning interior and exterior transformations." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-body font-medium text-sm hover:gap-3 transition-all">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding bg-primary overflow-hidden">
        <div className="container mx-auto">
          <SectionHeading subtitle="Testimonials" title="What Our Clients Say" light />
          <div className="relative max-w-2xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 text-center"
              >
                <MessageSquareQuote className="text-primary-foreground/30 mx-auto mb-6" size={40} />
                <p className="font-body text-primary-foreground/90 leading-relaxed text-lg mb-8">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="font-heading font-semibold text-primary-foreground">{testimonials[currentTestimonial].name}</p>
                <p className="font-body text-sm text-primary-foreground/60">{testimonials[currentTestimonial].role}</p>
              </motion.div>
            </div>
            <div className="flex justify-center gap-3 mt-8">
              <button onClick={prevTestimonial} className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors" aria-label="Previous testimonial">
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentTestimonial ? "bg-primary-foreground w-6" : "bg-primary-foreground/30"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button onClick={nextTestimonial} className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors" aria-label="Next testimonial">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background text-center">
        <div className="container mx-auto max-w-xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Ready to Transform Your Space?</h2>
            <p className="font-body text-muted-foreground mt-4">Book a free consultation and let's bring your dream space to life.</p>
            <Link to="/contact" className="inline-block mt-8 rounded-lg bg-primary text-primary-foreground px-8 py-3 font-body font-medium hover:opacity-90 transition-opacity">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
