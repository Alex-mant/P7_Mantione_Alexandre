import { data } from "../utils/constants/data/recipes.js"

const recipeSection = document.querySelector("#recipe");

recipeSection.innerHTML = data.map((rec) =>
`
  <article class="recipe">
    <div class="recipe__img"></div>
    <div class="recipe__container">
      <div class="recipe__header">
        <h2>${rec.name}</h2>
        <span><img src="./assets/svg/timer.svg" alt=""/> <span class="recipe__timer">${rec.time} min</span</span>
      </div>
      <div class="recipe__description">
        <div class="recipe__desc__ingredients">
          <span class="listOfIngredients list1">
            <ul>
              <li>${""}</li>
              <li>${""}</li>
              <li>${""}</li>
            </ul>
          </span>
        </div>
        <div class="recipe__desc__buildOrder">
          <span class="desc__bo">${rec.description}</span>
        </div>
      </div>
    </div>
  </article>
`).join(" ");
            
// <li>${rec.ingredients[3].ingredient + " : " + rec.ingredients[0].quantity + rec.ingredients[0].unit}}</li>
// <li>${rec.ingredients[4].ingredient + " : " + rec.ingredients[0].quantity + rec.ingredients[0].unit}}</li>
// <li>${rec.ingredients[5].ingredient + " : " + rec.ingredients[0].quantity + rec.ingredients[0].unit}}</li>