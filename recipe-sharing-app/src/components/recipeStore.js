import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
	favorites: [],

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

//  Zustand Store for Favorites and Recommendations  //
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

  setRecipes: (recipes) => set({ recipes })
}));
