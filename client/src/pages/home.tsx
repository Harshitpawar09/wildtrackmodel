import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { ArrowRight, Database, TreeDeciduous, BrainCircuit } from "lucide-react";
import tigerImg from "@assets/generated_images/cinematic_forest_floor_with_a_tiger_pugmark.png";
import elephantImg from "@assets/generated_images/elephant_footprint_in_dirt.png";
import deerImg from "@assets/generated_images/deer_footprint_in_soil.png";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      
      <main>
        <Hero />

        {/* Recent/Gallery Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Recent Identifications
                </h2>
                <p className="text-muted-foreground max-w-xl">
                  Explore the latest species identified by our community of researchers and forest officials.
                </p>
              </div>
              <Link href="/identify" className="text-primary font-medium hover:underline flex items-center gap-1">
                 View Full Gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: tigerImg, name: "Bengal Tiger", loc: "Jim Corbett National Park", time: "2 hours ago" },
                { img: elephantImg, name: "Asian Elephant", loc: "Periyar Wildlife Sanctuary", time: "5 hours ago" },
                { img: deerImg, name: "Sambar Deer", loc: "Kaziranga National Park", time: "1 day ago" },
              ].map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.loc}</p>
                    <div className="flex items-center justify-between border-t border-border pt-3">
                       <span className="text-xs font-mono text-muted-foreground">{item.time}</span>
                       <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">Verified</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Specs Section */}
        <section className="py-24 bg-background">
          <div className="container px-4">
            <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-16 relative overflow-hidden">
              {/* Abstract BG Pattern */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                 <svg viewBox="0 0 100 100" className="w-full h-full">
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                 </svg>
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                    Powered by Advanced Deep Learning
                  </h2>
                  <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                    Our system utilizes a custom Convolutional Neural Network (CNN) trained on thousands of footprint images. It analyzes morphological features like toe pad shape, claw marks, and overall size to distinguish between species with high precision.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Real-time inference engine",
                      "Support for low-light & partial prints",
                      "Offline capabilities for remote areas"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                      <BrainCircuit className="h-8 w-8 mb-4 opacity-80" />
                      <h4 className="font-bold text-xl mb-1">CNN Model</h4>
                      <p className="text-sm opacity-70">Custom architecture optimized for pattern recognition</p>
                   </div>
                   <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                      <Database className="h-8 w-8 mb-4 opacity-80" />
                      <h4 className="font-bold text-xl mb-1">Extensive Dataset</h4>
                      <p className="text-sm opacity-70">Trained on 50,000+ verified samples</p>
                   </div>
                   <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 sm:col-span-2">
                      <TreeDeciduous className="h-8 w-8 mb-4 opacity-80" />
                      <h4 className="font-bold text-xl mb-1">Eco-Friendly</h4>
                      <p className="text-sm opacity-70">Non-invasive monitoring with zero disturbance to wildlife</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <footer className="bg-secondary py-12 border-t border-border/50">
        <div className="container px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 WildTrack AI. Built for conservation.</p>
        </div>
      </footer>
    </div>
  );
}
