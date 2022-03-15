import { recipesDisplay } from "../../views/recipesDisplay.js";
import { tagListDisplay } from "../../views/tagsListDisplay.js";
import { storage } from "../constants/dataStorage.js";
import { dom } from "../constants/domElement.js";

export const classicSearch = (input, elementsArray, classicOrTag) => {
  const tagList = document.querySelectorAll(".tagFilter");
  input.addEventListener("keyup", () => {
    elementsArray.forEach((el) => {
      const parentOfEl = el.parentElement.parentElement.parentElement;

      if (!el.textContent.toLowerCase().includes(input.value.toLocaleLowerCase())) {
        if (classicOrTag === "classic") {
          parentOfEl.classList.remove("dBlock");   
          parentOfEl.classList.add("dNone");   
        } else {
          el.classList.remove("dBlock");
          el.classList.add("dNone");
        }
      } else {
        if (classicOrTag === "classic") {
          
          parentOfEl.classList.remove("dNone");
          parentOfEl.classList.add("dBlock");
        } else {
          el.classList.remove("dNone");
          el.parentOfEl.classList.add("dBlock");
        }
      }
    });
  });
};

/*--------------------------------------------------------------*/

export const tagsSearch = (category) => {
  let array = storage.allRecipes;
  const tags = document.querySelectorAll(".tag");

  if (category === "ustensils" || category === "appliance") {
    tags.forEach((tag) => {
      array = array.filter((item) => item[category].includes(tag.innerText));
    });
  } else {
    tags.forEach((tag) => {
      return array.forEach((item) => {
        array = item[category].filter((element) => {
          element.ingredient.includes(tag.innerText);
        });
      });
    });
  }
  recipesDisplay(array);
};
// display