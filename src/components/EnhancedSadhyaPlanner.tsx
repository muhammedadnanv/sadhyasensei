import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Users, Clock, ShoppingCart, Leaf, Search, Info, Download, Share, Check, CheckCircle2, Printer } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { traditionalDishes, searchDishes, getDishCategories, getIngredientCategories, type SadhyaDish } from "@/data/dishes";
import Footer from "@/components/Footer";

interface ShoppingItem {
  ingredient: string;
  quantity: number;
  unit: string;
  category: string;
}

interface TimelineItem {
  id: string;
  name: string;
  startTime: string;
  duration: number;
  instructions: string[];
  isCompleted: boolean;
  canStartNow: boolean;
}

export default function EnhancedSadhyaPlanner() {
  const [guestCount, setGuestCount] = useState<number>(4);
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<"guests" | "dishes" | "timeline">("guests");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [selectedDishInfo, setSelectedDishInfo] = useState<SadhyaDish | null>(null);
  const { toast } = useToast();

  // Filtered dishes based on search and category
  const filteredDishes = useMemo(() => {
    let dishes = traditionalDishes;
    
    if (searchQuery) {
      dishes = searchDishes(searchQuery);
    }
    
    if (categoryFilter !== "all") {
      dishes = dishes.filter(dish => dish.category === categoryFilter);
    }
    
    return dishes;
  }, [searchQuery, categoryFilter]);

  const handleDishToggle = (dishId: string) => {
    setSelectedDishes(prev => 
      prev.includes(dishId) 
        ? prev.filter(id => id !== dishId)
        : [...prev, dishId]
    );
  };

  const generateShoppingList = (): ShoppingItem[] => {
    const ingredientMap = new Map<string, ShoppingItem>();
    
    selectedDishes.forEach(dishId => {
      const dish = traditionalDishes.find(d => d.id === dishId);
      if (dish) {
        dish.ingredients.forEach(ingredient => {
          const key = ingredient.name.toLowerCase();
          if (ingredientMap.has(key)) {
            const existing = ingredientMap.get(key)!;
            existing.quantity += ingredient.quantity * guestCount;
          } else {
            ingredientMap.set(key, {
              ingredient: ingredient.name,
              quantity: ingredient.quantity * guestCount,
              unit: ingredient.unit,
              category: ingredient.category
            });
          }
        });
      }
    });

    return Array.from(ingredientMap.values()).sort((a, b) => a.category.localeCompare(b.category));
  };

  const generateTimeline = (): TimelineItem[] => {
    const selectedDishDetails = traditionalDishes.filter(dish => 
      selectedDishes.includes(dish.id)
    );

    const timeline: TimelineItem[] = [];
    let currentTime = 8 * 60; // Start at 8:00 AM in minutes

    // Sort by preparation complexity and cooking time
    const sortedDishes = selectedDishDetails.sort((a, b) => {
      const aComplexity = (a.soakingTime || 0) + a.preparationTime + a.cookingTime;
      const bComplexity = (b.soakingTime || 0) + b.preparationTime + b.cookingTime;
      return bComplexity - aComplexity;
    });

    sortedDishes.forEach((dish, index) => {
      // Add soaking time if needed
      if (dish.soakingTime) {
        const soakTime = currentTime - dish.soakingTime;
        timeline.push({
          id: `${dish.id}-soak`,
          name: `Soak ingredients for ${dish.name}`,
          startTime: formatTime(soakTime),
          duration: dish.soakingTime,
          instructions: [`Soak ${dish.ingredients.filter(ing => ['lentils', 'grains'].includes(ing.category)).map(ing => ing.name).join(', ')} for ${dish.name}`],
          isCompleted: false,
          canStartNow: true
        });
      }

      // Add preparation task
      timeline.push({
        id: `${dish.id}-prep`,
        name: `Prepare ${dish.name}`,
        startTime: formatTime(currentTime - dish.preparationTime - dish.cookingTime),
        duration: dish.preparationTime,
        instructions: [`Prepare ingredients for ${dish.name}`, ...dish.instructions.slice(0, 2)],
        isCompleted: false,
        canStartNow: false
      });

      // Add cooking task
      timeline.push({
        id: `${dish.id}-cook`,
        name: `Cook ${dish.name}`,
        startTime: formatTime(currentTime - dish.cookingTime),
        duration: dish.cookingTime,
        instructions: dish.instructions,
        isCompleted: false,
        canStartNow: false
      });

      currentTime -= 15; // Stagger start times
    });

    return timeline.sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));
  };

  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${displayHour}:${mins.toString().padStart(2, '0')} ${period}`;
  };

  const timeToMinutes = (timeStr: string): number => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;
    if (period === 'PM' && hours !== 12) totalMinutes += 12 * 60;
    if (period === 'AM' && hours === 12) totalMinutes -= 12 * 60;
    return totalMinutes;
  };

  const toggleTaskCompletion = (taskId: string) => {
    setCompletedTasks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });
  };

  const exportShoppingList = () => {
    const shoppingList = generateShoppingList();
    const categorizedList = getIngredientCategories().map(category => ({
      category: category.charAt(0).toUpperCase() + category.slice(1),
      items: shoppingList.filter(item => item.category === category)
    })).filter(section => section.items.length > 0);

    const listText = categorizedList.map(section => 
      `${section.category}:\n${section.items.map(item => 
        `  • ${item.ingredient} - ${item.quantity}${item.unit}`
      ).join('\n')}`
    ).join('\n\n');

    const blob = new Blob([`Sadhya Shopping List for ${guestCount} guests\n\n${listText}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sadhya-shopping-list.txt';
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Shopping list downloaded!",
      description: "Your shopping list has been saved as a text file.",
    });
  };

  const shareShoppingList = async () => {
    const shoppingList = generateShoppingList();
    const listText = shoppingList.map(item => 
      `${item.ingredient} - ${item.quantity}${item.unit}`
    ).join('\n');

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Sadhya Shopping List',
          text: `Shopping list for ${guestCount} guests:\n\n${listText}`,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(`Shopping list for ${guestCount} guests:\n\n${listText}`);
      toast({
        title: "Copied to clipboard!",
        description: "Shopping list copied. You can paste it in WhatsApp or any messaging app.",
      });
    }
  };

  const printTimeline = () => {
    const timeline = generateTimeline();
    const timelineHtml = `
      <html>
        <head>
          <title>Sadhya Cooking Timeline</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #D69E2E; }
            .task { margin-bottom: 15px; border-left: 3px solid #D69E2E; padding-left: 10px; }
            .time { font-weight: bold; color: #2D5016; }
            .instructions { margin-top: 5px; font-size: 14px; }
            input[type="checkbox"] { margin-right: 8px; }
          </style>
        </head>
        <body>
          <h1>Sadhya Cooking Timeline - ${guestCount} Guests</h1>
          ${timeline.map(task => `
            <div class="task">
              <input type="checkbox" /> 
              <span class="time">${task.startTime}</span> - ${task.name}
              <div class="instructions">${task.instructions.join('<br>')}</div>
            </div>
          `).join('')}
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(timelineHtml);
      printWindow.document.close();
      printWindow.print();
    }
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
              Your ultimate digital assistant for planning the perfect Onam Sadhya
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <Users className="mx-auto h-12 w-12 text-primary mb-4" />
              <Label htmlFor="guests" className="text-lg font-medium">
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
                className="text-center text-xl h-14 touch-target"
              />
              <p className="text-sm text-muted-foreground text-center">
                Enter the number of people (including yourself)
              </p>
            </div>
            <Button 
              onClick={() => setCurrentStep("dishes")}
              className="w-full touch-target"
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
        <div className="max-w-6xl mx-auto space-y-4 md:space-y-6">
          <Card className="shadow-cultural">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Leaf className="h-6 w-6 text-secondary" />
                Select Your Sadhya Dishes
              </CardTitle>
              <CardDescription>
                Choose from {traditionalDishes.length} traditional dishes for {guestCount} guests
              </CardDescription>
              
              {/* Search and Filter Controls */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search dishes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {getDishCategories().map(category => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {filteredDishes.map((dish) => (
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
                      <p className="text-xs text-muted-foreground truncate">{dish.malayalamName}</p>
                      <Badge variant="secondary" className="mt-1">
                        {dish.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedDishInfo(dish);
                            }}
                            className="h-8 w-8 p-0"
                          >
                            <Info className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{dish.name} ({dish.malayalamName})</DialogTitle>
                            <DialogDescription>{dish.description}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Ingredients:</h4>
                              <ul className="text-sm space-y-1">
                                {dish.ingredients.map((ing, index) => (
                                  <li key={index}>• {ing.name} - {ing.quantity * guestCount}{ing.unit}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <strong>Prep Time:</strong> {dish.preparationTime} min
                              </div>
                              <div>
                                <strong>Cook Time:</strong> {dish.cookingTime} min
                              </div>
                              <div>
                                <strong>Difficulty:</strong> {dish.difficulty}
                              </div>
                              <div>
                                <strong>Serving:</strong> {dish.servingSize}
                              </div>
                            </div>
                            {dish.tips.length > 0 && (
                              <div>
                                <h4 className="font-semibold mb-2">Tips:</h4>
                                <ul className="text-sm space-y-1">
                                  {dish.tips.map((tip, index) => (
                                    <li key={index}>• {tip}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Checkbox 
                        checked={selectedDishes.includes(dish.id)}
                        onChange={() => handleDishToggle(dish.id)}
                        className="flex-shrink-0"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {dish.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {dish.cookingTime}m
                    </span>
                    <span>{dish.servingSize} per person</span>
                    <Badge variant={dish.difficulty === 'easy' ? 'default' : dish.difficulty === 'medium' ? 'secondary' : 'destructive'} className="text-xs">
                      {dish.difficulty}
                    </Badge>
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
              className="touch-target"
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
              className="touch-target"
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
    const completedTasksCount = timeline.filter(task => completedTasks.has(task.id)).length;
    const progressPercentage = timeline.length > 0 ? (completedTasksCount / timeline.length) * 100 : 0;

    // Group shopping list by category
    const categorizedShoppingList = getIngredientCategories().map(category => ({
      category: category.charAt(0).toUpperCase() + category.slice(1),
      items: shoppingList.filter(item => item.category === category)
    })).filter(section => section.items.length > 0);

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
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">{completedTasksCount}/{timeline.length} tasks</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
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
                <div className="flex gap-2">
                  <Button 
                    onClick={exportShoppingList}
                    variant="outline" 
                    size="sm"
                    className="touch-target"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button 
                    onClick={shareShoppingList}
                    variant="outline" 
                    size="sm"
                    className="touch-target"
                  >
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-64 md:max-h-80 overflow-y-auto smooth-scroll">
                  {categorizedShoppingList.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h4 className="font-semibold text-secondary mb-2">{section.category}</h4>
                      <div className="space-y-1 mb-3">
                        {section.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-2 bg-muted/50 rounded-lg">
                            <span className="font-medium text-sm truncate pr-2">{item.ingredient}</span>
                            <Badge variant="outline" className="flex-shrink-0 text-xs">
                              {item.quantity}{item.unit}
                            </Badge>
                          </div>
                        ))}
                      </div>
                      {sectionIndex < categorizedShoppingList.length - 1 && <Separator />}
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
                <Button 
                  onClick={printTimeline}
                  variant="outline" 
                  size="sm"
                  className="touch-target w-fit"
                >
                  <Printer className="h-4 w-4 mr-2" />
                  Print Kitchen Version
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 md:max-h-80 overflow-y-auto smooth-scroll">
                  {timeline.map((task) => (
                    <div 
                      key={task.id} 
                      className={`flex items-start gap-3 p-3 bg-muted/50 rounded-lg ${
                        completedTasks.has(task.id) ? 'opacity-60 bg-green-50' : ''
                      }`}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleTaskCompletion(task.id)}
                        className="mt-1 h-6 w-6 p-0 flex-shrink-0"
                      >
                        {completedTasks.has(task.id) ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <div className="h-4 w-4 border-2 border-muted-foreground rounded" />
                        )}
                      </Button>
                      <Badge variant="secondary" className="min-w-16 text-xs flex-shrink-0 mt-1">
                        {task.startTime}
                      </Badge>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium text-sm truncate ${
                          completedTasks.has(task.id) ? 'line-through text-muted-foreground' : ''
                        }`}>
                          {task.name}
                        </p>
                        <p className="text-xs text-muted-foreground mb-1">
                          Duration: {task.duration} minutes
                        </p>
                        <div className="text-xs text-muted-foreground space-y-1">
                          {task.instructions.slice(0, 2).map((instruction, index) => (
                            <p key={index}>• {instruction}</p>
                          ))}
                        </div>
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
              className="touch-target"
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
              className="touch-target"
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