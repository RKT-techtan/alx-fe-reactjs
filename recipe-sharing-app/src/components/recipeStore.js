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

  setRecipes: (recipes) => set({ recipes })
}));
