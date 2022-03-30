import {dom} from "../constants/domElement.js"

/*-------------------FUNCTION--------------------*/
export const dropdown = () => {
  const displayTagList = (forEachElement, filter) => {
    let thisTagList = forEachElement.parentElement.parentElement.parentElement.children[1];

    if (forEachElement.classList.contains("returned")){
      thisTagList.style.display = "flex"
      filter.style.borderRadius = "5px 5px 0 0";
      dom.recipeSection.style.marginTop = thisTagList.offsetHeight/15 +"px"
    }

    else if (forEachElement.classList.contains("not-returned")){
      thisTagList.style.display = "none"
      filter.style.borderRadius = "5px";
      dom.recipeSection.style.marginTop = thisTagList.offsetHeight/15 +"px"      
    }
  }
    
  dom.arrows.forEach((arrow) => {
    arrow.addEventListener("click",() => {
      const thisFilter = arrow.parentElement.parentElement;

      if (arrow.classList.contains("not-returned")){
        Array.from(dom.arrows).forEach((arrow) => {
          arrow.classList.replace("returned", "not-returned")
          dom.dropDButton.forEach((btn) => {
            btn.style.width = "170px";
            btn.style.borderRadius = "5px";
            displayTagList(arrow, thisFilter);
          })
        })
        arrow.classList.replace("not-returned","returned");
        thisFilter.style.width = "690px"
      }

      else{
        arrow.classList.replace("returned","not-returned");
        thisFilter.style.width = "170px";
      }
      
      displayTagList(arrow, thisFilter);

    });
  });
}



// const lockThisTagListFilter = (typeList) => {
//   let thisArrow = typeList.parentElement.querySelector("img");

//   if(typeList.children.length == 1){
//     thisArrow.classList.replace("returned", "not-returned");
//     thisArrow.style.pointerEvents = "none";
//     typeList.parentElement.querySelector("button").style.width = "170px";
//     typeList.parentElement.querySelector("button").style.borderRadius = "5px";
//     typeList.parentElement.querySelector("button").style.backgroundColor = "#80808073";
//     typeList.parentElement.querySelector(".liste-tags").style.display = "none";
//     typeList.parentElement.querySelector("input").disabled = true;
//   }else{
//     thisArrow.style.pointerEvents = "";
//     typeList.parentElement.querySelector("button").style.backgroundColor = getComputedStyle(typeList.parentElement.querySelector(".liste-tags")).backgroundColor;
//     typeList.parentElement.querySelector("input").disabled = false;
//   } 
// }

// export const LockUnlockEmptyList = () => {
//   // let ingredientsList = dom.ingredientsTagList;
//   // let applianceList = dom.appareilsTagList;
//   // let ustensilsList =  dom.ustensilesTagList;

//   // lockThisTagListFilter(ingredientsList);
//   // lockThisTagListFilter(applianceList);
//   // lockThisTagListFilter(ustensilsList);
// }
