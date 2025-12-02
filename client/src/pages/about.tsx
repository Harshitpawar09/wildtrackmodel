import { Navbar } from "@/components/layout/navbar";
import { Heart, Users, Zap, Shield, TreeDeciduous, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/30">
          <div className="container px-4">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                About WildTrack AI
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Leveraging artificial intelligence to protect endangered wildlife through advanced footprint identification and conservation technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-background">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold mb-6 text-foreground">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  WildTrack AI empowers forest officials, wildlife researchers, and conservation teams with intelligent tools to monitor endangered species in their natural habitats—without intrusive tracking methods that disturb wildlife.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By analyzing footprint morphology with deep learning, we enable non-invasive population monitoring and early warning systems for human-wildlife conflict zones.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-start gap-4">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Conservation-First</h3>
                      <p className="text-muted-foreground">Protecting endangered species through technology that respects wildlife welfare.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-start gap-4">
                    <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Real-Time Intelligence</h3>
                      <p className="text-muted-foreground">Instant species identification enabling rapid response to conservation needs.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-display font-bold mb-6 text-foreground">
                Advanced Technology Stack
              </h2>
              <p className="text-lg text-muted-foreground">
                Our system combines cutting-edge machine learning with domain expertise in wildlife biology to deliver accurate species identification from footprint images.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "CNN Deep Learning",
                  description: "Custom-trained convolutional neural network optimized for footprint morphology analysis with 98%+ accuracy."
                },
                {
                  icon: <TreeDeciduous className="h-8 w-8" />,
                  title: "Biodiversity Focus",
                  description: "Specialized models for Asian Elephant, Bengal Tiger, and other endangered species across Asian forests."
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Field-Ready",
                  description: "Offline-capable inference engine designed for remote areas with poor connectivity and low-power devices."
                }
              ].map((item, i) => (
                <Card key={i} className="p-8 bg-card border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="text-primary mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-24 bg-background">
          <div className="container px-4">
            <h2 className="text-4xl font-display font-bold mb-16 text-foreground text-center">
              Impact & Conservation Goals
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Empower Communities</h3>
                    <p className="text-muted-foreground">Enable local communities and forest officials with AI tools for wildlife monitoring.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <TreeDeciduous className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Ecosystem Protection</h3>
                    <p className="text-muted-foreground">Support biodiversity conservation by reducing human-wildlife conflicts in shared ecosystems.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Rapid Response</h3>
                    <p className="text-muted-foreground">Enable real-time alerts for endangered species presence in critical zones.</p>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-primary text-primary-foreground rounded-3xl">
                <h3 className="text-2xl font-bold mb-6">Why Footprint Analysis?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="font-bold text-lg">✓</span>
                    <span><strong>Non-invasive:</strong> No tracking devices or physical contact with animals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-lg">✓</span>
                    <span><strong>Cost-effective:</strong> Leverages existing footprint discovery by rangers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-lg">✓</span>
                    <span><strong>Scalable:</strong> Works across different terrains and seasons</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-lg">✓</span>
                    <span><strong>Evidence-based:</strong> Creates verifiable records for conservation policy</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container px-4">
            <h2 className="text-4xl font-display font-bold mb-16 text-foreground text-center">
              Built for Conservation
            </h2>
            <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              WildTrack AI brings together machine learning engineers, wildlife biologists, and conservation experts to create technology that protects endangered species for future generations.
            </p>
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Partners with: Wildlife research institutions, forest departments, and conservation NGOs across South Asia
              </p>
              <p className="text-sm text-muted-foreground">
                Committed to open science and transparent AI for conservation
              </p>
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
