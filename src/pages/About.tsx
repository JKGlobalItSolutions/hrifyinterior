import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import aboutImg from "@/assets/about-hero.jpg";
import heroImg from "@/assets/hero-home.jpg";
import directorImg from "@/assets/director.png";
import {
  Eye,
  Target,
  Award,
  Users,
  Home,
  Clock,
  Paintbrush,
  Diamond,
  Lightbulb,
  IndianRupee,
  Timer,
  Heart,
  MessageSquareQuote,
  ClipboardList,
  Layers,
  PackageCheck,
  Hammer,
  ArrowRight,
} from "lucide-react";

/* ── Counter animation hook ── */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(id);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(id);
  }, [inView, end, duration]);

  return { count, ref };
}

/* ── Data ── */
const counters = [
  { icon: Home, value: 250, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 180, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 10, suffix: "+", label: "Years of Experience" },
  { icon: Clock, value: 25, suffix: "+", label: "Design Experts" },
];

const whyChoose = [
  { icon: Paintbrush, title: "Experienced Design Team", desc: "Our skilled designers bring years of expertise to every project." },
  { icon: Diamond, title: "Premium Materials", desc: "We source only the finest materials for lasting quality." },
  { icon: Lightbulb, title: "Creative Modern Designs", desc: "Innovative design solutions tailored to your vision." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "High-end design at competitive and transparent pricing." },
  { icon: Timer, title: "Timely Project Completion", desc: "We deliver on time, every time, without compromising quality." },
  { icon: Heart, title: "Customer Satisfaction Focus", desc: "Your happiness is our ultimate measure of success." },
];

const processSteps = [
  { icon: ClipboardList, title: "Consultation", desc: "We discuss your requirements, ideas, and budget in detail." },
  { icon: Layers, title: "Planning & Design", desc: "Our team creates detailed plans and 3D design concepts." },
  { icon: PackageCheck, title: "Material Selection", desc: "We help you choose premium materials that fit your style." },
  { icon: Hammer, title: "Execution & Completion", desc: "Expert craftsmen bring the design to life with precision." },
];

/* ── Counter Card ── */
const CounterCard = ({ icon: Icon, value, suffix, label }: (typeof counters)[0]) => {
  const { count, ref } = useCounter(value);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <Icon className="text-primary-foreground/50 mx-auto mb-3" size={32} />
      <span ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
        {count}{suffix}
      </span>
      <p className="font-body text-sm text-primary-foreground/70 mt-1">{label}</p>
    </motion.div>
  );
};

/* ── Slide variants ── */
const slideLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } };
const slideRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const About = () => (
  <div>
    {/* ── SECTION 1: Hero ── */}
    <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
      <img src={aboutImg} alt="About HRIFY" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/65" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center z-10 px-4 max-w-3xl"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">Who We Are</p>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
          About HRIFY Interior & Exterior
        </h1>
        <p className="font-body text-primary-foreground/80 mt-4 text-base md:text-lg leading-relaxed">
          Creating elegant, functional, and inspiring interior and exterior spaces.
        </p>
      </motion.div>
    </div>

    {/* ── SECTION 2: Company Introduction ── */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden img-zoom"
          >
            <img src={heroImg} alt="HRIFY Interior Work" className="w-full h-80 lg:h-[440px] object-cover" />
          </motion.div>
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-sm uppercase tracking-widest text-secondary">Our Story</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 leading-snug">
              Professional Interior & Exterior Design Specialists
            </h2>
            <p className="font-body text-muted-foreground mt-5 leading-relaxed">
              HRIFY Interior & Exterior is a professional design and construction company dedicated to delivering high-quality interior and exterior solutions. We specialize in transforming residential and commercial spaces into stylish, functional environments using innovative design, premium materials, and expert craftsmanship.
            </p>
            <p className="font-body text-muted-foreground mt-4 leading-relaxed">
              Our team focuses on creativity, durability, and modern design trends to create beautiful spaces that enhance comfort, productivity, and lifestyle.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── SECTION 3: Managing Director ── */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="font-body text-sm uppercase tracking-widest text-secondary">Leadership</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Our Founder and CEO</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="bg-card rounded-2xl card-shadow p-8 text-center max-w-xs">
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-5 transition-transform duration-500 hover:scale-105">
                <img src={directorImg} alt="J. Jayakrishnan" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">J. Jayakrishnan M.E., MBA</h3>
              <p className="font-body text-secondary text-sm mt-1">Founder and CEO</p>
              <p className="font-body text-muted-foreground text-xs mt-1">HRIFY Interior & Exterior</p>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <MessageSquareQuote className="text-primary/30 mb-4" size={48} />
            <blockquote className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed italic">
              "At HRIFY Interior & Exterior, our vision is to redefine spaces with creativity, innovation, and high-quality craftsmanship. We believe that every project should reflect elegance, functionality, and long-lasting value for our clients."
            </blockquote>
            <div className="w-16 h-1 bg-primary rounded-full mt-6" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── SECTION 4: Vision & Mission ── */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-10 card-shadow group hover:card-shadow-hover transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <Eye className="text-primary" size={26} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">Our Vision</h3>
            <div className="w-12 h-1 bg-primary/30 rounded-full my-4" />
            <p className="font-body text-muted-foreground leading-relaxed">
              "To become a leading interior and exterior design company recognized for quality, innovation, and reliability, delivering sustainable and future-ready spaces that enhance lifestyle and architectural beauty."
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card rounded-2xl p-10 card-shadow group hover:card-shadow-hover transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <Target className="text-primary" size={26} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">Our Mission</h3>
            <div className="w-12 h-1 bg-primary/30 rounded-full my-4" />
            <p className="font-body text-muted-foreground leading-relaxed">
              "Our mission is to deliver high-quality interior and exterior design solutions using modern technology, premium materials, and expert craftsmanship while ensuring complete client satisfaction and long-lasting design excellence."
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── SECTION 5: Why Choose HRIFY ── */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="font-body text-sm uppercase tracking-widest text-secondary">Our Strengths</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Why Choose HRIFY</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyChoose.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 card-shadow group hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground">{item.title}</h4>
              <p className="font-body text-muted-foreground text-sm mt-2 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTION 6: Achievements / Counters ── */}
    <section className="section-padding bg-primary">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="font-body text-sm uppercase tracking-widest text-primary-foreground/50">Our Impact</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2">Company Achievements</h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((c) => (
            <CounterCard key={c.label} {...c} />
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTION 7: Working Process ── */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="font-body text-sm uppercase tracking-widest text-secondary">How We Work</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Our Working Process</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 md:hidden" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={i % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Number circle */}
              <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                {i + 1}
              </div>
              <div className="bg-card rounded-2xl p-6 card-shadow flex-1">
                <step.icon className="text-primary mb-2" size={22} />
                <h4 className="font-heading text-lg font-semibold text-foreground">{step.title}</h4>
                <p className="font-body text-muted-foreground text-sm mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTION 8: CTA ── */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroImg} alt="CTA Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/75" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-4"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground max-w-2xl mx-auto leading-snug">
          Start Your Dream Interior Project Today
        </h2>
        <p className="font-body text-primary-foreground/70 mt-4 max-w-lg mx-auto">
          Let's transform your space into something extraordinary.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-8 rounded-xl bg-card text-primary font-heading font-semibold px-8 py-3.5 hover:bg-card/90 transition-colors"
        >
          Contact HRIFY <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  </div>
);

export default About;
