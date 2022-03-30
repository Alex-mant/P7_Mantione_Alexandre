import {storage} from "../constants/dataStorage.js";
import {dom} from "../constants/domElement.js";
import { LockUnlockEmptyList } from "./dropdown.js";
import {research } from "./research.js";

const specificsInputs = document.querySelectorAll(".text-btn")
let searchValue;
/*--------------------------FUNCTION-----------------------------*/

const createTag = (tags) => {
    // dom.tagSection.style.display = "flex"
    // let div = document.createElement("div");
    // let span = document.createElement("span");
    // let cross = document.createElement("i");
    
    // div.classList.add("tag");     
    // span.classList.add("tagName");
    // cross.classList.add("far","fa-times-circle");
    
    // span.innerText = tags.path[0].innerText;
    // searchValue = span.innerText;
    
    // dom.tagSection.appendChild(div);
    // div.appendChild(span);
    // div.appendChild(cross);   
    
    // div.style.background = getComputedStyle(tags.path[1]).backgroundColor;
    
    // let searchBarFilter = document.querySelector("input");
    // searchBarFilter.value += " "+searchValue;
    
    // cross.addEventListener("click", function(cross){
    //     closeTag(cross);
    //     let thisValue = cross.path[1].innerText
    //     searchBarFilter.value = searchBarFilter.value.replace(thisValue,"")
    //     research(storage.allRecipes, "searchTagFilters");
    //     LockUnlockEmptyList();
    // })
    
}

export const searchSpecificTag = () => {
    // specificsInputs.forEach(sInput => {
    //     sInput.addEventListener("input", () => {
    //         let search = new RegExp(sInput.value, 'gi');
    //         Array.from(sInput.parentElement.parentElement.children[1].children).forEach(el => {
    //             if(search.test(el.innerText)){
    //                 el.classList.remove("dNone");
    //             }else{
    //                 el.classList.add("dNone")
    //             }
    //         })            
    //     })
    // })
}


const closeTag = (element) => {

    // element.path[1].remove()
    
    // if(dom.tagSection.children.length === 0){
    //     dom.tagSection.style.display = "none"
    // }
}

export const tagEvents = (liste) => {
    // let elementList = Array.from(liste.children);
    // elementList.forEach((tags) => {
    //     tags.addEventListener("click", function (tags) {
    //         createTag(tags)
    //         research(storage.allRecipes, "searchTagFilters");
    //         specificsInputs.forEach(inputs => {
    //             inputs.value = "";
    //         })
    //         LockUnlockEmptyList();
    //     });        
        
    // });       
};
