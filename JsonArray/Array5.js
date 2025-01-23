
var products = [
    {
      "type": "Electronics",
      "categories": [
        {
          "name": "Mobile Phones",
          "subcategories": [
            {
              "name": "Smartphones",
              "brands": ["Apple", "Samsung", "Google"]
            },
            {
              "name": "Feature Phones",
              "brands": ["Nokia", "Micromax"]
            }
          ]
        },
        {
          "name": "Laptops",
          "subcategories": [
            {
              "name": "Gaming Laptops",
              "brands": ["Alienware", "MSI", "Asus"]
            },
            {
              "name": "Ultrabooks",
              "brands": ["Dell", "HP", "Lenovo"]
            }
          ]
        }
      ]
    },
    {
      "type": "Clothing",
      "categories": [
        {
          "name": "Men",
          "subcategories": [
            {
              "name": "Casual Wear",
              "items": ["T-shirts", "Jeans", "Hoodies"]
            },
            {
              "name": "Formal Wear",
              "items": ["Suits", "Shirts", "Trousers"]
            }
          ]
        },
        {
          "name": "Women",
          "subcategories": [
            {
              "name": "Casual Wear",
              "items": ["Dresses", "Tops", "Leggings"]
            },
            {
              "name": "Formal Wear",
              "items": ["Blazers", "Skirts", "Trousers"]
            }
          ]
        }
      ]
    },
    {
      "type": "Home Appliances",
      "categories": [
        {
          "name": "Kitchen",
          "subcategories": [
            {
              "name": "Small Appliances",
              "items": ["Blenders", "Toasters", "Microwaves"]
            },
            {
              "name": "Large Appliances",
              "items": ["Refrigerators", "Ovens", "Dishwashers"]
            }
          ]
        },
        {
          "name": "Cleaning",
          "subcategories": [
            {
              "name": "Vacuum Cleaners",
              "brands": ["Dyson", "Bissell", "Shark"]
            },
            {
              "name": "Steam Cleaners",
              "brands": ["Karcher", "Black+Decker"]
            }
          ]
        }
      ]
    }
  ]
  













// Retrieve all product types: Extract the list of top-level product types (Electronics, Clothing, Home Appliances).

// List all categories for a specific product type: For example, display all categories under Electronics (e.g., Mobile Phones, Laptops).

// Find all subcategories of a specific category: For instance, under Mobile Phones, retrieve the subcategories Smartphones and Feature Phones.

// Extract all brands under a specific subcategory: For example, list all brands available under the Smartphones subcategory (Apple, Samsung, Google).

// List all items under a specific subcategory: For example, retrieve all items under the Casual Wear subcategory for Men (T-shirts, Jeans, Hoodies).

// Count the number of subcategories for each category: For instance, determine how many subcategories exist under Mobile Phones (result: 2).

// Search for a specific brand and identify its category and subcategory: For example, locate Dell and identify that it belongs to the Ultrabooks subcategory under the Laptops category.

// List all categories and their subcategories for a specific product type: For example, show the categories (Kitchen, Cleaning) and subcategories (e.g., Small Appliances, Large Appliances) for Home Appliances.

// Identify all categories with items instead of brands: For instance, find categories like Men > Casual Wear or Women > Casual Wear where subcategories list items rather than brands.

// Add a new product type or subcategory to the JSON structure: For example, add a new product type called Sports with categories and subcategories.