const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-text-secondary">
          &copy; {currentYear} Portfolio Forge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
