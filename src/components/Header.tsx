import { Link } from 'react-router-dom';
import { CodeXml } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <CodeXml className="h-8 w-8 text-primary" />
          <span className="font-bold text-lg">Portfolio Forge</span>
        </Link>
        <nav>
          <a
            href="https://github.com/sarowar-islam/portfolio-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 hover:bg-surface hover:text-accent-foreground"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
