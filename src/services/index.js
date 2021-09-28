export async function fetchApiRecipesFood(filterSelect, text) {
  let url = 'https://www.themealdb.com/api/json/v1/1/search.php?';
  if (filterSelect === 'i') url = 'https://www.themealdb.com/api/json/v1/1/filter.php?';

  const fetchUrl = await fetch(`${url}${filterSelect}=${text}`);
  let response;
  try {
    response = await fetchUrl.json();
  } catch (e) {
    response = 'ERROR';
  }
  return response;
}

export async function fetchApiRecipesDrinks(filterSelect, text) {
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
  if (filterSelect === 'i') url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';

  const fetchUrl = await fetch(`${url}${filterSelect}=${text}`);
  let response;
  try {
    response = await fetchUrl.json();
  } catch (e) {
    response = 'ERROR';
  }
  return response;
}

export async function fetchApiRecipesFoodMain() {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const fetchUrl = await fetch(url);
  let response;
  try {
    response = await fetchUrl.json();
  } catch (e) {
    response = 'ERROR';
  }
  return response;
}

export async function fetchApiRecipesDrinkMain() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const fetchUrl = await fetch(url);
  let response;
  try {
    response = await fetchUrl.json();
  } catch (e) {
    response = 'ERROR';
  }
  return response;
}

export async function fetchApiListFood() {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const fetchUrl = await fetch(url);
  let response;
  try {
    response = await fetchUrl.json();
  } catch (e) {
    response = 'ERROR';
  }
  return response;
}
export async function fetchApiListDrink() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const fetchUrl = await fetch(url);
  let response;
  try {
    response = await fetchUrl.json();
  } catch (e) {
    response = 'ERROR';
  }
  return response;
}

export async function fetchApiCategoryFood(categoryOfFilter) {
  console.log(categoryOfFilter);

  const url = categoryOfFilter === 'All'
    ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryOfFilter}`;
  const fetchUrl = await fetch(url);
  let request;
  try {
    request = await fetchUrl.json();
    return request;
  } catch (e) {
    request = 'ERROR';
  }
  return request;
}
export async function fetchApiCategoryDrink(categoryOfFilter) {
  console.log(categoryOfFilter);
  const url = categoryOfFilter === 'All'
    ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryOfFilter}`;
  const fetchUrl = await fetch(url);
  let request;
  try {
    request = await fetchUrl.json();
    return request;
  } catch (e) {
    request = 'ERROR';
  }
  return request;
}
