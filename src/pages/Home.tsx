import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface TemplateCardProps {
  id: string | number;
  name: string;
  description: string;
  imageUrl: string;
}

const TemplateCard = ({ id, name, description, imageUrl }: TemplateCardProps) => (
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
      imageUrl: "https://raw.githubusercontent.com/sarowar107/photos/main/1.png"
    },
    {
      id: "creative-showcase",
      name: "Creative Showcase",
      description: "A visually engaging and dynamic layout. Ideal for designers, artists, and creatives.",
      imageUrl: "https://raw.githubusercontent.com/sarowar107/photos/main/2.png"

    },
    {
      id: "cyberpunk-neon",
      name: "Cyberpunk Neon",
      description: "A dark, futuristic theme with neon accents. For the forward-thinking tech professional.",
      imageUrl: "https://raw.githubusercontent.com/sarowar107/photos/main/3.png"
    },
    {
      id: "classic-editorial",
      name: "Classic Editorial",
      description: "An elegant, serif-focused layout inspired by high-end publications. For writers and academics.",
      imageUrl: "https://raw.githubusercontent.com/sarowar107/photos/main/4.png"
    },
    {
      id: "brutalist-block",
      name: "Brutalist Block",
      description: "A stark, minimalist design with sharp edges and bold typography. Unapologetically direct.",
      imageUrl: "https://raw.githubusercontent.com/sarowar107/photos/main/5.png"
    },
    {
      id: "soft-friendly",
      name: "Soft & Friendly",
      description: "A playful and inviting design with pastel colors and rounded shapes. Perfect for UI/UX designers.",
      imageUrl: "https://raw.githubusercontent.com/sarowar107/photos/main/6.png"
    },
    {
      id: "corporate-executive",
      name: "Corporate Executive",
      description: "A professional, structured layout perfect for business contexts and project managers.",
      imageUrl: "https://raw.githubusercontent.com/sarowar107/photos/main/7.png"
    },
    {
      id: "gradient-fusion",
      name: "Gradient Fusion",
      description: "A vibrant, modern design featuring bold gradients and glassmorphism. For the modern frontend dev.",
      imageUrl: "https://raw.githubusercontent.com/sarowar107/photos/main/8.png"
    },
    {
      id: "monochrome-accent",
      name: "Monochrome Accent",
      description: "A high-contrast black and white theme with a single, striking accent color. Bold and focused.",
      imageUrl: "https://raw.githubusercontent.com/sarowar107/photos/main/9.png"
    },
    {
      id: "earthy-organic",
      name: "Earthy & Organic",
      description: "A nature-inspired theme with warm, earthy tones and a natural feel. For photographers and artists.",
      imageUrl: "https://raw.githubusercontent.com/sarowar107/photos/main/10.png"
    },
    {
      id: "retro-arcade",
      name: "Retro Arcade",
      description: "A nostalgic 80s synthwave theme with retro fonts and neon glows. Fun and unique.",
      imageUrl: "https://raw.githubusercontent.com/sarowar107/photos/main/11.png"
    },
    {
      id: "gilded-onyx",
      name: "Gilded Onyx",
      description: "A luxurious and sophisticated dark theme with gold accents. For a premium, high-end feel.",
      imageUrl: "https://raw.githubusercontent.com/sarowar107/photos/main/12.png"
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
