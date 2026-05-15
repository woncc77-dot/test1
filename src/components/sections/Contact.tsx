import { motion } from "motion/react";
import { Button } from "../ui";

export function Contact() {
  return (
    <section className="py-12 md:py-24" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[45px] leading-tight text-on-surface font-bold mb-6"
          >
            Let's build something <span className="text-secondary">systematic</span>.
          </motion.h2>
          <p className="text-lg text-on-surface-variant mb-8">
            Currently accepting new design system consultations and architectural interface projects.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-on-surface">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span className="text-sm font-medium">woncc77@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface">
              <span className="material-symbols-outlined text-primary">distance</span>
              <span className="text-sm font-medium">Global / Remote</span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-surface-container p-8 rounded-2xl border border-outline-variant shadow-lg"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-xs font-medium text-on-surface-variant ml-1">Full Name</label>
              <input 
                type="text"
                placeholder="John Doe"
                className="w-full bg-surface-container-high border border-outline-variant rounded-lg p-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-on-surface-variant ml-1">Email Address</label>
              <input 
                type="email"
                placeholder="john@example.com"
                className="w-full bg-surface-container-high border border-outline-variant rounded-lg p-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-on-surface-variant ml-1">Your Message</label>
              <textarea 
                rows={4}
                placeholder="Briefly describe your project..."
                className="w-full bg-surface-container-high border border-outline-variant rounded-lg p-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant"
              />
            </div>
            <Button className="w-full py-4 text-sm font-bold shadow-xl" size="lg">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
