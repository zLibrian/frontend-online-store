import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProgressRecipe.css';

// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

export default function ProgressRecipeDrink({ match: { params: { id } } }) {
  const [drink, setDrink] = useState({});
  useEffect(() => {
    async function getDrink() {
      const site = 'https://www.thecocktaildb.com';
      const beverage = await fetch(`${site}/api/json/v1/1/lookup.php?i=${id}`);
      const beverageJson = await beverage.json();
      const [fetchedDrink] = beverageJson.drinks;
      setDrink(fetchedDrink);
    }
    getDrink();
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
        src={ `${drink.strDrinkThumb}` }
        alt="dish"
      />
      <h1 data-testid="recipe-title">{ drink.strDrink }</h1>
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
      <p data-testid="recipe-category">{ drink.strCategory }</p>
      <div>
        {
          numbers
            .filter((num) => Boolean(drink[ingredients[num - 1]]))
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
                    { `${drink[measures[num - 1]]} ${drink[ingredients[num - 1]]}` }
                  </span>
                </label>
                <br />
              </>
            ))
        }
      </div>
      <p data-testid="instructions">{ drink.strInstructions }</p>
      <button type="button" data-testid="finish-recipe-btn">Receita Finalizada</button>
    </div>
  );
}

ProgressRecipeDrink.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
