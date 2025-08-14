import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info, Leaf } from "lucide-react";

const leafPlacement = [
  {
    position: "top-left",
    items: ["Pickle", "Lime/Lemon"],
    description: "Pickles and citrus items",
    color: "accent"
  },
  {
    position: "top-center", 
    items: ["Pappadam", "Banana Chips"],
    description: "Crispy accompaniments",
    color: "secondary"
  },
  {
    position: "top-right",
    items: ["Jaggery", "Banana"],
    description: "Sweet items and fruits",
    color: "primary"
  },
  {
    position: "left",
    items: ["Sambar", "Rasam"],
    description: "Liquid curries",
    color: "destructive"
  },
  {
    position: "center",
    items: ["Rice"],
    description: "Main rice serving",
    color: "muted"
  },
  {
    position: "right",
    items: ["Avial", "Thoran", "Olan"],
    description: "Vegetable preparations",
    color: "secondary"
  },
  {
    position: "bottom-left",
    items: ["Pachadi", "Kichadi"],
    description: "Yogurt-based curries",
    color: "accent"
  },
  {
    position: "bottom-center",
    items: ["Salt", "Ghee"],
    description: "Essential condiments",
    color: "muted"
  },
  {
    position: "bottom-right",
    items: ["Payasam"],
    description: "Sweet dessert",
    color: "primary"
  }
];

interface BananaLeafGuideProps {
  onClose: () => void;
}

export default function BananaLeafGuide({ onClose }: BananaLeafGuideProps) {
  return (
    <div className="min-h-screen bg-gradient-warm p-3 md:p-4 safe-area-padding">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
        <Card className="shadow-cultural">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <Leaf className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
              Banana Leaf Arrangement Guide
            </CardTitle>
            <CardDescription className="text-sm md:text-base">
              Traditional placement of Sadhya items on the banana leaf
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Visual Guide */}
        <Card className="shadow-warm">
          <CardContent className="p-4 md:p-8">
            <div className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-4 md:p-8 border-4 border-green-300">
              {/* Banana Leaf Shape */}
              <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-4 h-64 md:h-96">
                {leafPlacement.map((section, index) => (
                  <div
                    key={index}
                    className={`
                      flex flex-col items-center justify-center p-2 md:p-4 rounded-xl
                      bg-white/80 border-2 border-dashed border-gray-300
                      hover:bg-white/90 transition-smooth cursor-pointer
                      ${section.position === 'center' ? 'col-start-2 row-start-2 bg-yellow-50/90' : ''}
                    `}
                  >
                    <div className="text-center space-y-1 md:space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <Badge 
                          key={itemIndex} 
                          variant="outline"
                          className="text-xs block mb-1"
                        >
                          {item}
                        </Badge>
                      ))}
                      <p className="text-xs text-muted-foreground mt-2">
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Leaf veins decoration */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-20" viewBox="0 0 400 300">
                  <path
                    d="M50 150 Q200 50 350 150 Q200 250 50 150"
                    stroke="green"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M100 150 L300 150"
                    stroke="green"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M150 120 L200 150 L150 180"
                    stroke="green"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M250 120 L200 150 L250 180"
                    stroke="green"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cultural Instructions */}
        <Card className="shadow-warm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-accent" />
              Cultural Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Serving Order:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Start with rice in the center</li>
                  <li>• Serve sambar and rasam on the left</li>
                  <li>• Add vegetables on the right side</li>
                  <li>• Place pickles and accompaniments at top</li>
                  <li>• End with payasam for dessert</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Traditions:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Banana leaf should be placed with tip pointing left</li>
                  <li>• Always wash hands before eating</li>
                  <li>• Eat with right hand only</li>
                  <li>• Mix rice with different curries</li>
                  <li>• Finish with payasam and banana</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button 
            onClick={onClose}
            variant="hero"
            size="lg"
          >
            Back to Planner
          </Button>
        </div>
      </div>
    </div>
  );
}