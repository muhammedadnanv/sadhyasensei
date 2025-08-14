import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Users, Clock, ShoppingCart, Leaf } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

// Simplified dish data for basic planner
const basicDishes = [
  {
    id: "rice",
    name: "Rice (Choru)",
    description: "The foundation of Sadhya, served in the center of the banana leaf",
    category: "main",
    ingredients: ["Basmati rice", "Water", "Salt"],
    cookingTime: 25,
    servingSize: "150g"
  },
  {
    id: "sambar",
    name: "Sambar",
    description: "Tangy lentil curry with vegetables",
    category: "curry",
    ingredients: ["Toor dal", "Drumstick", "Brinjal", "Okra", "Tomato", "Tamarind", "Sambar powder"],
    cookingTime: 45,
    servingSize: "100ml"
  },
  {
    id: "rasam",
    name: "Rasam",
    description: "Spicy and tangy soup with tomatoes and spices",
    category: "curry", 
    ingredients: ["Tomato", "Tamarind", "Turmeric", "Cumin", "Black pepper", "Curry leaves"],
    cookingTime: 30,
    servingSize: "80ml"
  },
  {
    id: "avial",
    name: "Avial",
    description: "Mixed vegetables cooked in coconut and curry leaves",
    category: "vegetable",
    ingredients: ["Mixed vegetables", "Coconut", "Green chili", "Curry leaves", "Coconut oil"],
    cookingTime: 35,
    servingSize: "80g"
  },
  {
    id: "thoran",
    name: "Thoran",
    description: "Dry vegetable stir-fry with grated coconut",
    category: "vegetable",
    ingredients: ["Cabbage", "Coconut", "Turmeric", "Curry leaves", "Mustard seeds"],
    cookingTime: 20,
    servingSize: "60g"
  },
  {
    id: "olan",
    name: "Olan",
    description: "Pumpkin and black-eyed peas in coconut milk",
    category: "vegetable",
    ingredients: ["Pumpkin", "Black-eyed peas", "Coconut milk", "Curry leaves", "Salt"],
    cookingTime: 25,
    servingSize: "70g"
  },
  {
    id: "pachadi",
    name: "Pachadi",
    description: "Sweet and sour vegetable curry with yogurt",
    category: "curry",
    ingredients: ["Pineapple", "Yogurt", "Coconut", "Green chili", "Ginger"],
    cookingTime: 15,
    servingSize: "50g"
  },
  {
    id: "kichadi",
    name: "Kichadi",
    description: "Cucumber or vegetable curry with coconut and yogurt",
    category: "curry",
    ingredients: ["Cucumber", "Yogurt", "Coconut", "Green chili", "Mustard seeds"],
    cookingTime: 15,
    servingSize: "50g"
  },
  {
    id: "payasam",
    name: "Payasam",
    description: "Sweet dessert made with milk, jaggery and rice/vermicelli",
    category: "dessert",
    ingredients: ["Rice", "Milk", "Jaggery", "Cardamom", "Cashews", "Raisins"],
    cookingTime: 40,
    servingSize: "100ml"
  },
  {
    id: "pickle",
    name: "Pickle (Achar)",
    description: "Spicy and tangy mango or lime pickle",
    category: "accompaniment",
    ingredients: ["Raw mango", "Red chili powder", "Turmeric", "Salt", "Gingelly oil"],
    cookingTime: 10,
    servingSize: "15g"
  }
];

export default function SadhyaPlanner() {
  const [guestCount, setGuestCount] = useState<number>(4);
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<"guests" | "dishes" | "timeline">("guests");
  const { toast } = useToast();

  const handleDishToggle = (dishId: string) => {
    setSelectedDishes(prev => 
      prev.includes(dishId) 
        ? prev.filter(id => id !== dishId)
        : [...prev, dishId]
    );
  };

  const generateShoppingList = () => {
    const allIngredients: { [key: string]: number } = {};
    
    selectedDishes.forEach(dishId => {
      const dish = basicDishes.find(d => d.id === dishId);
      if (dish) {
        dish.ingredients.forEach(ingredient => {
          allIngredients[ingredient] = (allIngredients[ingredient] || 0) + guestCount;
        });
      }
    });

    return Object.entries(allIngredients).map(([ingredient, quantity]) => ({
      ingredient,
      quantity: `${quantity} portions`
    }));
  };

  const generateTimeline = () => {
    const selectedDishDetails = basicDishes.filter(dish => 
      selectedDishes.includes(dish.id)
    );

    // Sort by cooking time (longest first)
    return selectedDishDetails
      .sort((a, b) => b.cookingTime - a.cookingTime)
      .map((dish, index) => ({
        ...dish,
        startTime: `T-${dish.cookingTime + (index * 10)} minutes`,
        order: index + 1
      }));
  };

  if (currentStep === "guests") {
    return (
      <div className="min-h-screen bg-gradient-warm flex items-center justify-center p-4 safe-area-padding">
        <Card className="w-full max-w-lg shadow-cultural">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl bg-gradient-hero bg-clip-text text-transparent">
              Welcome to Sadhya Sensei
            </CardTitle>
            <CardDescription className="text-base md:text-lg">
              Your digital assistant for planning the perfect Onam Sadhya
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <Users className="mx-auto h-10 w-10 md:h-12 md:w-12 text-primary mb-4" />
              <Label htmlFor="guests" className="text-base md:text-lg font-medium">
                How many guests will you be serving?
              </Label>
            </div>
            <div className="space-y-2">
              <Input
                id="guests"
                type="number"
                min="1"
                max="100"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value) || 1)}
                className="text-center text-xl h-12 text-lg"
              />
              <p className="text-sm text-muted-foreground text-center">
                Enter the number of people (including yourself)
              </p>
            </div>
            <Button 
              onClick={() => setCurrentStep("dishes")}
              className="w-full"
              variant="hero"
              size="lg"
            >
              Continue to Dish Selection
            </Button>
          </CardContent>
        </Card>
        <Footer />
      </div>
    );
  }

  if (currentStep === "dishes") {
    return (
      <div className="min-h-screen bg-gradient-warm p-3 md:p-4 safe-area-padding">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          <Card className="shadow-cultural">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Leaf className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
                Select Your Sadhya Dishes
              </CardTitle>
              <CardDescription className="text-sm md:text-base">
                Choose from {basicDishes.length} traditional dishes for {guestCount} guests
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {basicDishes.map((dish) => (
              <Card 
                key={dish.id} 
                className={`cursor-pointer transition-smooth hover:shadow-warm ${
                  selectedDishes.includes(dish.id) 
                    ? 'ring-2 ring-primary bg-primary/5' 
                    : ''
                }`}
                onClick={() => handleDishToggle(dish.id)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0 pr-2">
                      <CardTitle className="text-base md:text-lg truncate">{dish.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {dish.category}
                      </Badge>
                    </div>
                    <Checkbox 
                      checked={selectedDishes.includes(dish.id)}
                      onChange={() => handleDishToggle(dish.id)}
                      className="flex-shrink-0"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3">
                    {dish.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {dish.cookingTime}m
                    </span>
                    <span>{dish.servingSize} per person</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button 
              onClick={() => setCurrentStep("guests")}
              variant="outline"
              size="lg"
            >
              Back
            </Button>
            <Button 
              onClick={() => {
                if (selectedDishes.length === 0) {
                  toast({
                    title: "Please select dishes",
                    description: "Choose at least one dish to continue",
                    variant: "destructive"
                  });
                  return;
                }
                setCurrentStep("timeline");
              }}
              variant="hero"
              size="lg"
              disabled={selectedDishes.length === 0}
            >
              Generate Plan ({selectedDishes.length} dishes)
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (currentStep === "timeline") {
    const shoppingList = generateShoppingList();
    const timeline = generateTimeline();

    return (
      <div className="min-h-screen bg-gradient-warm p-3 md:p-4 safe-area-padding">
        <div className="max-w-6xl mx-auto space-y-4 md:space-y-6">
          <Card className="shadow-cultural">
            <CardHeader>
              <CardTitle className="bg-gradient-hero bg-clip-text text-transparent">
                Your Sadhya Plan
              </CardTitle>
              <CardDescription>
                Complete cooking plan for {guestCount} guests with {selectedDishes.length} dishes
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Shopping List */}
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-accent" />
                  Shopping List
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-64 md:max-h-80 overflow-y-auto">
                  {shoppingList.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 md:p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium text-sm md:text-base truncate pr-2">{item.ingredient}</span>
                      <Badge variant="outline" className="flex-shrink-0 text-xs">{item.quantity}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cooking Timeline */}
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  Cooking Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 md:max-h-80 overflow-y-auto">
                  {timeline.map((item, index) => (
                    <div key={item.id} className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-muted/50 rounded-lg">
                      <Badge variant="secondary" className="min-w-12 md:min-w-16 text-xs">
                        {item.startTime}
                      </Badge>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm md:text-base truncate">{item.name}</p>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          {item.cookingTime} minutes cooking time
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button 
              onClick={() => setCurrentStep("dishes")}
              variant="outline"
              size="lg"
            >
              Modify Dishes
            </Button>
            <Button 
              onClick={() => {
                toast({
                  title: "Plan Generated Successfully!",
                  description: "Your Sadhya plan is ready. Happy cooking!",
                });
              }}
              variant="hero"
              size="lg"
            >
              Start Cooking!
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return null;
}