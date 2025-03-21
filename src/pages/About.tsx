
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    console.log("Route changed: About page loaded");
    
    // Set up intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll(".reveal-animation").forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <PageTransition>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="pixel-palette-container">
            <div className="max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-center"
              >
                About Pixel Palette
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-12"
              >
                <p className="text-lg text-muted-foreground">
                  We are digital artisans crafting exceptional user experiences through thoughtful design.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-secondary/30">
          <div className="pixel-palette-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2018, Pixel Palette began with a simple vision: to create digital experiences that combine beauty with purpose. We believe that great design should be both visually stunning and functionally flawless.
                  </p>
                  <p>
                    Our team of designers and developers are united by a shared philosophy that less is more. We strip away the unnecessary to focus on what truly matters, creating products that feel intuitive and natural to use.
                  </p>
                  <p>
                    Over the years, we've refined our approach to design, embracing minimalism not as a style, but as a way of thinking. Every pixel, every interaction, and every line of code is crafted with intention and care.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="relative aspect-video bg-primary/10 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="font-mono text-primary/70 text-sm">Image: Our Studio</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-20">
          <div className="pixel-palette-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal-animation">Our Core Values</h2>
              <p className="text-muted-foreground reveal-animation">
                These principles guide everything we do, from the smallest detail to the largest project.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Simplicity",
                  description: "We believe in removing complexity and focusing on what's essential.",
                },
                {
                  title: "Quality",
                  description: "We obsess over details because we know they make all the difference.",
                },
                {
                  title: "Innovation",
                  description: "We constantly explore new approaches and technologies to stay ahead.",
                },
                {
                  title: "Integrity",
                  description: "We're honest, transparent, and accountable in everything we do.",
                },
                {
                  title: "Collaboration",
                  description: "We believe the best work happens when talented people work closely together.",
                },
                {
                  title: "Purpose",
                  description: "We design with intention, ensuring every element serves a function.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-card p-6 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
