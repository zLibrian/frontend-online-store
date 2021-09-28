import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useRecipesContext } from '../context/Provider';

import { getDetails } from '../services';

export default function DetailsRecipe() {
  const [recipeDetails, setRecipeDetails] = useState({});

  const { id } = useParams();
  const { pathname } = useLocation();
  const type = pathname.includes('comidas') ? 'foods' : 'drinks';

  const { recipesApp, setRecipesApp } = useRecipesContext();

  // Executa a função "getItem" quando o componente é montado;
  useEffect(() => {
    const getItem = async (itemType, itemID) => {
      setRecipesApp((prevState) => ({ ...prevState, loading: true }));
      const item = await getDetails(itemType, itemID);
      const [details] = item.meals || item.drinks;

      // Salva os detalhes recebidos pela API no estado;
      setRecipeDetails(details);
      setRecipesApp((prevState) => ({ ...prevState, loading: false }));
    };
    getItem(type, id);
  }, [id, setRecipeDetails, type, setRecipesApp]);

  return (
    <p>{!recipesApp.loading && console.log(recipeDetails)}</p>
  );
}
