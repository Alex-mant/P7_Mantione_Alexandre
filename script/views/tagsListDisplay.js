import { tagEvents } from "../utils/helpers/tags.js";

/*-------------------FUNCTION--------------------*/
const removeTagsDeployedFromList = () => {
    const tagFilter = document.querySelectorAll(".tagFilter");
    const searchBar = document.querySelector("input");
    
    tagFilter.forEach(filter => {
        if(searchBar.value.includes(filter.innerText)){
            filter.remove();
        }
    })
}

export const tagListDisplay = (array, tagList) => {
    if(tagList.classList.contains("ingredients-tags")){
        tagList.innerHTML = array.map((el) => `<p class="tagFilter ingFilter">${el}</p>`).join("");
    }else if(tagList.classList.contains("appliance-tags")){
        tagList.innerHTML = array.map((el) => `<p class="tagFilter appFilter">${el}</p>`).join("");
    }else if(tagList.classList.contains("ustensils-tags")){
        tagList.innerHTML = array.map((el) => `<p class="tagFilter ustFilter">${el}</p>`).join("");
    }

    tagEvents(tagList);
    removeTagsDeployedFromList()
}
