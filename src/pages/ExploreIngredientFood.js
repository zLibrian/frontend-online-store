import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useRecipesContext } from '../context/Provider';

export default function ExploreIngredientFood() {
  const [ingredientsFood, setIngredientsFood] = useState([]);
  const { setIngredientsMeal } = useRecipesContext();
  const history = useHistory();
  const limits = 12;

  useEffect(() => {
    const getIngredientsFood = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then((res) => res.json());
      setIngredientsFood(response.meals);
    };
    getIngredientsFood();
  }, []);

  async function getFoodFromIngredients(param) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${param}`);
    const data = await response.json();
    setIngredientsMeal([]);
    return setIngredientsMeal(data.meals);
  }

  return (
    <>
      <header className="header">
        <Header title="Explorar Ingredientes" />
      </header>
      <div className="explorarFoodAndDrinks">
        {
          ingredientsFood.map((meal, index) => (
            (index < limits) && (
              <button
                className="btn card"
                name={ meal.stringredient }
                type="button"
                onClick={ ({ target }) => {
                  getFoodFromIngredients(target.getAttribute('name'));
                  return history.push('/comidas');
                } }
              >
                <div>
                  <div data-testid={ `${index}-ingredient-card` }>
                    <img
                      className="card-img-top"
                      name={ meal.strIngredient }
                      src={ `https://www.themealdb.com/images/ingredients/${meal.strIngredient}-Small.png` }
                      data-testid={ `${index}-card-img` }
                      alt={ meal.strIngredient }
                    />
                  </div>
                </div>
                <div
                  name={ meal.strIngredient }
                >
                  <p
                    className="rocksGlass"
                    data-testid={ `${index}-card-name` }
                  >
                    { meal.strIngredient }
                  </p>
                </div>
              </button>
            )
          ))
        }
      </div>
      <Footer />
    </>
  );
}
