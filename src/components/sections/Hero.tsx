import { motion } from "motion/react";
import { Button } from "../ui";

export function Hero() {
  return (
    <section className="py-24 md:py-[120px] flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/20 border border-secondary-container/30 text-secondary mb-6"
      >
        <span className="material-symbols-outlined text-[18px]">terminal</span>
        <span className="text-[11px] font-medium uppercase tracking-widest">Systematic Design Thinking</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[45px] md:text-[57px] leading-[1.1] text-on-surface mb-6 max-w-[900px] font-bold tracking-tight"
      >
        Designing the Future of <span className="text-primary">Tech Interfaces</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-[16px] md:text-[18px] text-on-surface-variant max-w-[600px] mb-8 leading-relaxed"
      >
        I bridge the gap between complex engineering requirements and high-fidelity user experiences through scalable Design Systems.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button size="lg" className="flex items-center gap-2">
          View My Work
          <span className="material-symbols-outlined">arrow_downward</span>
        </Button>
        <Button variant="outlined" size="lg">
          Contact Me
        </Button>
      </motion.div>
    </section>
  );
}
