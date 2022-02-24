const input = document.querySelector("input");
const arrows = document.querySelectorAll(".dropdown-arrow");
const recipeSection = document.querySelector("#recipe");
const servings = document.querySelector(".fa-utensils");
const tagArea = document.querySelector("section#tag");
const dropDArrow = document.querySelector(".dropdown-arrow");
const dropDButton = document.querySelectorAll(".button")
const crossCloseFilter = document.querySelectorAll(".fa-times-circle");
const allRecipes = [];
let resultArray = [];

//recupération des données vers le tableau allRecipes
const fetchData = async() => {
  await fetch("../../data/recipes.json")
  .then((res) => res.json())
  .then((promise) => {
    allRecipes.length = 0;
    allRecipes.push(...promise.recipes);
  });  
};

//Affichage des recettes sur plage index
const recipesDisplay = async(array) => {
  await fetchData();
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

recipesDisplay(allRecipes);

// flèche dropdown 
arrows.forEach((arrow) => {
  arrow.addEventListener("click",() => {
    const thisFilter = arrow.parentElement.parentElement;
    if (arrow.classList.contains("not-returned")){
      Array.from(arrows).forEach((arrow) => {
        arrow.classList.replace("returned", "not-returned")
        dropDButton.forEach((btn) => {
          btn.style.width = "170px";
        })
      })
      arrow.classList.replace("not-returned","returned");
      thisFilter.style.width = "600px"
    }else{
      arrow.classList.replace("returned","not-returned");
      thisFilter.style.width = "170px"
    }
  });
});


//research
function findRecipe (recherche, allRecipes) {
  return allRecipes.filter(recipe => {
    const regex = new RegExp(recherche, 'gi');
    return recipe.name.match(regex)
  });
};

function resultDisplay () {
  resultArray = findRecipe(this.value, allRecipes);
  recipesDisplay(resultArray);
};

input.addEventListener("input", resultDisplay);

//test
function test(az){
  let x = document.querySelector(".tag span");
  x.innerText = az;
  x.value = x.innerText;
  x.addEventListener("click", resultDisplay);
}

test("Citron");

// suppression filtre tag
crossCloseFilter.forEach((cross) => {
  cross.addEventListener("click", () => {
    cross.parentElement.parentElement.removeChild(cross.parentElement)
    //suppression du filtre fonctionnellement à faire
  });
});
