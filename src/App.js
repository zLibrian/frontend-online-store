import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeAppProvider from './context/RecipesAppProvider';

function App() {
  return (
    <div className="meals">
      <RecipeAppProvider>
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </RecipeAppProvider>

    </div>
  );
}

// const test = async () => {
//   console.log(await fetchAPI(ingredientsFoodAPI));
// };

// const test2 = async () => {
//   console.log(await fetchAPI(areasFoodAPI));
// };

// const test3 = async () => {
//   console.log(await fetchAPI(categoryFoodAPI));
// };

// test();
// test2();
// test3();

export default App;
