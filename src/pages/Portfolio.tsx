
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const Portfolio = () => {
  useEffect(() => {
    console.log("Route changed: Portfolio page loaded");
  }, []);

  const projects = [
    {
      id: 1,
      title: "Serene Workspace",
      category: "Web Design",
      description: "A minimalist productivity platform focused on distraction-free work environments.",
      imageClass: "bg-blue-50",
    },
    {
      id: 2,
      title: "EcoTrack Mobile",
      category: "Mobile App",
      description: "An iOS and Android app helping users monitor and reduce their environmental impact.",
      imageClass: "bg-green-50",
    },
    {
      id: 3,
      title: "Monochrome Fashion",
      category: "E-commerce",
      description: "A premium fashion retailer with a focus on minimalist design and user experience.",
      imageClass: "bg-gray-100",
    },
    {
      id: 4,
      title: "Culinary Canvas",
      category: "Brand Identity",
      description: "Complete brand identity for an upscale restaurant focusing on artistic food presentation.",
      imageClass: "bg-amber-50",
    },
    {
      id: 5,
      title: "UrbanFlow",
      category: "Web Application",
      description: "Interactive city mapping platform helping users discover hidden urban treasures.",
      imageClass: "bg-indigo-50",
    },
    {
      id: 6,
      title: "Minimal Reader",
      category: "Digital Product",
      description: "A distraction-free reading application for long-form content and literature.",
      imageClass: "bg-rose-50",
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageTransition>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="pixel-palette-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-primary font-medium mb-4"
              >
                Our Work
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Portfolio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground text-lg mb-10"
              >
                A collection of our finest work showcasing our approach to design and development.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="pixel-palette-container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={item}
                  whileHover={{ y: -8 }}
                  className="rounded-xl overflow-hidden bg-card shadow-soft hover:shadow-hover transition-all duration-300"
                >
                  <div className={`${project.imageClass} aspect-video relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-primary/60 text-sm">Project Image</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <button className="text-primary flex items-center gap-2 hover:gap-3 transition-all duration-300">
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-primary/10">
          <div className="pixel-palette-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6"
              >
                Have a project in mind?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                We're always looking for interesting projects and collaborations. 
                Let's create something exceptional together.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                Get in Touch
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
