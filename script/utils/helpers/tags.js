import {dom} from "../constants/domElement.js";
let countOfListener = 0;
let elementList;

/*--------------------------FUNCTION-----------------------------*/

const createTag = (tags) => {
    let div = document.createElement("div");
    let span = document.createElement("span");
    let cross = document.createElement("i");

    div.classList.add("tag");     
    span.classList.add("tagName");
    cross.classList.add("far","fa-times-circle");

    span.innerText = tags.path[0].innerText;
    
    dom.tagSection.appendChild(div);
    div.appendChild(span);
    div.appendChild(cross);   
    
    div.style.background = getComputedStyle(tags.path[1]).backgroundColor;
    
    if (countOfListener >= 6){
        div.remove();
    }else{        
        tags.path[0].classList.remove("unselected")       
        tags.path[0].classList.add("selected")       
        countOfListener++;
    }
    
    cross.addEventListener("click", function(cross){
        closeTag(cross)
    })
    
}

const closeTag = (element) => {
    const listOfTags = document.querySelectorAll(".liste-tags p")
    element.path[1].remove()
    countOfListener--;

    listOfTags.forEach((item) => {
        if (item.innerText === element.path[1].children[0].innerText){
            item.classList.replace("selected","unselected")
        }
    })  
}

export const tagEvents = (liste) => {
    elementList = Array.from(liste.children);
    
    elementList.forEach((tags) => {
        tags.addEventListener("click", function (tags) {createTag(tags)});
    });
       
};
