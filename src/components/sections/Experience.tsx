import { motion } from "motion/react";
import { EXPERIENCES } from "@/constants";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section className="py-12 md:py-24" id="expertise">
      <div className="max-w-[800px]">
        <h2 className="text-3xl text-on-surface font-medium mb-8">Professional Experience</h2>
        
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "flex gap-6 p-6 rounded-xl hover:bg-surface-container transition-colors border-l-4",
                exp.isCurrent ? "border-primary" : "border-outline-variant"
              )}
            >
              <div className="hidden sm:block">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center",
                  exp.isCurrent ? "bg-primary-container text-on-primary-container" : "bg-surface-container-highest text-on-surface-variant"
                )}>
                  <span className="material-symbols-outlined">{exp.icon}</span>
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-on-surface">{exp.role}</h3>
                  <span className={cn(
                    "text-sm font-medium",
                    exp.isCurrent ? "text-primary" : "text-on-surface-variant"
                  )}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-secondary font-medium mb-4">{exp.company}</p>
                
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">check_circle</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
