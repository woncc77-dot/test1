import { motion } from "motion/react";
import { PROJECTS } from "@/constants";
import { Card, Chip } from "../ui";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section className="py-12 md:py-24" id="work">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl text-on-surface font-medium">Selected Projects</h2>
        <div className="h-[1px] flex-grow mx-6 bg-outline-variant/30"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ 
              initial: { duration: 0.5, delay: index * 0.1 },
              whileInView: { duration: 0.5, delay: index * 0.1 },
              whileHover: { duration: 0.2, ease: "easeOut" }
            }}
            viewport={{ once: true }}
            className={cn(
              "group relative flex flex-col cursor-pointer",
              project.size === 'large' ? "md:col-span-8" : 
              project.size === 'wide' ? "md:col-span-8" : 
              "md:col-span-4"
            )}
          >
            <Card className="flex flex-col h-full hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
              <div className={cn(
                "w-full overflow-hidden bg-surface-container-highest",
                project.size === 'large' ? "aspect-[16/9]" : 
                project.size === 'wide' ? "aspect-[21/9]" : 
                "aspect-square"
              )}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Chip key={tag} variant={tag === 'React' ? 'secondary' : 'surface'}>
                      {tag}
                    </Chip>
                  ))}
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <div>
                    <h3 className="text-xl text-on-surface font-medium mb-1">{project.title}</h3>
                    <p className="text-sm text-on-surface-variant line-clamp-2">{project.description}</p>
                  </div>
                  {project.link && (
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform ml-4">
                      open_in_new
                    </span>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
