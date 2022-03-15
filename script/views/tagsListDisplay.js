import { tagEvents } from "../utils/helpers/tags.js";

/*-------------------FUNCTION--------------------*/
export const tagListDisplay = (array, tagList) => {
    tagList.innerHTML = array.map((el) =>
    `<p class="tagFilter">${el}</p>`).join("");
    tagEvents(tagList);
}
