import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, ShieldCheck, Leaf } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/dense_green_rainforest_hero_background.png";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-32 lg:pt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Rainforest Background"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              AI-Powered Conservation Tool
            </div>
            <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl mb-6 leading-tight">
              Identify Wildlife <br/>
              <span className="text-gradient">From Footprints</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Upload images of pugmarks and tracks to instantly identify species using advanced computer vision. Supporting conservation efforts worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/identify">
                <Button size="lg" className="rounded-full text-base h-12 px-8 shadow-lg shadow-primary/20">
                  Try It Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="rounded-full text-base h-12 px-8 bg-white/50 backdrop-blur-sm hover:bg-white/80">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {[
            {
              icon: Camera,
              title: "Instant Analysis",
              desc: "Upload a photo and get species classification in seconds.",
            },
            {
              icon: ShieldCheck,
              title: "High Accuracy",
              desc: "Powered by Convolutional Neural Networks trained on diverse datasets.",
            },
            {
              icon: Leaf,
              title: "Conservation Focused",
              desc: "Helping trackers and researchers monitor biodiversity efficiently.",
            },
          ].map((item, i) => (
            <div key={i} className="glass-panel rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
