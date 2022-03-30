import { concatListOfIngredients } from "../utils/helpers/concatListOfIngredients.js";

/*-------------------DOM--------------------*/
const recipeSection = document.querySelector("#recipe");
/*-------------------FUNCTION--------------------*/

const createRecipeHtml = (recipe) => 
  `
  <article class="recipe dBlock">
    <div class="recipe__img" style='background: url(${recipe.image});'>
      <i class="fas fa-utensils"><span class="serving">${recipe.servings}</span></i>
      
    </div>
    <div class="recipe__container">
      <div class="recipe__header">
        <h2>${recipe.name}</h2>
        <span>
          <img src="./assets/svg/timer.svg" alt=""/>
          <span class="recipe__timer">${recipe.time} min</span>
        </span>
      </div>
      <div class="recipe__description">
        <div class="recipe__desc__ingredients">
          <span class="listOfIngredients list1">
            ${concatListOfIngredients(recipe)}
          </span>
        </div>
        <div class="recipe__desc__buildOrder">
          <span class="desc__bo">${recipe.description}</span>
        </div>
      </div>
    </div>
  </article>`

export const recipesDisplay = (array) => {  
  if (array.length != 0){
    recipeSection.innerHTML = array.map(createRecipeHtml).join("");
  } else {
    document.querySelector("#recipe").innerHTML = "<h3 class='error-message'>Aucun résultat trouvé</h3>"
  }
};
