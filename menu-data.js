/* Carta de Bar Restaurante Cara-Ven.

   Para cambiar un precio, edita "price" (con punto decimal: 10.50).
   Para añadir un plato, copia un bloque entero dentro de su categoría.
   No hace falta tocar nada más: index.html lee esto al cargar.

   Va como .js y no como .json a propósito, para que la web no dependa de
   ninguna petición de red y se pueda abrir incluso sin servidor. */

window.MENU_DATA = {
  "restaurant": "Bar Restaurante Cara-Ven",
  "source": "Carta oficial del restaurante (presentación Google Slides)",
  "updated_at": "2026-09-19",
  "currency": "EUR",
  "portion_note": {
    "es": "Precios de ración. Media ración disponible, consulta con el personal.",
    "en": "Prices are for a full portion. Half portions available, ask our staff.",
    "de": "Preise gelten für eine ganze Portion. Halbe Portionen auf Anfrage.",
    "fr": "Prix pour une portion entière. Demi-portions disponibles, demandez au personnel."
  },
  "tax_note": {
    "es": "I.G.I.C. incluido",
    "en": "I.G.I.C. included",
    "de": "I.G.I.C. inbegriffen",
    "fr": "I.G.I.C. inclus"
  },
  "categories": [
    {
      "id": "venezolano",
      "name": {
        "es": "Cocina Venezolana",
        "en": "Venezuelan Kitchen",
        "de": "Venezolanische Küche",
        "fr": "Cuisine vénézuélienne"
      },
      "items": [
        {
          "name": {
            "es": "Empanadas",
            "en": "Empanadas",
            "de": "Empanadas",
            "fr": "Empanadas"
          },
          "price": 9.0
        },
        {
          "name": {
            "es": "Arepas",
            "en": "Arepas",
            "de": "Arepas",
            "fr": "Arepas"
          },
          "price": 4.0,
          "note": {
            "es": "+0,50 €/ingrediente",
            "en": "+€0.50/ingredient",
            "de": "+€0.50/ingredient",
            "fr": "+€0.50/ingredient"
          }
        },
        {
          "name": {
            "es": "Cachapa",
            "en": "Cachapa",
            "de": "Cachapa",
            "fr": "Cachapa"
          },
          "price": 8.0
        },
        {
          "name": {
            "es": "Tequeños",
            "en": "Tequeños",
            "de": "Tequeños",
            "fr": "Tequeños"
          },
          "price": 9.0
        },
        {
          "name": {
            "es": "Pabellón Criollo",
            "en": "Pabellón Criollo",
            "de": "Pabellón Criollo",
            "fr": "Pabellón Criollo"
          },
          "price": 10.5
        },
        {
          "name": {
            "es": "Serrano y Queso Blanco",
            "en": "Serrano ham and white cheese",
            "de": "Serrano-Schinken und Weißkäse",
            "fr": "Jambon serrano et fromage blanc"
          },
          "price": 11.0
        }
      ]
    },
    {
      "id": "entrantes",
      "name": {
        "es": "Entrantes y Ensaladas",
        "en": "Starters & Salads",
        "de": "Vorspeisen & Salate",
        "fr": "Entrées & salades"
      },
      "items": [
        {
          "name": {
            "es": "Ensaladilla",
            "en": "Russian salad",
            "de": "Russischer Salat",
            "fr": "Salade russe"
          },
          "price": 9.0
        },
        {
          "name": {
            "es": "Tomate Aliñado",
            "en": "Marinated tomato",
            "de": "Marinierte Tomaten",
            "fr": "Tomates marinées"
          },
          "price": 6.5
        },
        {
          "name": {
            "es": "Queso Asado",
            "en": "Grilled cheese",
            "de": "Gegrillter Käse",
            "fr": "Fromage grillé"
          },
          "price": 9.0
        },
        {
          "name": {
            "es": "Ensalada",
            "en": "Salad",
            "de": "Salat",
            "fr": "Salade"
          },
          "price": 9.5,
          "note": {
            "es": "+ ingredientes",
            "en": "+ extra ingredients",
            "de": "+ extra ingredients",
            "fr": "+ extra ingredients"
          }
        },
        {
          "name": {
            "es": "Pimientos de Padrón",
            "en": "Padrón peppers",
            "de": "Padrón-Paprika",
            "fr": "Poivrons de Padrón"
          },
          "price": 9.0
        },
        {
          "name": {
            "es": "Papas Arrugadas",
            "en": "Canarian wrinkly potatoes",
            "de": "Runzlige Kanarische Kartoffeln",
            "fr": "Pommes de terre ridées canariennes"
          },
          "price": 7.5
        }
      ]
    },
    {
      "id": "mar",
      "name": {
        "es": "Del Mar",
        "en": "From the Sea",
        "de": "Aus dem Meer",
        "fr": "De la mer"
      },
      "items": [
        {
          "name": {
            "es": "Pulpo Guisado",
            "en": "Stewed octopus",
            "de": "Geschmorter Oktopus",
            "fr": "Poulpe à l'étouffée"
          },
          "price": 15.0
        },
        {
          "name": {
            "es": "Pulpo a la Vinagreta",
            "en": "Octopus salad",
            "de": "Oktopus-Salat",
            "fr": "Salade de poulpe"
          },
          "price": 16.5
        },
        {
          "name": {
            "es": "Lapas con Mojo",
            "en": "Limpets with mojo sauce",
            "de": "Napfschnecken mit Mojo-Soße",
            "fr": "Patelles à la sauce mojo"
          },
          "price": 16.0
        },
        {
          "name": {
            "es": "Mejillones al Vapor",
            "en": "Steamed mussels",
            "de": "Gedämpfte Muscheln",
            "fr": "Moules cuites à la vapeur"
          },
          "price": 10.0
        },
        {
          "name": {
            "es": "Mejillones a la Marinera",
            "en": "Mussels marinara",
            "de": "Muscheln nach Seemannsart",
            "fr": "Moules à la marinière"
          },
          "price": 13.5
        },
        {
          "name": {
            "es": "Gambas al Ajillo",
            "en": "Garlic prawns",
            "de": "Knoblauchgarnelen",
            "fr": "Crevettes à l'ail"
          },
          "price": 14.5
        },
        {
          "name": {
            "es": "Langostinos a la Plancha",
            "en": "Grilled prawns",
            "de": "Gegrillte Garnelen",
            "fr": "Gambas grillées"
          },
          "price": 15.5
        }
      ]
    },
    {
      "id": "frituras",
      "name": {
        "es": "Frituras y Pescados",
        "en": "Fried & Fish",
        "de": "Frittiertes & Fisch",
        "fr": "Fritures & poissons"
      },
      "items": [
        {
          "name": {
            "es": "Chopitos",
            "en": "Fried baby squid",
            "de": "Frittierte Baby-Tintenfische",
            "fr": "Petits calamars frits"
          },
          "price": 12.0
        },
        {
          "name": {
            "es": "Gueldes",
            "en": "Fried whitebait",
            "de": "Frittierte Fischchen",
            "fr": "Petite friture"
          },
          "price": 10.0
        },
        {
          "name": {
            "es": "Churros de Pescado",
            "en": "Fried fish strips",
            "de": "Frittierte Fischstreifen",
            "fr": "Beignets de poisson"
          },
          "price": 10.0
        },
        {
          "name": {
            "es": "Calamares a la Romana",
            "en": "Squid in batter",
            "de": "Tintenfisch im Teig",
            "fr": "Calamars à la romaine"
          },
          "price": 13.5
        },
        {
          "name": {
            "es": "Sardinas",
            "en": "Sardines",
            "de": "Sardinen",
            "fr": "Sardines"
          },
          "price": 10.0
        },
        {
          "name": {
            "es": "Bacalao Encebollado",
            "en": "Cod with onions",
            "de": "Kabeljau mit Zwiebeln",
            "fr": "Morue aux oignons"
          },
          "price": 16.5
        },
        {
          "name": {
            "es": "Chocos Asados",
            "en": "Grilled cuttlefish",
            "de": "Gegrillter Tintenfisch",
            "fr": "Seiches grillées"
          },
          "price": 16.5
        },
        {
          "name": {
            "es": "Atún a la Plancha",
            "en": "Grilled tuna",
            "de": "Gegrillter Thunfisch",
            "fr": "Thon grillé"
          },
          "price": 14.5
        }
      ]
    },
    {
      "id": "arroces",
      "name": {
        "es": "Arroces y Principales",
        "en": "Rice & Mains",
        "de": "Reis & Hauptgerichte",
        "fr": "Riz & plats principaux"
      },
      "items": [
        {
          "name": {
            "es": "Paella",
            "en": "Paella",
            "de": "Paella",
            "fr": "Paella"
          },
          "price": 30.0
        },
        {
          "name": {
            "es": "Arroz Cara-Ven",
            "en": "Cara-Ven rice",
            "de": "Reis Cara-Ven",
            "fr": "Riz Cara-Ven"
          },
          "price": 9.0
        },
        {
          "name": {
            "es": "Arroz a la Cubana",
            "en": "Cuban-style rice",
            "de": "Reis nach kubanischer Art",
            "fr": "Riz à la cubaine"
          },
          "price": 9.0
        },
        {
          "name": {
            "es": "Revuelto de Gambas",
            "en": "Scrambled eggs with prawns",
            "de": "Rührei mit Garnelen",
            "fr": "Œufs brouillés aux crevettes"
          },
          "price": 16.0
        },
        {
          "name": {
            "es": "Tortilla Española de Papas",
            "en": "Spanish potato omelette",
            "de": "Spanisches Kartoffel-Omelett",
            "fr": "Omelette espagnole"
          },
          "price": 9.0
        },
        {
          "name": {
            "es": "Piña con Pollo",
            "en": "Pineapple chicken",
            "de": "Ananas-Hähnchen",
            "fr": "Poulet à l'ananas"
          },
          "price": 10.0
        },
        {
          "name": {
            "es": "Tallarines",
            "en": "Noodles",
            "de": "Nudeln",
            "fr": "Nouilles"
          },
          "price": 9.0
        },
        {
          "name": {
            "es": "Papas Locas (Carne / Veg.)",
            "en": "Loaded fries (Meat / Veggie)",
            "de": "Verrückte Pommes (Fleisch / Veggie)",
            "fr": "Frites garnies (Viande / Végé)"
          },
          "price": 8.5
        }
      ]
    },
    {
      "id": "carnes",
      "name": {
        "es": "Carnes y Picoteo",
        "en": "Meat & Sharing",
        "de": "Fleisch & Snacks",
        "fr": "Viandes & à partager"
      },
      "items": [
        {
          "name": {
            "es": "Pincho de Pollo",
            "en": "Chicken skewer",
            "de": "Hähnchenspieß",
            "fr": "Brochette de poulet"
          },
          "price": 9.0
        },
        {
          "name": {
            "es": "Alas de Pollo",
            "en": "Chicken wings",
            "de": "Hähnchenflügel",
            "fr": "Ailes de poulet"
          },
          "price": 9.0
        },
        {
          "name": {
            "es": "Pechuga de Pollo Empanada",
            "en": "Breaded chicken breast",
            "de": "Panierte Hähnchenbrust",
            "fr": "Poitrine de poulet panée"
          },
          "price": 9.5
        },
        {
          "name": {
            "es": "Solomillo de Cerdo",
            "en": "Pork tenderloin",
            "de": "Schweinefilet",
            "fr": "Filet de porc"
          },
          "price": 14.5
        },
        {
          "name": {
            "es": "Salchicha de 1/2 Metro",
            "en": "Half-metre sausage",
            "de": "Halbmeter-Wurst",
            "fr": "Saucisse d'un demi-mètre"
          },
          "price": 12.5
        },
        {
          "name": {
            "es": "Croquetas con Papas",
            "en": "Croquettes with fries",
            "de": "Kroketten mit Pommes",
            "fr": "Croquettes avec frites"
          },
          "price": 9.0
        },
        {
          "name": {
            "es": "Nuggets con Papas",
            "en": "Nuggets with fries",
            "de": "Nuggets mit Pommes",
            "fr": "Nuggets avec frites"
          },
          "price": 8.5
        }
      ]
    }
  ]
};
