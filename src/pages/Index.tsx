import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Leaf, Clock, ShoppingCart, Users, Star, Download, Share, Search, Check } from "lucide-react";
import EnhancedSadhyaPlanner from "@/components/EnhancedSadhyaPlanner";
import BananaLeafGuide from "@/components/BananaLeafGuide";
import heroImage from "@/assets/sadhya-hero.jpg";
import spicesImage from "@/assets/kerala-spices.jpg";
import logoImage from "@/assets/logo.png";

const Index = () => {
  const [currentView, setCurrentView] = useState<"home" | "planner" | "guide">("home");

  if (currentView === "planner") {
    return <EnhancedSadhyaPlanner />;
  }

  if (currentView === "guide") {
    return <BananaLeafGuide onClose={() => setCurrentView("home")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-warm safe-area-padding">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <img src={logoImage} alt="Sadhya Sensei Logo" className="h-16 w-16 animate-gentle-float" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Sadhya Sensei
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Your ultimate digital assistant for planning and executing an authentic Onam Sadhya feast
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button 
              onClick={() => setCurrentView("planner")}
              variant="hero"
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6"
            >
              Start Planning Your Sadhya
            </Button>
            <Button 
              onClick={() => setCurrentView("guide")}
              variant="cultural"
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6"
            >
              View Banana Leaf Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Complete Sadhya Planning Features
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From guest scaling to cultural traditions, with 26+ authentic dishes, smart shopping lists, cooking timelines, and interactive guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="shadow-warm hover:shadow-cultural transition-smooth">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Guest Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Smart scaling for any group size with prominent input controls
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-warm hover:shadow-cultural transition-smooth">
              <CardHeader className="text-center">
                <Leaf className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle>26+ Traditional Dishes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Searchable menu with info pop-ups, descriptions, and cultural details
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-warm hover:shadow-cultural transition-smooth">
              <CardHeader className="text-center">
                <ShoppingCart className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Smart Shopping List</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Ingredient consolidation, categorization, export & WhatsApp sharing
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-warm hover:shadow-cultural transition-smooth">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle>Cooking Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Intelligent task sequencing, parallel processing, progress tracking
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-warm hover:shadow-cultural transition-smooth">
              <CardHeader className="text-center">
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Search & Filter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Find dishes quickly with search and category filters
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-warm hover:shadow-cultural transition-smooth">
              <CardHeader className="text-center">
                <Download className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Export & Print</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Download shopping lists and print kitchen-friendly timelines
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-warm hover:shadow-cultural transition-smooth">
              <CardHeader className="text-center">
                <Check className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle>Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Check off completed tasks and track your cooking progress
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PWA Features Section */}
      <section className="py-20 px-4 bg-gradient-kerala/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Works Like a Native App
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Install Sadhya Sensei on your phone for the complete mobile cooking experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Install to Home Screen</h3>
              <p className="text-sm text-muted-foreground">Add to home screen for quick access</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Share className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Works Offline</h3>
              <p className="text-sm text-muted-foreground">Access your plans without internet</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <ChefHat className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Kitchen-Friendly</h3>
              <p className="text-sm text-muted-foreground">Optimized for cooking environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section className="py-20 px-4 bg-gradient-kerala/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Rooted in Tradition
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sadhya is more than just a meal—it's a celebration of Kerala's rich cultural heritage. 
                Our app ensures you honor every tradition while making the planning process effortless.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Authentic recipes and cooking methods</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Traditional banana leaf placement guide</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Cultural etiquette and dining customs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={spicesImage} 
                alt="Traditional Kerala spices and ingredients"
                className="rounded-2xl shadow-cultural"
              />
              <div className="absolute inset-0 bg-gradient-kerala/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="shadow-cultural bg-gradient-warm border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
                Ready to Create Your Sadhya?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands who've created memorable feasts with Sadhya Sensei
              </p>
              <Button 
                onClick={() => setCurrentView("planner")}
                variant="hero"
                size="lg"
                className="text-xl px-12 py-6"
              >
                Start Planning Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
