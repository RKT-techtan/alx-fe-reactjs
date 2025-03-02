import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],

	addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

	deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) })),

	updateRecipe: (renewRecipe) => set(state => ({ recipes: [...state.recipes, renewRecipe] })),

	//  Zustand Store for Search and Filtering //
	 searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ))
  })),
}));

       //  favorites array to the Zustand store to manage the user’s favorite recipes  //

	recipes: [],
  favorites: [],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

	//  Components for Favorites and Recommendations  //
	const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

// Favorites and Recommendations into the UI //

  setRecipes: (recipes) => set({ recipes })
}));
