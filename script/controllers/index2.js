const input = document.querySelector("input"); //querySelectorAll attendu /!\ forEach
const arrows = document.querySelectorAll(".dropdown-arrow");
const recipeSection = document.querySelector("#recipe");
const servings = document.querySelector(".fa-utensils");
const allRecipes = [];
let resultArray = [];

//recupération des données vers le tableau allRecipes
const fetchData = async() => {
  await fetch("../../data/recipes.json")
  .then((res) => res.json())
  .then((promise) => {
    allRecipes.length = 0;
    allRecipes.push(...promise.recipes)
  });  
};

//Affichage des recettes sur plage index
const recipesDisplay = async(array) => {
  await fetchData()
  recipeSection.innerHTML = array.map((recipe) =>
  `
  <article class="recipe">
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
            ${//faire fonction traitement
              recipe.ingredients.map((r)=>{
              if (r.quantity){
                return r.ingredient +" : "+ r.quantity +" " + r.unit;
              } else {
                return r.ingredient
              }
            }).join("</br>").replaceAll("grammes","g").replaceAll("undefined","").replaceAll("cuillères à soupe","càs")
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

recipesDisplay(allRecipes);


// flèche dropdown retournement au click
arrows.forEach((arrow) => {
  arrow.addEventListener("click",() => {
    if (arrow.classList.contains("not-returned")){
      arrow.classList.replace("not-returned","returned")
      arrow.style.transform = "rotate(180deg)";// mettre dans css
    }else{
      arrow.classList.replace("returned","not-returned")
      arrow.style.transform = "rotate(0deg)";// mettre dans css
    }
});
})

//research
function findRecipe (recherche, allRecipes) {
  return allRecipes.filter(recipe => {
    const regex = new RegExp(recherche, 'gi');
    return recipe.name.match(regex)
  })
};

function resultDisplay () {
  resultArray = findRecipe(this.value, allRecipes);
  recipesDisplay(resultArray);
}

input.addEventListener("input", resultDisplay);
