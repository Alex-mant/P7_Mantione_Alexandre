import { recipesDisplay } from "../../views/recipesDisplay.js";
import { tagListDisplay } from "../../views/tagsListDisplay.js";

/*-------------------------DOM-----------------------------*/
const crossCloseFilter = document.querySelectorAll(".fa-times-circle");
const tagSection = document.querySelector("#tag");
/*--------------------------FUNCTION-----------------------------*/

export const tags = (array, liste, newArray) => {
    let elementList = Array.from(liste.children);
    elementList.forEach((tags) => {
        tags.addEventListener("click", () =>{
            let div = document.createElement("div")
            let span = document.createElement("span");
            let cross = document.createElement("i")
            div.classList.add("tag");      
            span.classList.add("tagName");
            cross.classList.add("far","fa-times-circle");
            span.innerText = tags.innerText;
            tagSection.append(div);
            div.append(span);
            div.append(cross);
            
            div.style.background = getComputedStyle(tags.parentElement).backgroundColor;
            
            array = array.filter(tag => tag != tags.innerText)

            console.log(newArray);

            tagListDisplay(array, liste)
            
        })
       
    });
}
