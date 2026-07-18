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
          { name: "Café Espresso", price:  },
          { name: "Café au lait", price: },
          { name: "Lait chaud", price:  },
          { name: "Chocolat au lait", price:  },
          { name: "Thé ou infusion", price: },
          { name: "Thé au lait", price: },
          { name: "Jus frais", price: },
          { name: "Jus locaux", price: },
          { name: "Attaya", price: },
          { name: "Cappuccino", price: },
          { name: "Café expresso double", price: },
        ],
      },
      {
        title: "Pâtisseries",
        items: [
          { name: "Croissant", price:  },
          { name: "Pain au chocolat", price:  },
          { name: "Pain aux raisins", price: },
          { name: "Palmier", price:  },
          { name: "Chausson aux pommes", price:  },
          { name: "Drops", price: },
          { name: "Cake", price:  },
          { name: "Petits fours (100 g)", price:  },
          { name: "Gâteau au choix", price:  },
          { name: "Part d'entremet", price:  },
          { name: "Part d'entremet spécial", price: },
        ],
      },
      {
        title: "Salés",
        items: [
          { name: "Œufs nature au plat", price: },
          { name: "Omelette nature", price: },
          { name: "Omelette jambon-fromage", price:},
          { name: "Omelette au fromage", price:},
          { name: "Omelette aux fruits de mer", price:},
          { name: "Croissant au jambon", price: },
          { name: "Croque-monsieur", price:  },
          { name: "Croque-madame", price:  },
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
          { name: "Niçoise", description: "Thon, œufs, olives, légumes frais.", price:  },
          { name: "Américaine", description: "Jambon, crudités, sauce onctueuse.", price:  },
          { name: "Exotique", description: "Mangue, crevettes, légumes croquants.", price: },
          {
            name: "Chèvre chaud",
            description: "Toasts de chèvre fondant, salade verte et miel.",
            price: ,
          },
          { name: "Tomate mozzarella", price:  },
          { name: "Salade César", price:  },
          { name: "Salade de riz", price:  },
          { name: "Salade de fruits de saison", price:  },
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
            price: ,
          },
          { name: "Carbonara", description: "Crème, œuf, lardons, parmesan.", price:  },
          { name: "Roquefort", description: "Sauce crémeuse au roquefort.", price:  },
          { name: "Lasagne", description: "Gratinées, tradition italienne.", price:  },
          {
            name: "Tagliatelles saumon",
            description: "Sauce onctueuse au saumon.",
            price: ,
          },
          { name: "Tagliatelles Carbonara", price:  },
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
          { name: "Reine", description: "Jambon, champignons, fromage.", price:  },
          { name: "Margherita", description: "Tomate, fromage, basilic.", price:  },
          {
            name: "Quatre fromages",
            description: "Mélange fondant de fromages.",
            price: ,
          },
          { name: "Napolitaine", description: "Tomate, olives, anchois.", price: },
          {
            name: "Fermière",
            description: "Poulet, légumes, crème ou tomate.",
            price: ,
          },
          { name: "Fruits de mer", price:  },
          { name: "Thon", price:  },
        ],
      },
      {
        title: "Crêpes salées",
        items: [
          { name: "Jambon, champignons, fromage", price:  },
          {
            name: "Grosse Bertha",
            description: "Crevettes, jambon, champignons, fromage, béchamel.",
            price: ,
          },
          {
            name: "Provençale",
            description: "Jambon, champignons, fromage, béchamel.",
            price: ,
          },
          { name: "Fruit de mer", price:  },
        ],
      },
      {
        title: "Paninis",
        items: [
          { name: "Thon", price: },
          { name: "Poulet", price:  },
          { name: "Jambon", price:  },
          { name: "Délices Saumon", price:  },
          { name: "Crevettes", price:  },
          { name: "Tomates mozzarella", price:  },
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
            price: ,
          },
          {
            name: "Sandwich steak",
            description: "Steak émincé, légumes et sauce.",
            price: ,
          },
          {
            name: "Sandwich poulet",
            description: "Poulet grillé, crudités.",
            price: ,
          },
          { name: "Burger des Délices", price:  },
          { name: "Cheese Burger", price:  },
          { name: "Hamburger", price:  },
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
          { name: "Filet de bœuf", price: },
          { name: "Entrecôte", price:  },
          { name: "Côte de bœuf", price: },
          { name: "Côte de porc", price: },
          { name: "Merguez", price: },
        ],
      },
      {
        title: "Volailles",
        items: [
          { name: "Poulet entier", price:  },
          { name: "Demi-poulet", price:  },
          { name: "Yassa poulet", price:  },
          { name: "Poulet à l'américaine", price:  },
          { name: "Escalope de poulet panée", price: },
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
          { name: "Provençale", description: "Tomates & herbes.", price:  },
          { name: "Braisé", description: "Saveurs grillées.", price:},
        ],
      },
      {
        items: [
          { name: "Brochette de gambas grillées", price:  },
          { name: "Riz au poisson", price:  },
          { name: "Thiof braisé", price: },
          { name: "Brochette de lotte", price: },
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
          { name: "Sandwich kafta", price:  },
          { name: "Assiette kafta", price: },
          { name: "Shawarma viande", price:  },
          { name: "Shawarma poulet", price:  },
          { name: "Shawarma à l'assiette", price:  },
          { name: "Sandwich falafel", price:  },
          { name: "Assiette falafel", price:  },
          { name: "Houmous", price:  },
          { name: "Houmous viande", price:  },
          { name: "Baba ghanoush", price:  },
          { name: "Assiette merguez", price:  },
          { name: "Fattoush", price:  },
          { name: "Couscous poulet merguez", price:  },
          { name: "Taboulé", price:  },
        ],
      },
      {
        title: "Spécialités asiatiques",
        items: [
          { name: "Assiette Nems", price: },
          { name: "Beignets de crevettes", price: },
          { name: "Salade chinoise", price: },
          { name: "Riz cantonais", price: },
          { name: "Misao", price:  },
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
            price: ,
          },
          {
            name: "Mousse au chocolat",
            description: "Texture aérienne, intensité cacao.",
            price: ,
          },
          {
            name: "Flan caramel",
            description: "Dessert onctueux à base d'œuf et de lait.",
            price: ,
          },
          {
            name: "Salade de fruits frais",
            description: "Légère, vitaminée, rafraîchissante.",
            price: ,
          },
          {
            name: "Tarte tatin revisitée",
            description: "Pommes fondantes et caramel doré.",
            price: ,
          },
          {
            name: "Pavlova aux fruits rouges",
            description: "Meringue croustillante aux fruits rouges.",
            price: ,
          },
          {
            name: "Cheesecake",
            description: "Crémeux et délicatement vanillé, base biscuitée croustillante.",
            price: ,
          },
        ],
      },
      {
        title: "Le glacier — coupes glacées",
        items: [
          {
            name: "Banana Split",
            description: "3 boules de glace, banane fraîche, chantilly.",
            price: ,
          },
          {
            name: "Pêche Melba",
            description: "Glace vanille, pêche pochée, coulis de framboise.",
            price: ,
          },
          {
            name: "Chocolat liégeois",
            description: "Glace chocolat, sauce chocolat chaud, chantilly.",
            price: ,
          },
          {
            name: "Milkshake",
            description: "Banane, vanille, chocolat, fraise ou caramel.",
            price:,
          },
          { name: "Boule de glace", price:  },
        ],
      },
      {
        title: "Crêpes sucrées",
        items: [
          { name: "Nutella", price: },
          { name: "Chocolat banane", price:  },
          { name: "Banane flambée au rhum", price: },
          { name: "Confiture", price:  },
          { name: "Citron", price: },
          { name: "Sucre", price: },
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
          { name: "Soda", price:  },
          { name: "Jus", price:  },
          { name: "Jus locaux", price:  },
          { name: "Jus frais orange, citron", price:  },
          { name: "Sirop à l'eau — menthe, grenadine, fraise", price: },
          { name: "Diabolo — menthe, grenadine, fraise", price: },
          { name: "Café glacé frappé", price: },
        ],
      },
      {
        title: "Les eaux",
        items: [
          { name: "Minérale 50cl", price:  },
          { name: "Minérale 1L", price:  },
          { name: "Perrier", price: },
          { name: "Eau gazeuse", price: },
        ],
      },
      {
        title: "Mocktails",
        items: [
          {
            name: "Virgin Mojito",
            description: "Citron frais, basilic, eau pétillante.",
            price: ,
          },
          {
            name: "Blue Mojito",
            description: "Fleur d'oranger, miel, citron, eau gazeuse.",
            price: ,
          },
          {
            name: "Floride",
            description: "Fraise, balsamique, menthe, limonade.",
            price: ,
          },
        ],
      },
      {
        title: "Cocktails alcoolisés",
        items: [
          { name: "Margarita", price: },
          { name: "Mojito", price: },
          { name: "Pina Colada", price: },
          { name: "Gin Fizz", price: },
          { name: "Bloody Mary", price: },
          { name: "American Fizz", price:},
          { name: "Délices", price: },
        ],
      },
      {
        title: "Apéritifs",
        sharedPrice: ,
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
        sharedPrice: ,
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
          { name: "Flag", price:  },
          { name: "Castel", price:  },
          { name: "Gazelle", price:  },
          { name: "Heineken", price:  },
        ],
      },
      {
        title: "Vins en carafe",
        note: "Blanc, rouge ou rosé au choix.",
        items: [
          { name: "Ballon", price:  },
          { name: "½ Carafe", price:  },
        ],
      },
      {
        title: "Vins en bouteille",
        note: "Blanc, rouge ou rosé au choix.",
        items: [
          { name: "Bouché", price:  },
          { name: "Grand Cru", price:  },
          { name: "Champagne", price:  },
        ],
      },
    ],
  },
];

export const menuNote =
  "Tous nos plats sont préparés à la commande. Le poisson du jour dépend de l'arrivage du matin — demandez-le à notre équipe.";
