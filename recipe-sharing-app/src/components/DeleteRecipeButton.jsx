// DeleteRecipeButton component
  import { useRecipeStore } from './recipeStore';

  const DeleteRecipeButton = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

	  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) })),
	  
		  const navigate = useNavigate();


    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
      </div>
	    <div><button onClick={this.call}>Button
	    </button></div>
    );
  };
