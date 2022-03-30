const recipes = require('./aa-jsonSandBox.js')
recipes.recipes.forEach(recipe => recipe.allIngredients = (recipe.ingredients.map((ing) => ing.ingredient)));

const buildSearchRegex = (search) => {
  const searchWords = search
    .split(' ')
    .filter((searchWord) => searchWord.length > 2);
  const regex = searchWords.map((word) => `(?=.*${word})`).join('') + '.*';
  return new RegExp(regex, 'i');
};

const nameDescFilterApply = (recipes, nameDescFilter) => {
  const regex = buildSearchRegex(nameDescFilter);
  return recipes.filter((recipe) =>
    regex.test(`${recipe.name} ${recipe.description} ${recipe.allIngredients}`)
  );
};

//INGREDIENTS
const ingredientsFilterApply = (recipes, ingredientsFilter) => 
  recipes.filter((recipe) =>
    ingredientsFilter.every((ingredient) => recipe.allIngredients.includes(ingredient))
  );

//FILTER RECIPES FUNCTION
const filterRecipes = (recipes, {nameDescFilter}) => {
  let matchingRecipes = recipes;

  if (nameDescFilter) {
    matchingRecipes = nameDescFilterApply(matchingRecipes, nameDescFilter);
  }
  return {
    matchingRecipes,
  };
};

filterRecipes(recipes, {inputValue})


const x = filterRecipes(recipes.recipes, {
  nameDescFilter: 'crêpe',
  // ustensilsFilter: ["cuillère à soupe"],
  // ingredientsFilter:["Lait de coco"],
});

console.log(x);
