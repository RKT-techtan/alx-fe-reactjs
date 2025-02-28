import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],

	addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

	deleteRecipe: (eraseRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

	updateRecipe: (replaceRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),


  setRecipes: (recipes) => set({ recipes })
}));
