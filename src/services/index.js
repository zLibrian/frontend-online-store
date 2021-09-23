export async function fetchApiRecipesFood(filterSelect, text) {
  let url = 'https://www.themealdb.com/api/json/v1/1/search.php?';
  if (filterSelect === 'i') url = 'https://www.themealdb.com/api/json/v1/1/filter.php?';

  const fetchUrl = await fetch(`${url}${filterSelect}=${text}`);
  const response = await fetchUrl.json();
  return response;
}

export async function fetchApiRecipesDrinks(filterSelect, text) {
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
  if (filterSelect === 'i') url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';

  const fetchUrl = await fetch(`${url}${filterSelect}=${text}`);
  const response = await fetchUrl.json();
  return response;
}
