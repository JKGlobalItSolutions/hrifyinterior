import ceilingImg from "@/assets/service-ceiling.jpg";
import upvcImg from "@/assets/service-upvc.jpg";
import acpImg from "@/assets/service-acp.jpg";
import glassImg from "@/assets/service-glass.jpg";
import kitchenImg from "@/assets/service-modular-kitchen.jpg";
import aluminiumImg from "@/assets/service-aluminium.jpg";
import paintingImg from "@/assets/service-painting.jpg";
import claddingImg from "@/assets/service-cladding.jpg";
import waterproofingImg from "@/assets/service-waterproofing.jpg";
import facadeImg from "@/assets/service-facade.jpg";
import elevationImg from "@/assets/service-elevation.jpg";
import landscapingImg from "@/assets/service-landscaping.jpg";
import flooringImg from "@/assets/service-flooring.jpg";

export interface SubCategory {
  title: string;
  description: string;
  image: string;
}

export interface ServiceData {
  slug: string;
  image: string;
  title: string;
  description: string;
  longDescription: string;
  subcategories: SubCategory[];
}

export const services: ServiceData[] = [
  {
    slug: "false-ceiling",
    image: ceilingImg,
    title: "False Ceiling",
    description: "Elegant gypsum and POP ceiling designs with modern LED integration for stunning interiors.",
    longDescription: "Transform your interiors with our premium false ceiling solutions. We specialize in creating stunning overhead designs that combine aesthetics with functionality, incorporating ambient lighting and acoustic insulation for residential and commercial spaces.",
    subcategories: [
      { title: "Gypsum False Ceiling", description: "Gypsum false ceilings are widely used in modern interiors due to their smooth finish and flexibility in design. They allow creative lighting layouts such as LED strips, recessed lights, and cove lighting. Gypsum boards are lightweight yet durable, making them suitable for residential and commercial interiors. These ceilings also help hide wiring and duct systems, improving the overall appearance of a room. With customizable patterns and shapes, gypsum ceilings provide both functionality and elegant aesthetics.", image: ceilingImg },
      { title: "POP False Ceiling", description: "POP (Plaster of Paris) ceilings are known for their decorative appeal and intricate designs. They allow designers to create customized patterns, curves, and artistic shapes that enhance interior aesthetics. POP ceilings provide a smooth finish and are often used in living rooms, bedrooms, and hall areas. They are highly versatile and can incorporate lighting fixtures and decorative elements easily. This type of ceiling adds elegance and character to interior spaces.", image: ceilingImg },
      { title: "PVC Ceiling", description: "PVC ceilings are a cost-effective and low-maintenance ceiling solution. They are moisture-resistant and ideal for kitchens, bathrooms, and areas with high humidity. PVC panels come in a variety of colors, textures, and designs that mimic wood or other materials. These ceilings are lightweight and easy to install, making them a practical option for quick renovations. PVC ceilings also provide durability and long-lasting performance.", image: ceilingImg },
      { title: "Wooden Ceiling", description: "Wooden ceilings bring warmth, elegance, and natural beauty to interior spaces. They are commonly used in luxury homes, villas, and modern commercial interiors. Wooden panels create a rich aesthetic that complements contemporary and classic design styles. They also provide acoustic benefits and improve the ambience of a room. With different finishes and textures available, wooden ceilings add a premium touch to any space.", image: ceilingImg },
      { title: "Designer Ceiling", description: "Designer ceilings combine innovative shapes, lighting, and materials to create visually striking interiors. They are often used in living rooms, hotels, offices, and commercial buildings. These ceilings allow architects and designers to experiment with patterns, layers, and lighting effects. By combining gypsum, wood, or metal elements, designer ceilings create unique architectural statements. They enhance both functionality and visual appeal.", image: ceilingImg },
    ],
  },
  {
    slug: "upvc-windows",
    image: upvcImg,
    title: "UPVC Windows",
    description: "Energy-efficient UPVC windows and doors with superior insulation and modern aesthetics.",
    longDescription: "Our UPVC window and door solutions offer unmatched energy efficiency, noise reduction, and weather resistance. Built with premium European-grade profiles for lasting performance and contemporary design.",
    subcategories: [
      { title: "Sliding UPVC Windows", description: "Space-saving UPVC sliding windows with smooth operation and multi-point locking for enhanced security. Perfect for balconies, living areas, and bedrooms. These windows offer excellent ventilation while maintaining a sleek, modern profile. The sliding mechanism ensures easy operation and minimal maintenance. Available in various colors and glass options to match your interior style.", image: upvcImg },
      { title: "Casement UPVC Windows", description: "Classic outward-opening casement windows with excellent ventilation and weather sealing. Available in single and double-sash configurations for maximum flexibility. Casement windows provide superior air circulation and unobstructed views. They feature multi-point locking systems for enhanced security. The robust UPVC frames ensure long-lasting durability and energy efficiency.", image: upvcImg },
      { title: "Tilt and Turn Windows", description: "Versatile tilt-and-turn mechanism allowing both inward tilting for ventilation and full opening for cleaning. Ideal for high-rise buildings and modern apartments. These windows provide excellent security with multi-point locks. The dual functionality makes them perfect for areas requiring controlled ventilation. Easy to maintain and operate with premium German hardware.", image: upvcImg },
      { title: "Fixed Glass Windows", description: "Non-operable fixed glass windows designed to maximize natural light and provide panoramic views. Perfect for feature walls, staircase areas, and decorative applications. Fixed windows offer superior energy efficiency with no air leakage. They are available in various shapes including circular, arched, and rectangular. Combined with toughened or laminated glass for safety and sound insulation.", image: upvcImg },
      { title: "Combination Windows", description: "Custom combination windows that blend fixed, sliding, and casement styles in a single frame for maximum versatility. These windows allow architects to create unique window configurations for any space. Combination designs optimize both ventilation and natural light. They are perfect for large openings and feature walls. Available with multi-chamber profiles for superior thermal and acoustic insulation.", image: upvcImg },
    ],
  },
  {
    slug: "acp-work",
    image: acpImg,
    title: "ACP Work",
    description: "Premium Aluminium Composite Panel cladding for modern building exteriors and interiors.",
    longDescription: "We deliver world-class ACP cladding solutions that transform building facades with a sleek, contemporary appearance while providing weather protection, thermal insulation, and long-lasting durability.",
    subcategories: [
      { title: "Exterior Cladding", description: "Full-building ACP facade cladding with precision-engineered panels for a seamless, modern exterior finish. Fire-rated and weather-resistant options available for commercial and residential buildings. Our exterior cladding solutions enhance building aesthetics while providing thermal insulation. Available in a wide range of colors, textures, and metallic finishes. Professional installation ensures durability and long-lasting performance.", image: acpImg },
      { title: "Interior Panels", description: "Decorative ACP panels for interior feature walls, reception areas, and commercial spaces. Available in metallic, wood-grain, and solid color finishes that elevate interior design. These panels are easy to maintain and provide a clean, modern look. They are ideal for office lobbies, retail stores, and hospitality spaces. Interior ACP panels combine aesthetic appeal with practical functionality.", image: acpImg },
      { title: "Signage & Branding", description: "Custom ACP signage solutions for retail stores, corporate offices, and commercial buildings with integrated lighting options. Our signage solutions combine durability with visual impact for effective brand communication. Available in custom shapes, sizes, and finishes to match brand guidelines. LED backlighting options create stunning visual effects day and night. Professional fabrication and installation ensure premium quality results.", image: acpImg },
      { title: "Canopy & Awning", description: "Durable ACP canopies and awnings for building entrances, parking areas, and outdoor spaces with modern design aesthetics. These structures provide protection from weather elements while enhancing architectural beauty. Available in various designs from minimalist to contemporary curved profiles. ACP canopies are lightweight yet sturdy, ensuring long-lasting performance. Custom color matching available to complement building exteriors.", image: acpImg },
    ],
  },
  {
    slug: "glass-work",
    image: glassImg,
    title: "Glass Work",
    description: "Frameless glass partitions, doors, and facades for elegant modern spaces.",
    longDescription: "Our glass work solutions bring transparency, light, and modern sophistication to any space. From structural glazing to decorative glass, we offer comprehensive glass installation services for residential and commercial projects.",
    subcategories: [
      { title: "Glass Partitions", description: "Frameless and framed glass partition systems for offices and commercial spaces. Create open, light-filled environments while maintaining acoustic privacy and professional aesthetics. Our glass partitions are available in clear, frosted, and tinted options. They feature premium hardware and fittings for smooth operation. Ideal for meeting rooms, executive cabins, and collaborative workspaces.", image: glassImg },
      { title: "Glass Railings", description: "Elegant tempered glass railing systems for staircases, balconies, and terraces. Available in frameless, semi-frameless, and post-mounted configurations for maximum design flexibility. Glass railings provide unobstructed views while ensuring safety with toughened glass panels. They add a modern, sophisticated touch to both residential and commercial spaces. Our installations meet all safety standards and building codes.", image: glassImg },
      { title: "Shower Glass Enclosures", description: "Premium shower glass enclosures that transform bathrooms into luxurious spa-like spaces. Available in frameless, semi-frameless, and sliding door configurations. Our shower enclosures use toughened safety glass with easy-clean coating for minimal maintenance. Custom designs available to fit any bathroom layout and size. Hardware options include chrome, brushed nickel, and matte black finishes.", image: glassImg },
      { title: "Toughened Glass Panels", description: "High-strength toughened glass panels for various architectural and interior applications. These panels are four to five times stronger than regular glass, ensuring maximum safety. Available in clear, tinted, frosted, and back-painted options for versatile design possibilities. Toughened glass is heat-resistant and ideal for kitchen backsplashes, tabletops, and wall features. Custom cutting and edge finishing available for precise installations.", image: glassImg },
      { title: "Office Glass Cabins", description: "Complete glass cabin solutions for modern office environments with integrated doors and partitions. Create executive offices and meeting rooms with full transparency and natural light flow. Our glass cabins feature acoustic glazing options for noise reduction and privacy. Available with smart glass technology that switches between transparent and opaque modes. Professional installation with minimal disruption to ongoing office operations.", image: glassImg },
    ],
  },
  {
    slug: "modular-kitchen",
    image: kitchenImg,
    title: "Modular Kitchen & Cupboard",
    description: "Custom modular kitchens and wardrobes with smart storage and premium finishes.",
    longDescription: "Design your dream kitchen and storage solutions with our premium modular systems. We combine innovative storage, quality materials, and stunning designs for spaces that are both functional and beautiful.",
    subcategories: [
      { title: "L-Shaped Kitchen", description: "Efficient L-shaped modular kitchen designs that maximize corner space and workflow. Ideal for small to medium-sized kitchens with modern finishes and smart storage solutions. L-shaped layouts provide a natural work triangle for cooking efficiency. Available with premium countertop materials including granite, quartz, and Corian. Soft-close hinges and drawer systems ensure smooth, quiet operation.", image: kitchenImg },
      { title: "U-Shaped Kitchen", description: "Spacious U-shaped kitchen layouts with three walls of cabinetry, providing maximum storage and counter space for larger kitchens. This layout offers the most efficient workflow with everything within arm's reach. Premium hardware and accessories ensure durability and functionality. Available in a variety of finishes including acrylic, laminate, and membrane. Custom designs tailored to your specific kitchen dimensions and requirements.", image: kitchenImg },
      { title: "Island Kitchen", description: "Premium island kitchen designs with a central island for cooking, dining, or entertaining. Perfect for open-plan living spaces that demand both style and functionality. Island kitchens create a natural gathering point for family and guests. Available with built-in appliances, sinks, and breakfast bar configurations. Luxury finishes and materials create a stunning centerpiece for modern homes.", image: kitchenImg },
      { title: "Straight Modular Kitchen", description: "Compact straight-line kitchen designs perfect for apartments, studios, and smaller spaces. This efficient layout arranges all appliances and storage along a single wall. Straight kitchens maximize limited space with vertical storage solutions and pull-out organizers. Available in contemporary finishes that brighten and open up compact spaces. Smart design solutions ensure every inch of space is utilized effectively.", image: kitchenImg },
      { title: "Sliding Wardrobes", description: "Custom-designed sliding wardrobes with intelligent storage solutions including pull-out drawers, shoe racks, and accessory organizers. Space-saving sliding doors eliminate the need for clearance space, perfect for compact bedrooms. Available in mirror, lacquered glass, and laminate door finishes. Internal configurations customized to your storage needs and preferences. Premium soft-close mechanisms ensure smooth, silent operation.", image: kitchenImg },
    ],
  },
  {
    slug: "aluminium-partition",
    image: aluminiumImg,
    title: "Aluminium Partition",
    description: "Sleek aluminium partition systems for modern office and commercial spaces.",
    longDescription: "Our aluminium partition solutions offer flexible, stylish space division for modern work environments. Combining durability with contemporary design for productive and visually appealing workspaces.",
    subcategories: [
      { title: "Office Aluminium Partition", description: "Full-height and half-height aluminium partition systems for corporate offices with options for solid panels, glass inserts, and integrated blinds. These partitions create defined workspaces while maintaining an open office feel. Premium powder-coated finishes ensure long-lasting durability and scratch resistance. Available in a variety of colors to match corporate branding and interior design. Easy to install and reconfigure as office layouts evolve.", image: aluminiumImg },
      { title: "Glass Aluminium Partition", description: "Elegant aluminium-framed glass partition systems that combine the strength of aluminium with the transparency of glass. These partitions allow natural light to flow through the workspace while providing structural stability. Available with single or double glazing for enhanced acoustic performance. Ideal for executive offices, conference rooms, and collaborative spaces. Slim aluminium profiles maximize glass area for a clean, modern appearance.", image: aluminiumImg },
      { title: "Sliding Aluminium Partition", description: "Space-saving sliding aluminium partition systems that allow flexible room configuration. Perfect for multi-purpose spaces, conference rooms, and banquet halls that need adaptable layouts. Smooth top-hung sliding mechanisms ensure effortless operation. Available with acoustic panels for sound isolation between divided spaces. These partitions can be fully stacked to create large open areas when needed.", image: aluminiumImg },
      { title: "Aluminium Cabin Partition", description: "Complete cabin partition systems using aluminium frameworks for creating enclosed office cabins and workstations. These partitions offer privacy and sound reduction while maintaining a professional aesthetic. Available with integrated doors, glass panels, and solid infill options. Modular design allows easy expansion and reconfiguration as business needs change. Cable management systems integrated within partition profiles for clean installations.", image: aluminiumImg },
    ],
  },
  {
    slug: "painting",
    image: paintingImg,
    title: "Painting",
    description: "Professional interior and exterior painting services with premium finishes and textures.",
    longDescription: "Our professional painting services transform spaces with premium paints, expert techniques, and flawless finishes. From elegant interior walls to durable exterior coatings, we deliver exceptional results that enhance the beauty and protection of your property.",
    subcategories: [
      { title: "Interior Wall Painting", description: "Professional interior wall painting services using premium emulsion and acrylic paints for a smooth, lasting finish. Our skilled painters ensure clean edges, even coverage, and a flawless appearance for every room. We use low-VOC, eco-friendly paints that are safe for families and pets. Color consultation services help you choose the perfect palette for your space. From single accent walls to complete home painting, we deliver exceptional results.", image: paintingImg },
      { title: "Exterior Painting", description: "Durable exterior painting solutions that protect your building from weather, UV rays, and environmental damage. We use weather-resistant paints and coatings designed for long-lasting protection and vibrant color retention. Proper surface preparation including cleaning, priming, and crack filling ensures optimal paint adhesion. Our exterior painting services cover residential homes, commercial buildings, and industrial structures. Professional application techniques guarantee even coverage and a beautiful finish.", image: paintingImg },
      { title: "Texture Painting", description: "Creative texture painting techniques that add depth, dimension, and character to your walls. From subtle sand textures to bold stucco and knockdown patterns, we offer a wide range of textured finishes. Texture painting hides surface imperfections while creating unique visual interest. Our artisans use specialized tools and techniques to achieve consistent, professional results. Available in various colors and combinations to complement your interior design theme.", image: paintingImg },
      { title: "Decorative Wall Finishes", description: "Luxury decorative wall finishes including metallic paints, faux finishes, ombre effects, and artistic wall treatments. These premium finishes create stunning feature walls that become the focal point of any room. Our decorative techniques include sponging, ragging, color washing, and venetian plaster effects. Each finish is custom-crafted by skilled artisans to achieve unique and elegant results. Perfect for living rooms, bedrooms, lobbies, and high-end commercial spaces.", image: paintingImg },
    ],
  },
  {
    slug: "cladding",
    image: claddingImg,
    title: "Cladding",
    description: "Modern wall cladding solutions using stone, metal, and wood for stunning exteriors.",
    longDescription: "Our cladding services provide both aesthetic enhancement and weather protection for buildings. Using premium materials including natural stone, engineered wood, and metal panels, we create striking facades that stand the test of time.",
    subcategories: [
      { title: "Wall Cladding", description: "Premium wall cladding solutions for both interior and exterior applications using a variety of materials. Wall cladding enhances visual appeal while providing an additional layer of protection against moisture and temperature. Available in natural stone, engineered wood, ceramic tiles, and composite materials. Our expert installation ensures seamless joints and a professional finish that transforms any wall. Custom designs available to create unique patterns and textures.", image: claddingImg },
      { title: "Exterior Stone Cladding", description: "Natural and engineered stone cladding for building exteriors that adds timeless elegance and durability. Stone cladding provides excellent weather resistance and thermal insulation for energy-efficient buildings. Available in granite, slate, sandstone, limestone, and manufactured stone veneer options. Our installation techniques ensure proper drainage and moisture management behind the cladding. Stone cladding significantly increases property value and curb appeal.", image: claddingImg },
      { title: "Metal Cladding", description: "Contemporary metal cladding systems using aluminium, zinc, copper, and steel panels for modern architectural facades. Metal cladding offers exceptional durability, fire resistance, and minimal maintenance requirements. Available in flat, corrugated, and perforated profiles with various color and finish options. These systems provide excellent weather protection and can be combined with insulation for energy efficiency. Metal cladding creates sleek, industrial-modern aesthetics for commercial and residential buildings.", image: claddingImg },
      { title: "Wooden Cladding", description: "Natural and engineered wood cladding that brings warmth and organic beauty to building exteriors and interiors. Wood cladding creates a connection with nature and adds a welcoming, premium character to any structure. Available in cedar, teak, pine, and composite wood options with various profiles and finishes. Treated wood cladding offers excellent durability and resistance to rot, insects, and weathering. Sustainable sourcing options available for environmentally conscious building projects.", image: claddingImg },
    ],
  },
  {
    slug: "waterproofing",
    image: waterproofingImg,
    title: "Waterproofing",
    description: "Complete waterproofing solutions for terraces, bathrooms, basements, and roofs.",
    longDescription: "Protect your property from water damage with our comprehensive waterproofing services. We use advanced materials and proven techniques to provide lasting protection for terraces, bathrooms, basements, and roofs against moisture infiltration.",
    subcategories: [
      { title: "Terrace Waterproofing", description: "Professional terrace waterproofing using advanced membrane systems and liquid-applied coatings. Our terrace waterproofing solutions prevent water seepage and structural damage caused by prolonged moisture exposure. We use high-quality polyurethane and bituminous membranes that withstand UV rays and temperature fluctuations. Proper slope correction and drainage systems ensure water flows away from the structure effectively. Our solutions come with long-term warranties for complete peace of mind.", image: waterproofingImg },
      { title: "Bathroom Waterproofing", description: "Specialized bathroom waterproofing to prevent water leakage and protect walls and floors from moisture damage. Our bathroom waterproofing includes cementitious coatings, liquid membranes, and sheet membranes applied before tile installation. We ensure complete waterproofing of wet areas including shower zones, around bathtubs, and floor-wall junctions. Proper waterproofing prevents costly repairs from water damage to underlying structures. Our skilled technicians follow industry best practices for reliable, long-lasting protection.", image: waterproofingImg },
      { title: "Basement Waterproofing", description: "Comprehensive basement waterproofing solutions to keep underground spaces dry and usable. We address both positive-side and negative-side water pressure using crystalline, membrane, and injection techniques. Basement waterproofing prevents mold growth, structural deterioration, and flooding in below-grade spaces. Our solutions include drainage systems, sump pumps, and vapor barriers for complete moisture management. Professional assessment identifies the root cause of water intrusion for targeted, effective treatment.", image: waterproofingImg },
      { title: "Roof Waterproofing", description: "Durable roof waterproofing systems that protect buildings from rain, humidity, and water accumulation. We offer solutions for flat roofs, sloped roofs, and metal roofing systems using premium waterproofing materials. Our roof treatments include elastomeric coatings, torch-applied membranes, and self-adhesive systems. Proper waterproofing extends the life of your roof and prevents interior water damage. Regular maintenance plans available to ensure continued protection throughout the year.", image: waterproofingImg },
    ],
  },
  {
    slug: "facade-work",
    image: facadeImg,
    title: "Facade Work",
    description: "Modern building facade solutions with glass, ACP, and composite materials.",
    longDescription: "Our facade work transforms buildings with modern, energy-efficient exterior systems. We design and install glass facades, ACP panels, and composite cladding that enhance architectural beauty while improving building performance.",
    subcategories: [
      { title: "Glass Facade", description: "Stunning glass facade systems that create transparent, light-filled building exteriors with modern architectural appeal. Our glass facades use structural glazing, curtain wall systems, and spider glazing techniques for seamless installations. High-performance glass options include low-E coatings, tinted glass, and double-glazed units for energy efficiency. Glass facades maximize natural daylight, reducing artificial lighting costs and improving occupant well-being. Professional engineering ensures structural integrity and compliance with building safety standards.", image: facadeImg },
      { title: "ACP Facade", description: "Aluminium Composite Panel facade systems that give buildings a sleek, contemporary appearance with excellent weather protection. ACP facades are lightweight yet durable, reducing structural load while providing effective thermal insulation. Available in an extensive range of colors, metallic finishes, and wood-grain textures for creative design possibilities. Fire-rated ACP panels available for projects requiring enhanced safety compliance. Our precision fabrication and installation ensure clean lines and seamless panel joints.", image: facadeImg },
      { title: "Modern Commercial Facade", description: "Comprehensive commercial facade solutions combining multiple materials and systems for iconic building exteriors. We integrate glass, metal, stone, and composite elements to create distinctive commercial architecture. Our designs balance aesthetic impact with functional requirements including ventilation, shading, and energy performance. Advanced facade engineering ensures optimal building envelope performance in all weather conditions. From concept to completion, we deliver facades that define the character of commercial landmarks.", image: facadeImg },
      { title: "Building Exterior Facade", description: "Complete building exterior facade renovation and new construction services for residential and commercial properties. We transform outdated building exteriors into modern, attractive facades that enhance property value and street appeal. Our facade solutions address both aesthetic and functional requirements including insulation, weatherproofing, and ventilation. Material options include natural stone, engineered panels, render systems, and cladding combinations. Expert design consultation ensures the facade complements the building's architecture and surrounding environment.", image: facadeImg },
    ],
  },
  {
    slug: "elevation-design",
    image: elevationImg,
    title: "Elevation Design",
    description: "Contemporary building elevation designs for modern homes and commercial buildings.",
    longDescription: "Our elevation design services create stunning building fronts that make a lasting impression. We combine architectural expertise with modern design trends to deliver contemporary, luxury, and classic elevation designs for residential and commercial projects.",
    subcategories: [
      { title: "Modern House Elevation", description: "Clean, contemporary house elevation designs featuring flat roofs, geometric shapes, and large glass openings. Modern elevations emphasize minimalist aesthetics with a focus on horizontal and vertical lines. We use a combination of materials including glass, metal, concrete, and wood for visual contrast. Strategic placement of windows and openings maximizes natural light and ventilation. Our designs reflect current architectural trends while maintaining timeless appeal.", image: elevationImg },
      { title: "Contemporary Elevation", description: "Bold contemporary elevation designs that push architectural boundaries with innovative forms and material combinations. These elevations blend traditional and modern elements for a unique, sophisticated appearance. Features include cantilevered structures, mixed-material facades, and creative window placements. Our designs prioritize both visual impact and practical functionality for comfortable living. Each elevation is custom-designed to reflect the homeowner's personality and lifestyle preferences.", image: elevationImg },
      { title: "Luxury Villa Elevation", description: "Premium luxury villa elevation designs that exude grandeur, elegance, and architectural excellence. These elevations feature high-end materials including natural stone, premium cladding, and designer lighting. Grand entrance porticos, columns, and landscaped approaches create a majestic first impression. Our luxury designs incorporate covered terraces, balconies, and outdoor living spaces seamlessly. Every detail is carefully considered to create residences that stand as architectural masterpieces.", image: elevationImg },
      { title: "Commercial Building Elevation", description: "Professional commercial building elevation designs that project corporate identity and brand values through architecture. We create facades that are both visually impressive and functionally efficient for business environments. Designs incorporate energy-efficient glazing systems, signage integration, and accessible entrances. Our commercial elevations consider pedestrian flow, vehicular access, and urban context for optimal design solutions. From office complexes to retail centers, we deliver elevations that attract attention and business.", image: elevationImg },
    ],
  },
  {
    slug: "landscaping",
    image: landscapingImg,
    title: "Landscaping",
    description: "Professional garden landscaping, lawn design, and outdoor living spaces.",
    longDescription: "Transform your outdoor spaces with our professional landscaping services. From lush garden designs to creative outdoor lighting and water features, we create beautiful, functional landscapes that extend your living space into nature.",
    subcategories: [
      { title: "Garden Landscaping", description: "Complete garden landscaping services that transform outdoor spaces into beautiful, functional green environments. Our designs incorporate native plants, flowering species, and ornamental grasses for year-round visual appeal. We create garden layouts that balance open spaces, planted areas, pathways, and seating zones. Sustainable landscaping practices include efficient irrigation systems and drought-tolerant plant selections. From small courtyards to large estate gardens, we bring your outdoor vision to life.", image: landscapingImg },
      { title: "Lawn Design", description: "Professional lawn design and installation services for residential and commercial properties. We prepare the ground with proper grading, soil amendment, and drainage systems for healthy grass growth. Available turf options include natural grass varieties and premium artificial turf for low-maintenance solutions. Our lawn designs incorporate edging, borders, and pathways for defined, manicured landscapes. Regular maintenance programs available to keep your lawn lush, green, and picture-perfect.", image: landscapingImg },
      { title: "Outdoor Lighting Design", description: "Creative outdoor lighting design that transforms gardens, pathways, and building exteriors after dark. We use a combination of LED path lights, uplights, spotlights, and decorative fixtures for dramatic effects. Landscape lighting enhances safety, security, and visual appeal of outdoor spaces during evening hours. Energy-efficient LED systems with smart controls allow customizable lighting scenes and schedules. Our designs highlight architectural features, plants, and water elements for stunning nighttime landscapes.", image: landscapingImg },
      { title: "Water Feature Landscaping", description: "Beautiful water feature installations including fountains, ponds, cascading waterfalls, and reflecting pools. Water features add a sense of tranquility and luxury to gardens, courtyards, and commercial landscapes. We design custom water elements that complement the overall landscape architecture and building style. Our installations include proper filtration, circulation, and lighting systems for easy maintenance. From minimalist modern fountains to natural rock waterfalls, we create captivating water displays.", image: landscapingImg },
    ],
  },
  {
    slug: "flooring-work",
    image: flooringImg,
    title: "Flooring Work",
    description: "Premium flooring solutions including tiles, wood, marble, and vinyl for every space.",
    longDescription: "Our flooring services provide beautiful, durable, and functional floor solutions for residential and commercial spaces. From classic marble to modern vinyl, we offer expert installation of all flooring types with precision craftsmanship.",
    subcategories: [
      { title: "Tile Flooring", description: "Professional tile flooring installation using ceramic, porcelain, and vitrified tiles for durable, stylish floors. We offer a vast selection of tile designs, sizes, and patterns to suit any interior style and budget. Our expert installers ensure precise alignment, consistent grout lines, and level surfaces for a flawless finish. Tile flooring is ideal for kitchens, bathrooms, living areas, and commercial spaces due to its durability and easy maintenance. Anti-skid and large-format tile options available for modern, contemporary interiors.", image: flooringImg },
      { title: "Wooden Flooring", description: "Premium wooden flooring installation including solid hardwood, engineered wood, and laminate options. Wooden floors add warmth, elegance, and natural beauty to bedrooms, living rooms, and office spaces. We offer a range of wood species, grain patterns, and finishes from matte to high-gloss. Professional installation techniques ensure proper expansion gaps, moisture barriers, and seamless joints. Wooden flooring increases property value and creates a timeless aesthetic that never goes out of style.", image: flooringImg },
      { title: "Marble Flooring", description: "Luxurious marble flooring installation that adds grandeur and sophistication to any interior space. We source premium marble varieties including Italian marble, Indian marble, and imported natural stones. Expert cutting, polishing, and installation techniques ensure mirror-like finishes and precise joint alignment. Marble flooring is ideal for lobbies, living rooms, temple areas, and luxury residential and commercial interiors. Proper sealing and maintenance guidance ensures your marble floors retain their beauty for decades.", image: flooringImg },
      { title: "Vinyl Flooring", description: "Modern vinyl flooring solutions that offer style, comfort, and practicality for residential and commercial spaces. Luxury Vinyl Tile (LVT) and Luxury Vinyl Plank (LVP) options realistically replicate wood, stone, and tile appearances. Vinyl flooring is waterproof, scratch-resistant, and comfortable underfoot, making it perfect for high-traffic areas. Quick and clean installation with click-lock or glue-down methods minimizes disruption to your space. Available in an extensive range of designs and textures at cost-effective price points.", image: flooringImg },
    ],
  },
];
