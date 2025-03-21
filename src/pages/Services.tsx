
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const Services = () => {
  useEffect(() => {
    console.log("Route changed: Services page loaded");
  }, []);

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
                What We Offer
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Our Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground text-lg mb-10"
              >
                We provide comprehensive design and development solutions 
                crafted with minimalist principles and meticulous attention to detail.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Services List */}
        <section className="py-16 bg-secondary/30">
          <div className="pixel-palette-container">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {[
                {
                  title: "UI/UX Design",
                  description: "Creating intuitive, beautiful interfaces that delight users while meeting business objectives.",
                  features: [
                    "User Research & Testing",
                    "Information Architecture",
                    "Wireframing & Prototyping",
                    "Visual Design",
                    "Interaction Design"
                  ],
                },
                {
                  title: "Web Development",
                  description: "Building performant, scalable web applications using modern technologies and best practices.",
                  features: [
                    "Frontend Development",
                    "Backend Development",
                    "E-commerce Solutions",
                    "Content Management Systems",
                    "API Integration"
                  ],
                },
                {
                  title: "Mobile Apps",
                  description: "Developing native and cross-platform mobile experiences that feel natural on any device.",
                  features: [
                    "iOS & Android Development",
                    "Cross-platform Solutions",
                    "App Store Optimization",
                    "Mobile UI/UX Design",
                    "Performance Optimization"
                  ],
                },
                {
                  title: "Brand Identity",
                  description: "Crafting cohesive visual identities that communicate your unique value proposition.",
                  features: [
                    "Logo Design",
                    "Brand Guidelines",
                    "Typography Selection",
                    "Color Theory",
                    "Visual Asset Creation"
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300"
                >
                  <div className="h-2 bg-primary"></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-primary">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20">
          <div className="pixel-palette-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground">
                We follow a structured yet flexible process to ensure each project receives the attention to detail it deserves.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description: "We start by understanding your business, users, and objectives to align our strategy with your goals."
                },
                {
                  number: "02",
                  title: "Planning",
                  description: "We develop a comprehensive roadmap outlining the project scope, timeline, and deliverables."
                },
                {
                  number: "03",
                  title: "Design",
                  description: "Our designers create intuitive interfaces and experiences based on user research and best practices."
                },
                {
                  number: "04",
                  title: "Development",
                  description: "Our engineers build robust, scalable solutions using modern technologies and clean code."
                },
                {
                  number: "05",
                  title: "Testing",
                  description: "We rigorously test every aspect of the product to ensure quality, performance, and usability."
                },
                {
                  number: "06",
                  title: "Launch & Support",
                  description: "We help you deploy your product and provide ongoing support to ensure long-term success."
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex gap-6 mb-8"
                >
                  <div className="pt-1">
                    <span className="text-primary text-xl font-mono font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                    {index !== 5 && (
                      <div className="border-l border-dashed border-primary/30 h-8 ml-[0.4rem] mt-2"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;
