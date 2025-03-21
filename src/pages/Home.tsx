
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // For logging route changes
    console.log("Route changed: Home page loaded");
    
    // This sets up the intersection observer for reveal animations
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
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="pixel-palette-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary font-medium mb-4 tracking-wide"
              >
                Welcome to Pixel Palette
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
              >
                Digital Artistry Meets Functional Design
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted-foreground text-lg md:text-xl mb-8"
              >
                Crafting elegant digital experiences with pixel-perfect precision and intuitive functionality.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate("/portfolio")}
                  className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  View Our Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate("/contact")}
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg border border-border hover:bg-secondary/80 transition-all duration-200"
                >
                  Get in Touch
                </motion.button>
              </motion.div>
            </div>
          </div>
          
          {/* Abstract background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/20 blur-[80px]"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute bottom-10 left-[5%] w-96 h-96 rounded-full bg-blue-400/20 blur-[100px]"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/50">
          <div className="pixel-palette-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight reveal-animation">Our Approach</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto reveal-animation">
                We combine minimalist design principles with cutting-edge technology to create seamless digital experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Simplicity",
                  description: "Stripping away the unnecessary to focus on what truly matters in your digital experience.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                },
                {
                  title: "Functionality",
                  description: "Creating intuitive interfaces that work flawlessly across all devices and platforms.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Elegance",
                  description: "Balancing aesthetic refinement with purposeful design to create memorable digital products.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300"
                >
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
