const { products, ingredientInformation } = require('./data');

function recommendProducts(desiredEffects) {
  const effects = desiredEffects.map(effect => effect.toLowerCase());
  const matchingProducts = products.filter(product =>
    product.effects.some(effect => effects.includes(effect.toLowerCase()))
  );
  matchingProducts.sort((a, b) => b.sales_data.units_sold - a.sales_data.units_sold);
  return matchingProducts.map(product => ({
    ...product,
    enhancedDescription: enhanceDescription(product)
  }));
}

function enhanceDescription(product) {
  const ingredient = product.ingredients[0]; // Use first ingredient for simplicity
  const info = ingredientInformation.find(i => i.name === ingredient);
  if (info) {
    return `${product.description} Contains ${ingredient}, which has ${info.properties}.`;
  }
  return product.description;
}

function getProductById(id) {
  const product = products.find(p => p.id === parseInt(id));
  if (product) {
    return { ...product, enhancedDescription: enhanceDescription(product) };
  }
  return null;
}

module.exports = { recommendProducts, getProductById };