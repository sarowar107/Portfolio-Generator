import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const TemplateCard = ({ id, name, description, imageUrl }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-surface rounded-xl overflow-hidden border border-border group"
  >
    <div className="overflow-hidden h-60">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-text-secondary mb-6">{description}</p>
      <div className="flex gap-4">
        <Button asChild className="flex-1" variant="outline">
          <Link to={`/preview/${id}`}>Preview</Link>
        </Button>
        <Button asChild className="flex-1">
          <Link to={`/customize/${id}`}>Select & Customize</Link>
        </Button>
      </div>
    </div>
  </motion.div>
);

const Home = () => {
  const templates = [
    {
      id: "minimalist-pro",
      name: "Minimalist Pro",
      description: "A clean, professional, and content-focused design. Perfect for developers and academics.",
      imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "creative-showcase",
      name: "Creative Showcase",
      description: "A visually engaging and dynamic layout. Ideal for designers, artists, and creatives.",
      imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "cyberpunk-neon",
      name: "Cyberpunk Neon",
      description: "A dark, futuristic theme with neon accents. For the forward-thinking tech professional.",
      imageUrl: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "classic-editorial",
      name: "Classic Editorial",
      description: "An elegant, serif-focused layout inspired by high-end publications. For writers and academics.",
      imageUrl: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "brutalist-block",
      name: "Brutalist Block",
      description: "A stark, minimalist design with sharp edges and bold typography. Unapologetically direct.",
      imageUrl: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "soft-friendly",
      name: "Soft & Friendly",
      description: "A playful and inviting design with pastel colors and rounded shapes. Perfect for UI/UX designers.",
      imageUrl: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "corporate-executive",
      name: "Corporate Executive",
      description: "A professional, structured layout perfect for business contexts and project managers.",
      imageUrl: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "gradient-fusion",
      name: "Gradient Fusion",
      description: "A vibrant, modern design featuring bold gradients and glassmorphism. For the modern frontend dev.",
      imageUrl: "https://images.pexels.com/photos/2693208/pexels-photo-2693208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "monochrome-accent",
      name: "Monochrome Accent",
      description: "A high-contrast black and white theme with a single, striking accent color. Bold and focused.",
      imageUrl: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "earthy-organic",
      name: "Earthy & Organic",
      description: "A nature-inspired theme with warm, earthy tones and a natural feel. For photographers and artists.",
      imageUrl: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "retro-arcade",
      name: "Retro Arcade",
      description: "A nostalgic 80s synthwave theme with retro fonts and neon glows. Fun and unique.",
      imageUrl: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "gilded-onyx",
      name: "Gilded Onyx",
      description: "A luxurious and sophisticated dark theme with gold accents. For a premium, high-end feel.",
      imageUrl: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-24"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Craft Your Professional Story
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-secondary mb-8">
          Instantly generate a stunning, modern portfolio. Just fill in your details, choose a template, and download your production-ready website.
        </p>
        <Button asChild size="lg">
          <a href="#templates">
            Create Your Portfolio Now <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </motion.section>

      {/* Template Showcase */}
      <section id="templates">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Choose Your Signature Style</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {templates.map(template => (
            <TemplateCard key={template.id} {...template} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
