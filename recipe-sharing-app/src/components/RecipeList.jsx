 // RecipeList component//
  import { useRecipeStore } from './recipeStore';
  import {link} from "react-router-dom";

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
	  const filteredRecipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
		<link rel="link" href="favicon.ico" />>
          </div>
        ))}
      </div>
    );
  };

export default RecipeList;
