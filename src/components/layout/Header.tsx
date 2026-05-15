import { motion } from "motion/react";
import { Button } from "../ui";
import { cn } from "@/lib/utils";

export function Header() {
  const navItems = [
    { name: 'Work', href: '#work', active: true },
    { name: 'Expertise', href: '#expertise' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto">
        <div className="text-xl font-bold tracking-tighter text-primary">
          DESIGN_ARCHITECT
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "font-medium text-sm transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-on-surface/8",
                item.active ? "text-primary border-b-2 border-primary rounded-t-lg rounded-b-none" : "text-on-surface-variant"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <Button size="md">Resume</Button>
      </div>
    </header>
  );
}
