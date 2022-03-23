import { tagEvents } from "../utils/helpers/tags.js";

/*-------------------FUNCTION--------------------*/
const removeTagsDeployed = () => {
    const tagFilter = document.querySelectorAll(".tagFilter");
    const searchBar = document.querySelector("input");
    tagFilter.forEach(filter => {
        if(searchBar.value.includes(filter.innerText)){
            filter.remove();
        }
    })
}

export const tagListDisplay = (array, tagList) => {
    tagList.innerHTML = array.map((el) =>
    `<p class="tagFilter">${el}</p>`).join("");
    tagEvents(tagList);
    removeTagsDeployed()

}
