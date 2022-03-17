export const allRecipesTreatment = (allrecipesArray) => {
    allrecipesArray.forEach(element => {
        element["allIngredients"] = [];
        element.ingredients.forEach(subElement => {
            element["allIngredients"].push(subElement.ingredient);
        })
     });
}