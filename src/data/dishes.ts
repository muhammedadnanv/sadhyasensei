// Traditional Sadhya dishes database with comprehensive information
export interface SadhyaDish {
  id: string;
  name: string;
  malayalamName: string;
  description: string;
  category: "main" | "curry" | "vegetable" | "rice" | "accompaniment" | "dessert" | "side";
  ingredients: { name: string; quantity: number; unit: string; category: "vegetables" | "spices" | "lentils" | "dairy" | "grains" | "oil" | "other" }[];
  cookingTime: number;
  servingSize: string;
  difficulty: "easy" | "medium" | "hard";
  preparationTime: number;
  soakingTime?: number;
  imageUrl?: string;
  instructions: string[];
  tips: string[];
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export const traditionalDishes: SadhyaDish[] = [
  {
    id: "rice",
    name: "Rice",
    malayalamName: "Choru",
    description: "The foundation of Sadhya, perfectly steamed rice served in the center of the banana leaf",
    category: "main",
    ingredients: [
      { name: "Basmati rice", quantity: 150, unit: "g", category: "grains" },
      { name: "Water", quantity: 300, unit: "ml", category: "other" },
      { name: "Salt", quantity: 1, unit: "tsp", category: "spices" }
    ],
    cookingTime: 25,
    preparationTime: 5,
    servingSize: "150g",
    difficulty: "easy",
    instructions: [
      "Wash rice thoroughly until water runs clear",
      "Boil water with salt in a heavy-bottomed pot",
      "Add rice and cook covered for 18-20 minutes",
      "Let it rest for 5 minutes before serving"
    ],
    tips: ["Use aged rice for better texture", "Maintain 1:2 rice to water ratio"]
  },
  {
    id: "sambar",
    name: "Sambar",
    malayalamName: "Sambar",
    description: "Tangy lentil curry with vegetables, the soul of any South Indian meal",
    category: "curry",
    ingredients: [
      { name: "Toor dal", quantity: 100, unit: "g", category: "lentils" },
      { name: "Drumstick", quantity: 2, unit: "pieces", category: "vegetables" },
      { name: "Brinjal", quantity: 1, unit: "medium", category: "vegetables" },
      { name: "Okra", quantity: 100, unit: "g", category: "vegetables" },
      { name: "Tomato", quantity: 2, unit: "medium", category: "vegetables" },
      { name: "Tamarind", quantity: 30, unit: "g", category: "other" },
      { name: "Sambar powder", quantity: 2, unit: "tbsp", category: "spices" },
      { name: "Turmeric powder", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Curry leaves", quantity: 10, unit: "leaves", category: "other" },
      { name: "Coconut oil", quantity: 2, unit: "tbsp", category: "oil" }
    ],
    cookingTime: 45,
    preparationTime: 20,
    soakingTime: 30,
    servingSize: "100ml",
    difficulty: "medium",
    instructions: [
      "Soak toor dal for 30 minutes, then pressure cook",
      "Extract tamarind juice and set aside",
      "Cut vegetables into uniform pieces",
      "Cook vegetables with turmeric and salt",
      "Combine dal, vegetables, and tamarind juice",
      "Add sambar powder and simmer for 15 minutes",
      "Temper with curry leaves and pour over sambar"
    ],
    tips: ["Fresh sambar powder makes a huge difference", "Don't overcook vegetables"]
  },
  {
    id: "rasam",
    name: "Rasam",
    malayalamName: "Rasam",
    description: "Spicy and tangy soup with tomatoes and aromatic spices, perfect digestive",
    category: "curry",
    ingredients: [
      { name: "Tomato", quantity: 3, unit: "medium", category: "vegetables" },
      { name: "Tamarind", quantity: 20, unit: "g", category: "other" },
      { name: "Turmeric powder", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Cumin seeds", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Black pepper", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Curry leaves", quantity: 15, unit: "leaves", category: "other" },
      { name: "Coriander seeds", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Ghee", quantity: 2, unit: "tbsp", category: "dairy" },
      { name: "Asafoetida", quantity: 0.25, unit: "tsp", category: "spices" }
    ],
    cookingTime: 30,
    preparationTime: 15,
    servingSize: "80ml",
    difficulty: "medium",
    instructions: [
      "Extract tamarind juice and set aside",
      "Crush tomatoes and cook until mushy",
      "Dry roast and grind cumin, pepper, coriander",
      "Add tamarind juice, spices to tomatoes",
      "Boil and simmer for 10 minutes",
      "Temper with ghee, curry leaves, and asafoetida"
    ],
    tips: ["Freshly ground spices enhance flavor", "Adjust consistency with water"]
  },
  {
    id: "avial",
    name: "Avial",
    malayalamName: "Aviyal",
    description: "Mixed vegetables cooked in coconut and curry leaves, a Kerala specialty",
    category: "vegetable",
    ingredients: [
      { name: "Mixed vegetables", quantity: 500, unit: "g", category: "vegetables" },
      { name: "Coconut", quantity: 0.5, unit: "cup", category: "other" },
      { name: "Green chili", quantity: 3, unit: "pieces", category: "vegetables" },
      { name: "Curry leaves", quantity: 20, unit: "leaves", category: "other" },
      { name: "Coconut oil", quantity: 2, unit: "tbsp", category: "oil" },
      { name: "Turmeric powder", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Salt", quantity: 1, unit: "tsp", category: "spices" }
    ],
    cookingTime: 35,
    preparationTime: 25,
    servingSize: "80g",
    difficulty: "medium",
    instructions: [
      "Cut vegetables into thick strips",
      "Grind coconut with green chilies",
      "Cook vegetables with turmeric and salt",
      "Add coconut paste and mix gently",
      "Garnish with curry leaves and coconut oil"
    ],
    tips: ["Don't overcook vegetables", "Use minimal water for cooking"]
  },
  {
    id: "thoran",
    name: "Thoran",
    malayalamName: "Thoran",
    description: "Dry vegetable stir-fry with grated coconut, a traditional Kerala preparation",
    category: "vegetable",
    ingredients: [
      { name: "Cabbage", quantity: 300, unit: "g", category: "vegetables" },
      { name: "Coconut", quantity: 0.75, unit: "cup", category: "other" },
      { name: "Turmeric powder", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Curry leaves", quantity: 15, unit: "leaves", category: "other" },
      { name: "Mustard seeds", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Coconut oil", quantity: 2, unit: "tbsp", category: "oil" },
      { name: "Green chili", quantity: 2, unit: "pieces", category: "vegetables" },
      { name: "Shallots", quantity: 3, unit: "small", category: "vegetables" }
    ],
    cookingTime: 20,
    preparationTime: 15,
    servingSize: "60g",
    difficulty: "easy",
    instructions: [
      "Finely chop cabbage and shallots",
      "Grate coconut and mix with turmeric",
      "Heat oil, add mustard seeds",
      "Add shallots, green chili, curry leaves",
      "Add cabbage and cook until tender",
      "Mix in grated coconut and cook for 2 minutes"
    ],
    tips: ["Keep the heat high for dry texture", "Fresh coconut is essential"]
  },
  {
    id: "olan",
    name: "Olan",
    malayalamName: "Olan",
    description: "Pumpkin and black-eyed peas in coconut milk, a mild and creamy dish",
    category: "vegetable",
    ingredients: [
      { name: "Pumpkin", quantity: 300, unit: "g", category: "vegetables" },
      { name: "Black-eyed peas", quantity: 100, unit: "g", category: "lentils" },
      { name: "Coconut milk", quantity: 200, unit: "ml", category: "dairy" },
      { name: "Curry leaves", quantity: 10, unit: "leaves", category: "other" },
      { name: "Green chili", quantity: 2, unit: "pieces", category: "vegetables" },
      { name: "Salt", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Coconut oil", quantity: 1, unit: "tbsp", category: "oil" }
    ],
    cookingTime: 25,
    preparationTime: 10,
    soakingTime: 480,
    servingSize: "70g",
    difficulty: "easy",
    instructions: [
      "Soak black-eyed peas overnight",
      "Cook peas until tender",
      "Cut pumpkin into strips",
      "Cook pumpkin with green chili and salt",
      "Add cooked peas and coconut milk",
      "Simmer for 5 minutes, garnish with curry leaves"
    ],
    tips: ["Don't boil after adding coconut milk", "Pumpkin should retain some bite"]
  },
  {
    id: "pachadi",
    name: "Pachadi",
    malayalamName: "Pachadi",
    description: "Sweet and sour vegetable curry with yogurt and coconut",
    category: "curry",
    ingredients: [
      { name: "Pineapple", quantity: 200, unit: "g", category: "vegetables" },
      { name: "Yogurt", quantity: 150, unit: "ml", category: "dairy" },
      { name: "Coconut", quantity: 0.5, unit: "cup", category: "other" },
      { name: "Green chili", quantity: 2, unit: "pieces", category: "vegetables" },
      { name: "Ginger", quantity: 1, unit: "inch", category: "spices" },
      { name: "Mustard seeds", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Coconut oil", quantity: 1, unit: "tbsp", category: "oil" },
      { name: "Jaggery", quantity: 1, unit: "tbsp", category: "other" }
    ],
    cookingTime: 15,
    preparationTime: 10,
    servingSize: "50g",
    difficulty: "easy",
    instructions: [
      "Cut pineapple into small pieces",
      "Grind coconut with green chili and ginger",
      "Cook pineapple with jaggery until soft",
      "Add coconut paste and cook for 3 minutes",
      "Cool and mix in yogurt",
      "Temper with mustard seeds in coconut oil"
    ],
    tips: ["Add yogurt only after cooling", "Balance sweet and sour flavors"]
  },
  {
    id: "kichadi",
    name: "Kichadi",
    malayalamName: "Kichadi",
    description: "Cucumber or vegetable curry with coconut and yogurt, cooling and refreshing",
    category: "curry",
    ingredients: [
      { name: "Cucumber", quantity: 300, unit: "g", category: "vegetables" },
      { name: "Yogurt", quantity: 200, unit: "ml", category: "dairy" },
      { name: "Coconut", quantity: 0.5, unit: "cup", category: "other" },
      { name: "Green chili", quantity: 2, unit: "pieces", category: "vegetables" },
      { name: "Mustard seeds", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Coconut oil", quantity: 1, unit: "tbsp", category: "oil" },
      { name: "Curry leaves", quantity: 8, unit: "leaves", category: "other" }
    ],
    cookingTime: 15,
    preparationTime: 10,
    servingSize: "50g",
    difficulty: "easy",
    instructions: [
      "Peel and dice cucumber",
      "Grind coconut with green chili",
      "Cook cucumber until tender",
      "Add coconut paste and cook for 2 minutes",
      "Cool completely and mix in yogurt",
      "Temper with mustard seeds and curry leaves"
    ],
    tips: ["Don't overcook cucumber", "Serve chilled for best taste"]
  },
  {
    id: "payasam",
    name: "Payasam",
    malayalamName: "Payasam",
    description: "Sweet dessert made with milk, jaggery and rice or vermicelli",
    category: "dessert",
    ingredients: [
      { name: "Rice", quantity: 50, unit: "g", category: "grains" },
      { name: "Milk", quantity: 500, unit: "ml", category: "dairy" },
      { name: "Jaggery", quantity: 100, unit: "g", category: "other" },
      { name: "Cardamom", quantity: 4, unit: "pods", category: "spices" },
      { name: "Cashews", quantity: 15, unit: "pieces", category: "other" },
      { name: "Raisins", quantity: 15, unit: "pieces", category: "other" },
      { name: "Ghee", quantity: 2, unit: "tbsp", category: "dairy" }
    ],
    cookingTime: 40,
    preparationTime: 10,
    servingSize: "100ml",
    difficulty: "medium",
    instructions: [
      "Cook rice in milk until soft and creamy",
      "Dissolve jaggery in little water and strain",
      "Add jaggery syrup to rice mixture",
      "Add crushed cardamom and simmer",
      "Fry cashews and raisins in ghee",
      "Garnish payasam with fried nuts"
    ],
    tips: ["Stir continuously to prevent burning", "Consistency should coat the spoon"]
  },
  {
    id: "pickle",
    name: "Pickle",
    malayalamName: "Achar",
    description: "Spicy and tangy mango or lime pickle, essential for authentic flavor",
    category: "accompaniment",
    ingredients: [
      { name: "Raw mango", quantity: 300, unit: "g", category: "vegetables" },
      { name: "Red chili powder", quantity: 2, unit: "tbsp", category: "spices" },
      { name: "Turmeric powder", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Salt", quantity: 2, unit: "tbsp", category: "spices" },
      { name: "Gingelly oil", quantity: 4, unit: "tbsp", category: "oil" },
      { name: "Mustard seeds", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Fenugreek seeds", quantity: 0.5, unit: "tsp", category: "spices" }
    ],
    cookingTime: 10,
    preparationTime: 20,
    servingSize: "15g",
    difficulty: "easy",
    instructions: [
      "Cut mango into small pieces",
      "Mix with salt and let it rest for 2 hours",
      "Drain excess water completely",
      "Mix with chili powder and turmeric",
      "Heat oil, add mustard and fenugreek seeds",
      "Pour hot oil over mango mixture"
    ],
    tips: ["Ensure mangoes are completely dry", "Store in clean, dry containers"]
  },
  // Additional dishes to reach 26+
  {
    id: "parippu",
    name: "Parippu",
    malayalamName: "Parippu",
    description: "Simple yet flavorful dal preparation, comfort food at its best",
    category: "curry",
    ingredients: [
      { name: "Moong dal", quantity: 100, unit: "g", category: "lentils" },
      { name: "Turmeric powder", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Coconut oil", quantity: 2, unit: "tbsp", category: "oil" },
      { name: "Mustard seeds", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Curry leaves", quantity: 10, unit: "leaves", category: "other" },
      { name: "Red chili", quantity: 2, unit: "pieces", category: "spices" },
      { name: "Shallots", quantity: 3, unit: "small", category: "vegetables" }
    ],
    cookingTime: 25,
    preparationTime: 5,
    servingSize: "80ml",
    difficulty: "easy",
    instructions: [
      "Wash and cook dal with turmeric until soft",
      "Mash slightly and adjust consistency",
      "Heat oil, add mustard seeds",
      "Add curry leaves, red chili, shallots",
      "Pour tempering over cooked dal"
    ],
    tips: ["Don't overcook dal", "Consistency should be like soup"]
  },
  {
    id: "kalan",
    name: "Kalan",
    malayalamName: "Kalan",
    description: "Yam and plantain curry in coconut milk, rich and creamy",
    category: "vegetable",
    ingredients: [
      { name: "Yam", quantity: 200, unit: "g", category: "vegetables" },
      { name: "Raw banana", quantity: 1, unit: "medium", category: "vegetables" },
      { name: "Coconut milk", quantity: 200, unit: "ml", category: "dairy" },
      { name: "Yogurt", quantity: 100, unit: "ml", category: "dairy" },
      { name: "Green chili", quantity: 3, unit: "pieces", category: "vegetables" },
      { name: "Turmeric powder", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Coconut oil", quantity: 2, unit: "tbsp", category: "oil" },
      { name: "Curry leaves", quantity: 12, unit: "leaves", category: "other" }
    ],
    cookingTime: 30,
    preparationTime: 15,
    servingSize: "80g",
    difficulty: "medium",
    instructions: [
      "Cut yam and banana into thick pieces",
      "Cook with turmeric, salt and green chili",
      "Add coconut milk and simmer",
      "Cool slightly and add whisked yogurt",
      "Temper with curry leaves and coconut oil"
    ],
    tips: ["Handle yam with care to avoid itching", "Don't boil after adding yogurt"]
  },
  {
    id: "pulissery",
    name: "Pulissery",
    malayalamName: "Pulissery",
    description: "Tangy curry with coconut and yogurt, perfect balance of flavors",
    category: "curry",
    ingredients: [
      { name: "Pumpkin", quantity: 250, unit: "g", category: "vegetables" },
      { name: "Coconut", quantity: 0.75, unit: "cup", category: "other" },
      { name: "Yogurt", quantity: 200, unit: "ml", category: "dairy" },
      { name: "Green chili", quantity: 3, unit: "pieces", category: "vegetables" },
      { name: "Turmeric powder", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Coconut oil", quantity: 2, unit: "tbsp", category: "oil" },
      { name: "Mustard seeds", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Curry leaves", quantity: 10, unit: "leaves", category: "other" }
    ],
    cookingTime: 20,
    preparationTime: 15,
    servingSize: "70ml",
    difficulty: "medium",
    instructions: [
      "Cut pumpkin into small cubes",
      "Grind coconut with green chili",
      "Cook pumpkin with turmeric until tender",
      "Add coconut paste and cook for 3 minutes",
      "Cool and mix in yogurt",
      "Temper with mustard seeds and curry leaves"
    ],
    tips: ["Add yogurt only after cooling", "Adjust tanginess with yogurt quantity"]
  },
  {
    id: "erissery",
    name: "Erissery",
    malayalamName: "Erissery",
    description: "Pumpkin and lentil curry with coconut, hearty and nutritious",
    category: "vegetable",
    ingredients: [
      { name: "Pumpkin", quantity: 300, unit: "g", category: "vegetables" },
      { name: "Chana dal", quantity: 50, unit: "g", category: "lentils" },
      { name: "Coconut", quantity: 0.5, unit: "cup", category: "other" },
      { name: "Turmeric powder", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Red chili", quantity: 2, unit: "pieces", category: "spices" },
      { name: "Coconut oil", quantity: 2, unit: "tbsp", category: "oil" },
      { name: "Mustard seeds", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Curry leaves", quantity: 10, unit: "leaves", category: "other" }
    ],
    cookingTime: 25,
    preparationTime: 10,
    soakingTime: 30,
    servingSize: "75g",
    difficulty: "easy",
    instructions: [
      "Soak chana dal for 30 minutes",
      "Cook dal until soft",
      "Cut pumpkin and cook with turmeric",
      "Grind coconut with red chili",
      "Mix pumpkin, dal, and coconut paste",
      "Temper with mustard seeds and curry leaves"
    ],
    tips: ["Dal should be soft but not mushy", "Adjust consistency with water"]
  },
  {
    id: "upperi",
    name: "Upperi",
    malayalamName: "Upperi",
    description: "Crispy banana chips, the perfect crunchy accompaniment",
    category: "side",
    ingredients: [
      { name: "Raw banana", quantity: 2, unit: "large", category: "vegetables" },
      { name: "Coconut oil", quantity: 200, unit: "ml", category: "oil" },
      { name: "Salt", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Turmeric powder", quantity: 0.25, unit: "tsp", category: "spices" }
    ],
    cookingTime: 20,
    preparationTime: 15,
    servingSize: "30g",
    difficulty: "medium",
    instructions: [
      "Peel and slice bananas thinly",
      "Sprinkle salt and turmeric",
      "Heat oil in a heavy-bottomed pan",
      "Deep fry slices until golden and crispy",
      "Drain on paper towels"
    ],
    tips: ["Slice uniformly for even cooking", "Oil temperature is crucial"]
  },
  {
    id: "sarkaravaratti",
    name: "Sarkaravaratti",
    malayalamName: "Sarkaravaratti",
    description: "Sweet banana chips with jaggery coating, irresistible treat",
    category: "side",
    ingredients: [
      { name: "Ripe banana", quantity: 2, unit: "medium", category: "vegetables" },
      { name: "Jaggery", quantity: 100, unit: "g", category: "other" },
      { name: "Coconut oil", quantity: 150, unit: "ml", category: "oil" },
      { name: "Cardamom powder", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Ginger powder", quantity: 0.25, unit: "tsp", category: "spices" }
    ],
    cookingTime: 25,
    preparationTime: 10,
    servingSize: "25g",
    difficulty: "medium",
    instructions: [
      "Slice bananas lengthwise",
      "Deep fry until golden",
      "Make jaggery syrup with cardamom and ginger",
      "Coat fried bananas with syrup",
      "Cool until crispy"
    ],
    tips: ["Jaggery syrup consistency is key", "Work quickly while syrup is hot"]
  },
  {
    id: "inji_puli",
    name: "Inji Puli",
    malayalamName: "Inji Puli",
    description: "Sweet and sour ginger tamarind curry, appetizing and digestive",
    category: "curry",
    ingredients: [
      { name: "Ginger", quantity: 100, unit: "g", category: "spices" },
      { name: "Tamarind", quantity: 50, unit: "g", category: "other" },
      { name: "Jaggery", quantity: 100, unit: "g", category: "other" },
      { name: "Green chili", quantity: 4, unit: "pieces", category: "vegetables" },
      { name: "Red chili powder", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Turmeric powder", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Coconut oil", quantity: 2, unit: "tbsp", category: "oil" },
      { name: "Curry leaves", quantity: 10, unit: "leaves", category: "other" }
    ],
    cookingTime: 20,
    preparationTime: 15,
    servingSize: "40g",
    difficulty: "easy",
    instructions: [
      "Julienne ginger finely",
      "Extract thick tamarind juice",
      "Cook ginger in tamarind juice",
      "Add jaggery and spices",
      "Cook until thick and glossy",
      "Temper with curry leaves"
    ],
    tips: ["Balance sweet, sour, and spicy flavors", "Store in refrigerator"]
  },
  {
    id: "pappadam",
    name: "Pappadam",
    malayalamName: "Pappadam",
    description: "Crispy lentil wafers, essential accompaniment for every meal",
    category: "side",
    ingredients: [
      { name: "Pappadam", quantity: 4, unit: "pieces", category: "other" },
      { name: "Coconut oil", quantity: 100, unit: "ml", category: "oil" }
    ],
    cookingTime: 5,
    preparationTime: 2,
    servingSize: "1 piece",
    difficulty: "easy",
    instructions: [
      "Heat oil in a pan",
      "Fry pappadam one by one",
      "Turn once to cook both sides",
      "Drain excess oil"
    ],
    tips: ["Oil should be hot but not smoking", "Fry until bubbles stop forming"]
  },
  {
    id: "coconut_rice",
    name: "Coconut Rice",
    malayalamName: "Thenga Choru",
    description: "Fragrant rice cooked with coconut milk, rich and aromatic",
    category: "rice",
    ingredients: [
      { name: "Basmati rice", quantity: 150, unit: "g", category: "grains" },
      { name: "Coconut milk", quantity: 200, unit: "ml", category: "dairy" },
      { name: "Water", quantity: 100, unit: "ml", category: "other" },
      { name: "Salt", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Curry leaves", quantity: 8, unit: "leaves", category: "other" },
      { name: "Coconut oil", quantity: 1, unit: "tbsp", category: "oil" }
    ],
    cookingTime: 25,
    preparationTime: 5,
    servingSize: "150g",
    difficulty: "easy",
    instructions: [
      "Wash rice thoroughly",
      "Combine coconut milk and water",
      "Cook rice in coconut milk mixture",
      "Add salt and curry leaves",
      "Finish with coconut oil"
    ],
    tips: ["Don't boil coconut milk vigorously", "Let it rest after cooking"]
  },
  {
    id: "manga_curry",
    name: "Manga Curry",
    malayalamName: "Manga Curry",
    description: "Raw mango curry with coconut, tangy and refreshing summer special",
    category: "curry",
    ingredients: [
      { name: "Raw mango", quantity: 300, unit: "g", category: "vegetables" },
      { name: "Coconut", quantity: 0.5, unit: "cup", category: "other" },
      { name: "Green chili", quantity: 3, unit: "pieces", category: "vegetables" },
      { name: "Turmeric powder", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Coconut oil", quantity: 2, unit: "tbsp", category: "oil" },
      { name: "Mustard seeds", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Curry leaves", quantity: 10, unit: "leaves", category: "other" }
    ],
    cookingTime: 15,
    preparationTime: 10,
    servingSize: "60ml",
    difficulty: "easy",
    instructions: [
      "Cut mango into small pieces",
      "Grind coconut with green chili",
      "Cook mango with turmeric until tender",
      "Add coconut paste and cook for 3 minutes",
      "Temper with mustard seeds and curry leaves"
    ],
    tips: ["Choose perfectly raw mangoes", "Adjust tanginess as needed"]
  },
  {
    id: "vendakka_pachadi",
    name: "Vendakka Pachadi",
    malayalamName: "Vendakka Pachadi",
    description: "Okra in yogurt and coconut gravy, unique texture and flavor",
    category: "curry",
    ingredients: [
      { name: "Okra", quantity: 250, unit: "g", category: "vegetables" },
      { name: "Coconut", quantity: 0.5, unit: "cup", category: "other" },
      { name: "Yogurt", quantity: 150, unit: "ml", category: "dairy" },
      { name: "Green chili", quantity: 2, unit: "pieces", category: "vegetables" },
      { name: "Turmeric powder", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Coconut oil", quantity: 2, unit: "tbsp", category: "oil" },
      { name: "Mustard seeds", quantity: 1, unit: "tsp", category: "spices" }
    ],
    cookingTime: 20,
    preparationTime: 15,
    servingSize: "50g",
    difficulty: "medium",
    instructions: [
      "Cut okra into rounds",
      "Cook with turmeric until tender",
      "Grind coconut with green chili",
      "Mix coconut paste with cooked okra",
      "Cool and add yogurt",
      "Temper and pour over"
    ],
    tips: ["Cook okra well to reduce sliminess", "Add yogurt only after cooling"]
  },
  {
    id: "nei_payasam",
    name: "Nei Payasam",
    malayalamName: "Nei Payasam",
    description: "Rich ghee payasam with rice, the ultimate festive dessert",
    category: "dessert",
    ingredients: [
      { name: "Rice", quantity: 50, unit: "g", category: "grains" },
      { name: "Milk", quantity: 750, unit: "ml", category: "dairy" },
      { name: "Ghee", quantity: 4, unit: "tbsp", category: "dairy" },
      { name: "Sugar", quantity: 100, unit: "g", category: "other" },
      { name: "Cardamom powder", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Cashews", quantity: 20, unit: "pieces", category: "other" },
      { name: "Raisins", quantity: 20, unit: "pieces", category: "other" }
    ],
    cookingTime: 50,
    preparationTime: 10,
    servingSize: "100ml",
    difficulty: "medium",
    instructions: [
      "Fry rice in ghee until golden",
      "Add milk gradually and cook until soft",
      "Add sugar and cardamom",
      "Cook until thick and creamy",
      "Fry nuts in ghee and garnish"
    ],
    tips: ["Patience is key for creamy texture", "Stir continuously"]
  },
  {
    id: "ada_pradhaman",
    name: "Ada Pradhaman",
    malayalamName: "Ada Pradhaman",
    description: "Traditional ada payasam with coconut milk, festive specialty",
    category: "dessert",
    ingredients: [
      { name: "Ada", quantity: 100, unit: "g", category: "other" },
      { name: "Coconut milk", quantity: 400, unit: "ml", category: "dairy" },
      { name: "Jaggery", quantity: 150, unit: "g", category: "other" },
      { name: "Cardamom powder", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Ghee", quantity: 2, unit: "tbsp", category: "dairy" },
      { name: "Cashews", quantity: 15, unit: "pieces", category: "other" }
    ],
    cookingTime: 35,
    preparationTime: 10,
    servingSize: "100ml",
    difficulty: "medium",
    instructions: [
      "Cook ada until soft and translucent",
      "Dissolve jaggery in water and strain",
      "Add jaggery syrup to cooked ada",
      "Gradually add coconut milk",
      "Add cardamom and simmer",
      "Garnish with fried cashews"
    ],
    tips: ["Don't boil after adding coconut milk", "Ada should be perfectly cooked"]
  },
  {
    id: "banana",
    name: "Banana",
    malayalamName: "Vazha Pazham",
    description: "Fresh ripe banana, the traditional ending to every Sadhya",
    category: "accompaniment",
    ingredients: [
      { name: "Ripe banana", quantity: 1, unit: "piece", category: "vegetables" }
    ],
    cookingTime: 0,
    preparationTime: 1,
    servingSize: "1 piece",
    difficulty: "easy",
    instructions: [
      "Select perfectly ripe bananas",
      "Peel just before serving",
      "Serve on the banana leaf"
    ],
    tips: ["Choose Nendran bananas if available", "Should be sweet and fragrant"]
  },
  {
    id: "lime_pickle",
    name: "Lime Pickle",
    malayalamName: "Naranga Achar",
    description: "Tangy lime pickle with spices, zesty accompaniment",
    category: "accompaniment",
    ingredients: [
      { name: "Lime", quantity: 10, unit: "pieces", category: "vegetables" },
      { name: "Salt", quantity: 3, unit: "tbsp", category: "spices" },
      { name: "Red chili powder", quantity: 2, unit: "tbsp", category: "spices" },
      { name: "Turmeric powder", quantity: 1, unit: "tsp", category: "spices" },
      { name: "Asafoetida", quantity: 0.5, unit: "tsp", category: "spices" },
      { name: "Gingelly oil", quantity: 4, unit: "tbsp", category: "oil" }
    ],
    cookingTime: 5,
    preparationTime: 30,
    servingSize: "10g",
    difficulty: "easy",
    instructions: [
      "Cut limes into small pieces",
      "Mix with salt and keep for 4 hours",
      "Drain excess water",
      "Mix with all spice powders",
      "Heat oil and pour over mixture",
      "Mix well and store"
    ],
    tips: ["Use tender limes for best results", "Ensure complete drying"]
  }
];

// Utility functions for dish management
export const getDishById = (id: string) => traditionalDishes.find(dish => dish.id === id);

export const getDishesByCategory = (category: string) => 
  traditionalDishes.filter(dish => dish.category === category);

export const searchDishes = (query: string) => 
  traditionalDishes.filter(dish => 
    dish.name.toLowerCase().includes(query.toLowerCase()) ||
    dish.malayalamName.toLowerCase().includes(query.toLowerCase()) ||
    dish.description.toLowerCase().includes(query.toLowerCase())
  );

export const getDishCategories = () => 
  Array.from(new Set(traditionalDishes.map(dish => dish.category)));

export const getIngredientCategories = () => 
  Array.from(new Set(traditionalDishes.flatMap(dish => dish.ingredients.map(ing => ing.category))));