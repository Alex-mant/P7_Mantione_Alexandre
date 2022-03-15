import { dom } from "../utils/constants/domElement.js";

/*-------------------DOM--------------------*/
const recipeSection = document.querySelector("#recipe");

/*-------------------FUNCTION--------------------*/
export const recipesDisplay = (array) => {    
  recipeSection.innerHTML = array.map((recipe) =>
  `
  <article class="recipe dBlock">
    <div class="recipe__img">
      <i class="fas fa-utensils"> ${recipe.servings}</i>
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
            ${//faire fonction traitement Concat
              recipe.ingredients.map((r)=>{
              if (r.quantity){
                return r.ingredient +" : "+ r.quantity +" " + r.unit;
              } else {
                return r.ingredient
              }
            }).join("</br>").replaceAll("grammes","g").replaceAll("undefined","").replaceAll("cuillère à soupe","càs").replaceAll("cuillères à soupe","càs")
            }
          </span>
        </div>
        <div class="recipe__desc__buildOrder">
          <span class="desc__bo">${recipe.description}</span>
        </div>
      </div>
    </div>
  </article>`
  ).join(" ");
};
