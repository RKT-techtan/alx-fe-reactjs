import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
	const Recommendations = useRecipeStore(state => state.favorites.map(id =>
		state.recipes.find(recipe => recipe.id === id)
  ));
	return (
    <div>
      <h2>Recommendations</h2>
      {Recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
