import { Button } from "../ui";

export function Footer() {
  const footerLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-surface-container border-t border-outline-variant mt-12 md:mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-12 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-1 items-center md:items-start mb-8 md:mb-0">
          <span className="text-2xl font-black text-on-surface">DESIGN_ARCHITECT</span>
          <p className="text-xs text-on-surface-variant opacity-70">
            © 2024 DESIGN_ARCHITECT. Engineered with Material 3.
          </p>
        </div>

        <div className="flex gap-8">
          {footerLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-medium text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex gap-4 mt-8 md:mt-0">
          <Button variant="outlined" size="icon" className="w-10 h-10 bg-surface-container-high">
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </Button>
          <Button variant="outlined" size="icon" className="w-10 h-10 bg-surface-container-high">
            <span className="material-symbols-outlined text-[20px]">code</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
