/*-------------------------DOM--------------------------*/
const arrows = document.querySelectorAll(".dropdown-arrow");
const dropDButton = document.querySelectorAll(".button");
const recipeSection = document.querySelector("#recipe");
const tagList = document.querySelectorAll(".liste-tags p");

/*-------------------FUNCTION--------------------*/
export const dropdown = () => {
  const displayTagList = (forEachElement, filter) => {
    let thisTagList = forEachElement.parentElement.parentElement.parentElement.children[1];

    if (forEachElement.classList.contains("returned")){
      thisTagList.style.display = "grid"
      filter.style.borderRadius = "5px 5px 0 0";
      recipeSection.style.marginTop = thisTagList.offsetHeight/15 +"px"
    }

    else if (forEachElement.classList.contains("not-returned")){
      thisTagList.style.display = "none"
      filter.style.borderRadius = "5px";
      recipeSection.style.marginTop = thisTagList.offsetHeight/15 +"px"      
    }
  }
    
  arrows.forEach((arrow) => {
    arrow.addEventListener("click",() => {
      const thisFilter = arrow.parentElement.parentElement;

      if (arrow.classList.contains("not-returned")){
        Array.from(arrows).forEach((arrow) => {
          arrow.classList.replace("returned", "not-returned")
          dropDButton.forEach((btn) => {
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
