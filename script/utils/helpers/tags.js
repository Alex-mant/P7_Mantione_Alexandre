import {dom} from "../constants/domElement.js";
import { LockUnlockEmptyList } from "./dropdown.js";
import {pathForMozilla} from "./tools.js";

const specificsInputs = document.querySelectorAll(".text-btn");

/*--------------------------FUNCTION-----------------------------*/
const createTag = (tags) => {
    pathForMozilla();
    dom.tagSection.style.display = "flex";
    let div = document.createElement("div");
    let span = document.createElement("span");
    let cross = document.createElement("i");
    
    div.classList.add("tag");     
    span.classList.add("tagName");
    cross.classList.add("far","fa-times-circle");
    
    span.innerText = tags.path[0].innerText;

    if(tags.path[1].classList.contains("ingredients-tags")){
        div.classList.add("ingredientsFilters");
    }if(tags.path[1].classList.contains("appliance-tags")){
        div.classList.add("appliancesFilters");
    }if(tags.path[1].classList.contains("ustensils-tags")){
        div.classList.add("ustensilsFilters");
    }
    
    
    
    dom.tagSection.appendChild(div);
    div.appendChild(span);
    div.appendChild(cross);   
    
    div.style.background = getComputedStyle(tags.path[1]).backgroundColor;
        
    cross.addEventListener("click", function(cross){
        closeTag(cross);
        LockUnlockEmptyList(
        )
    })    
}

export const searchSpecificTag = () => {
    specificsInputs.forEach(sInput => {
        sInput.addEventListener("input", () => {
            let search = new RegExp(sInput.value, 'gi');
            Array.from(sInput.parentElement.parentElement.children[1].children).forEach(el => {
                if(search.test(el.innerText)){
                    el.classList.remove("dNone");
                }else{
                    el.classList.add("dNone")
                }
            })            
        })
    })
}

const closeTag = (element) => {
    element.path[1].remove()    
    if(dom.tagSection.children.length === 0){
        dom.tagSection.style.display = "none"
    }
}

export const tagEvents = (liste) => {
    let elementList = Array.from(liste.children);
    elementList.forEach((tags) => {
        tags.addEventListener("click", function (tags) {
            createTag(tags);
            LockUnlockEmptyList()
        }); 
    });       
};
