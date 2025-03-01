import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],

	addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

	deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) })),

	updateRecipe: (renewRecipe) => set(state => ({ recipes: [...state.recipes, renewRecipe] })),


  setRecipes: (recipes) => set({ recipes })
}));
