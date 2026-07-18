export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
};

export type MenuSubsection = {
  title?: string;
  note?: string;
  sharedPrice?: number;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  label: string;
  shortLabel: string;
  intro: string;
  subsections: MenuSubsection[];
  notes?: string[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "petit-dejeuner",
    label: "Petit déjeuner",
    shortLabel: "Petit-déj",
    intro: "Pour bien commencer la route, boissons chaudes, viennoiseries et salés maison.",
    subsections: [
      {
        title: "Boissons",
        items: [
          { name: "Café Espresso", price: 1500 },
          { name: "Café au lait", price: 2000 },
          { name: "Lait chaud", price: 1200 },
          { name: "Chocolat au lait", price: 2000 },
          { name: "Thé ou infusion", price: 1500 },
          { name: "Thé au lait", price: 2000 },
          { name: "Jus frais", price: 2500 },
          { name: "Jus locaux", price: 1200 },
          { name: "Attaya", price: 1500 },
          { name: "Cappuccino", price: 2500 },
          { name: "Café expresso double", price: 2500 },
        ],
      },
      {
        title: "Pâtisseries",
        items: [
          { name: "Croissant", price: 500 },
          { name: "Pain au chocolat", price: 600 },
          { name: "Pain aux raisins", price: 600 },
          { name: "Palmier", price: 600 },
          { name: "Chausson aux pommes", price: 600 },
          { name: "Drops", price: 600 },
          { name: "Cake", price: 3000 },
          { name: "Petits fours (100 g)", price: 1500 },
          { name: "Gâteau au choix", price: 1400 },
          { name: "Part d'entremet", price: 1200 },
          { name: "Part d'entremet spécial", price: 1500 },
        ],
      },
      {
        title: "Salés",
        items: [
          { name: "Œufs nature au plat", price: 1500 },
          { name: "Omelette nature", price: 2500 },
          { name: "Omelette jambon-fromage", price: 3500 },
          { name: "Omelette au fromage", price: 3500 },
          { name: "Omelette aux fruits de mer", price: 3500 },
          { name: "Croissant au jambon", price: 2000 },
          { name: "Croque-monsieur", price: 2500 },
          { name: "Croque-madame", price: 3000 },
        ],
      },
    ],
  },
  {
    id: "salades",
    label: "Salades",
    shortLabel: "Salades",
    intro: "Fraîcheur et légèreté, à partager ou pour une pause plus légère.",
    subsections: [
      {
        items: [
          { name: "Niçoise", description: "Thon, œufs, olives, légumes frais.", price: 5000 },
          { name: "Américaine", description: "Jambon, crudités, sauce onctueuse.", price: 5000 },
          { name: "Exotique", description: "Mangue, crevettes, légumes croquants.", price: 5000 },
          {
            name: "Chèvre chaud",
            description: "Toasts de chèvre fondant, salade verte et miel.",
            price: 5000,
          },
          { name: "Tomate mozzarella", price: 5000 },
          { name: "Salade César", price: 5000 },
          { name: "Salade de riz", price: 6000 },
          { name: "Salade de fruits de saison", price: 3500 },
        ],
      },
    ],
  },
  {
    id: "pates",
    label: "Pâtes",
    shortLabel: "Pâtes",
    intro: "Cuites minute, sauces maison.",
    subsections: [
      {
        items: [
          {
            name: "Bolognaise",
            description: "Sauce tomate mijotée et viande hachée.",
            price: 6500,
          },
          { name: "Carbonara", description: "Crème, œuf, lardons, parmesan.", price: 6500 },
          { name: "Roquefort", description: "Sauce crémeuse au roquefort.", price: 5000 },
          { name: "Lasagne", description: "Gratinées, tradition italienne.", price: 6500 },
          {
            name: "Tagliatelles saumon",
            description: "Sauce onctueuse au saumon.",
            price: 6500,
          },
          { name: "Tagliatelles Carbonara", price: 6500 },
        ],
      },
    ],
  },
  {
    id: "pizzas",
    label: "Pizzas, Crêpes & Paninis",
    shortLabel: "Pizzas",
    intro: "Pizzas généreuses, crêpes salées gourmandes et paninis grillés.",
    subsections: [
      {
        title: "Pizzas",
        items: [
          { name: "Reine", description: "Jambon, champignons, fromage.", price: 6500 },
          { name: "Margherita", description: "Tomate, fromage, basilic.", price: 5000 },
          {
            name: "Quatre fromages",
            description: "Mélange fondant de fromages.",
            price: 6000,
          },
          { name: "Napolitaine", description: "Tomate, olives, anchois.", price: 6500 },
          {
            name: "Fermière",
            description: "Poulet, légumes, crème ou tomate.",
            price: 6500,
          },
          { name: "Fruits de mer", price: 6500 },
          { name: "Thon", price: 6000 },
        ],
      },
      {
        title: "Crêpes salées",
        items: [
          { name: "Jambon, champignons, fromage", price: 4500 },
          {
            name: "Grosse Bertha",
            description: "Crevettes, jambon, champignons, fromage, béchamel.",
            price: 4500,
          },
          {
            name: "Provençale",
            description: "Jambon, champignons, fromage, béchamel.",
            price: 4500,
          },
          { name: "Fruit de mer", price: 5500 },
        ],
      },
      {
        title: "Paninis",
        items: [
          { name: "Thon", price: 3500 },
          { name: "Poulet", price: 3500 },
          { name: "Jambon", price: 3500 },
          { name: "Délices Saumon", price: 4500 },
          { name: "Crevettes", price: 3500 },
          { name: "Tomates mozzarella", price: 3500 },
        ],
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks & Sandwichs",
    shortLabel: "Snacks",
    intro: "Pour une pause rapide et généreuse, sans sacrifier le goût.",
    subsections: [
      {
        items: [
          {
            name: "Hot-dog norvégien",
            description: "Fromage, œuf, saucisse.",
            price: 2500,
          },
          {
            name: "Sandwich steak",
            description: "Steak émincé, légumes et sauce.",
            price: 2500,
          },
          {
            name: "Sandwich poulet",
            description: "Poulet grillé, crudités.",
            price: 2500,
          },
          { name: "Burger des Délices", price: 4500 },
          { name: "Cheese Burger", price: 2500 },
          { name: "Hamburger", price: 2500 },
        ],
      },
    ],
  },
  {
    id: "viandes-volailles",
    label: "Viandes & Volailles",
    shortLabel: "Viandes",
    intro: "Viande tendre et poulet fermier, grillés ou braisés à la demande.",
    subsections: [
      {
        title: "Viandes",
        items: [
          { name: "Filet de bœuf", price: 8000 },
          { name: "Entrecôte", price: 7000 },
          { name: "Côte de bœuf", price: 8000 },
          { name: "Côte de porc", price: 6000 },
          { name: "Merguez", price: 5000 },
        ],
      },
      {
        title: "Volailles",
        items: [
          { name: "Poulet entier", price: 8000 },
          { name: "Demi-poulet", price: 6500 },
          { name: "Yassa poulet", price: 6500 },
          { name: "Poulet à l'américaine", price: 5000 },
          { name: "Escalope de poulet panée", price: 7000 },
        ],
      },
    ],
  },
  {
    id: "poissons",
    label: "Poissons & Fruits de mer",
    shortLabel: "Poissons",
    intro: "Dorade et thiof frais, préparés selon vos envies.",
    subsections: [
      {
        title: "Dorade ou thiof au choix",
        items: [
          { name: "Provençale", description: "Tomates & herbes.", price: 6500 },
          { name: "Braisé", description: "Saveurs grillées.", price: 8000 },
        ],
      },
      {
        items: [
          { name: "Brochette de gambas grillées", price: 12000 },
          { name: "Riz au poisson", price: 6000 },
          { name: "Thiof braisé", price: 8000 },
          { name: "Brochette de lotte", price: 6000 },
        ],
      },
    ],
  },
  {
    id: "orient-asie",
    label: "Délices d'Orient & Spécialités asiatiques",
    shortLabel: "Orient / Asie",
    intro: "Un tour du monde des saveurs, du Levant à l'Asie.",
    subsections: [
      {
        title: "Délices d'Orient",
        items: [
          { name: "Sandwich kafta", price: 2500 },
          { name: "Assiette kafta", price: 5000 },
          { name: "Shawarma viande", price: 2000 },
          { name: "Shawarma poulet", price: 2500 },
          { name: "Shawarma à l'assiette", price: 5000 },
          { name: "Sandwich falafel", price: 2000 },
          { name: "Assiette falafel", price: 4500 },
          { name: "Houmous", price: 3500 },
          { name: "Houmous viande", price: 5000 },
          { name: "Baba ghanoush", price: 4000 },
          { name: "Assiette merguez", price: 5000 },
          { name: "Fattoush", price: 3000 },
          { name: "Couscous poulet merguez", price: 6500 },
          { name: "Taboulé", price: 3500 },
        ],
      },
      {
        title: "Spécialités asiatiques",
        items: [
          { name: "Assiette Nems", price: 3500 },
          { name: "Beignets de crevettes", price: 5000 },
          { name: "Salade chinoise", price: 5000 },
          { name: "Riz cantonais", price: 6500 },
          { name: "Misao", price: 6500 },
        ],
      },
    ],
    notes: [
      "Accompagnements : frites, riz blanc, haricots verts, spaghettis, pommes vapeur, galette de pommes de terre — 1 000 F",
      "Sauces au choix : poivre vert, roquefort crème, champignons.",
    ],
  },
  {
    id: "desserts",
    label: "Desserts & Glacier",
    shortLabel: "Desserts",
    intro: "Généreux, gourmand, la touche finale qui régale.",
    subsections: [
      {
        title: "Desserts des Délices",
        items: [
          {
            name: "Crème brûlée",
            description: "Vanille caramélisée, cassonade croquante.",
            price: 4000,
          },
          {
            name: "Mousse au chocolat",
            description: "Texture aérienne, intensité cacao.",
            price: 4000,
          },
          {
            name: "Flan caramel",
            description: "Dessert onctueux à base d'œuf et de lait.",
            price: 4000,
          },
          {
            name: "Salade de fruits frais",
            description: "Légère, vitaminée, rafraîchissante.",
            price: 3500,
          },
          {
            name: "Tarte tatin revisitée",
            description: "Pommes fondantes et caramel doré.",
            price: 2500,
          },
          {
            name: "Pavlova aux fruits rouges",
            description: "Meringue croustillante aux fruits rouges.",
            price: 4000,
          },
          {
            name: "Cheesecake",
            description: "Crémeux et délicatement vanillé, base biscuitée croustillante.",
            price: 4000,
          },
        ],
      },
      {
        title: "Le glacier — coupes glacées",
        items: [
          {
            name: "Banana Split",
            description: "3 boules de glace, banane fraîche, chantilly.",
            price: 4000,
          },
          {
            name: "Pêche Melba",
            description: "Glace vanille, pêche pochée, coulis de framboise.",
            price: 4000,
          },
          {
            name: "Chocolat liégeois",
            description: "Glace chocolat, sauce chocolat chaud, chantilly.",
            price: 4000,
          },
          {
            name: "Milkshake",
            description: "Banane, vanille, chocolat, fraise ou caramel.",
            price: 4500,
          },
          { name: "Boule de glace", price: 1500 },
        ],
      },
      {
        title: "Crêpes sucrées",
        items: [
          { name: "Nutella", price: 2000 },
          { name: "Chocolat banane", price: 3500 },
          { name: "Banane flambée au rhum", price: 4000 },
          { name: "Confiture", price: 2500 },
          { name: "Citron", price: 2500 },
          { name: "Sucre", price: 2000 },
        ],
      },
    ],
  },
  {
    id: "boissons",
    label: "Boissons",
    shortLabel: "Boissons",
    intro: "Sodas, jus frais, mocktails, cocktails, vins et spiritueux.",
    subsections: [
      {
        title: "Frais et sucré",
        items: [
          { name: "Soda", price: 1000 },
          { name: "Jus", price: 1500 },
          { name: "Jus locaux", price: 1500 },
          { name: "Jus frais orange, citron", price: 2500 },
          { name: "Sirop à l'eau — menthe, grenadine, fraise", price: 1500 },
          { name: "Diabolo — menthe, grenadine, fraise", price: 2000 },
          { name: "Café glacé frappé", price: 3000 },
        ],
      },
      {
        title: "Les eaux",
        items: [
          { name: "Minérale 50cl", price: 1000 },
          { name: "Minérale 1L", price: 1500 },
          { name: "Perrier", price: 2000 },
          { name: "Eau gazeuse", price: 2000 },
        ],
      },
      {
        title: "Mocktails",
        items: [
          {
            name: "Virgin Mojito",
            description: "Citron frais, basilic, eau pétillante.",
            price: 3500,
          },
          {
            name: "Blue Mojito",
            description: "Fleur d'oranger, miel, citron, eau gazeuse.",
            price: 3500,
          },
          {
            name: "Floride",
            description: "Fraise, balsamique, menthe, limonade.",
            price: 3500,
          },
        ],
      },
      {
        title: "Cocktails alcoolisés",
        items: [
          { name: "Margarita", price: 5000 },
          { name: "Mojito", price: 5000 },
          { name: "Pina Colada", price: 5000 },
          { name: "Gin Fizz", price: 5000 },
          { name: "Bloody Mary", price: 5000 },
          { name: "American Fizz", price: 6000 },
          { name: "Délices", price: 6000 },
        ],
      },
      {
        title: "Apéritifs",
        sharedPrice: 4500,
        items: [
          { name: "Pastis" },
          { name: "Martini" },
          { name: "Whisky" },
          { name: "Gin" },
          { name: "Malibu" },
          { name: "Tequila" },
          { name: "Vodka" },
          { name: "Campari" },
          { name: "Kir Cassis" },
        ],
      },
      {
        title: "Digestifs",
        sharedPrice: 4500,
        items: [
          { name: "Cognac" },
          { name: "Cointreau" },
          { name: "Armagnac" },
          { name: "Calvados" },
          { name: "Get 27" },
          { name: "Crème de Cacao" },
          { name: "Grand Marnier" },
          { name: "Marie Brizard" },
          { name: "Baileys" },
          { name: "Rhum" },
        ],
      },
      {
        title: "Les bières",
        items: [
          { name: "Flag", price: 2000 },
          { name: "Castel", price: 2000 },
          { name: "Gazelle", price: 2000 },
          { name: "Heineken", price: 3000 },
        ],
      },
      {
        title: "Vins en carafe",
        note: "Blanc, rouge ou rosé au choix.",
        items: [
          { name: "Ballon", price: 2500 },
          { name: "½ Carafe", price: 5000 },
        ],
      },
      {
        title: "Vins en bouteille",
        note: "Blanc, rouge ou rosé au choix.",
        items: [
          { name: "Bouché", price: 7500 },
          { name: "Grand Cru", price: 9500 },
          { name: "Champagne", price: 40000 },
        ],
      },
    ],
  },
];

export const menuNote =
  "Tous nos plats sont préparés à la commande. Le poisson du jour dépend de l'arrivage du matin — demandez-le à notre équipe.";
