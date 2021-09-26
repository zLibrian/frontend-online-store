import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProgressRecipe.css';

// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

export default function ProgressRecipeFood({ match: { params: { id } } }) {
  const [meal, setMeal] = useState({});
  useEffect(() => {
    async function getMeal() {
      const dish = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const dishJson = await dish.json();
      const [fetchedMeal] = dishJson.meals;
      setMeal(fetchedMeal);
    }
    getMeal();
  }, []);

  const MAX_INGREDIENTS = 20;
  const [numbers, ingredients, measures] = [[], [], []];
  for (let index = 0; index < MAX_INGREDIENTS; index += 1) {
    numbers.push(index + 1);
  }
  numbers.forEach((num) => ingredients.push(`strIngredient${num}`));
  numbers.forEach((num) => measures.push(`strMeasure${num}`));
  function checkIngredient({ target }) {
    target.checked = true;
    target.disabled = true;
    target.nextSibling.className = 'checkedIngredient';
  }

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ `${meal.strMealThumb}` }
        alt="dish"
      />
      <h1 data-testid="recipe-title">{ meal.strMeal }</h1>
      <button
        data-testid="share-btn"
        type="button"
      >
        Compartilhar
      </button>
      <button
        data-testid="favorite-btn"
        type="button"
      >
        Adicionar aos Favoritos
      </button>
      <p data-testid="recipe-category">{ meal.strCategory }</p>
      <div>
        {
          numbers
            .filter((num) => Boolean(meal[ingredients[num - 1]]))
            .map((num) => (
              <>
                <label key={ num } htmlFor={ `${num}-ingredient-check` }>
                  <input
                    data-testid={ `${num}-ingredient-step` }
                    key={ num }
                    type="checkbox"
                    className="checkbox"
                    id={ `${num}-ingredient-check` }
                    onClick={ checkIngredient }
                  />
                  <span>
                    { `${meal[measures[num - 1]]} ${meal[ingredients[num - 1]]}` }
                  </span>
                </label>
                <br />
              </>
            ))
        }
      </div>
      <p data-testid="instructions">{ meal.strInstructions }</p>
      <button type="button" data-testid="finish-recipe-btn">Receita Finalizada</button>
    </div>
  );
}

ProgressRecipeFood.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
