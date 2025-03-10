// backend/data.js
const products = [
    {
      id: 1,
      name: "Relaxation Tea",
      type: "beverage",
      description: "A soothing herbal tea blend designed for relaxation and stress relief.",
      effects: ["relaxation", "stress relief"],
      ingredients: ["Chamomile", "Lavender"],
      price: 12.99,
      sales_data: { units_sold: 120, last_month_revenue: 1558.8 }
    },
    {
      id: 2,
      name: "Energy Boost Coffee",
      type: "beverage",
      description: "A bold coffee blend to kickstart your day.",
      effects: ["energy", "focus"],
      ingredients: ["Coffee Beans"],
      price: 15.99,
      sales_data: { units_sold: 80, last_month_revenue: 1279.2 }
    }
  ];
  
  const ingredientInformation = [
    {
      name: "Chamomile",
      properties: "Mild, floral aroma; known for calming effects",
      common_effects: ["relaxation", "improved sleep"]
    },
    {
      name: "Lavender",
      properties: "Soothing scent; promotes relaxation",
      common_effects: ["stress relief", "calmness"]
    },
    {
      name: "Coffee Beans",
      properties: "Rich flavor; provides a natural energy boost",
      common_effects: ["energy", "alertness"]
    }
  ];
  
  module.exports = { products, ingredientInformation };