import {dom} from "../constants/domElement.js";
let countOfListener = 0;
let searchValue;

/*--------------------------FUNCTION-----------------------------*/

const createTag = (tags, category) => {
    dom.tagSection.style.display = "flex"
    let div = document.createElement("div");
    let span = document.createElement("span");
    let cross = document.createElement("i");

    div.classList.add("tag");     
    span.classList.add("tagName");
    cross.classList.add("far","fa-times-circle");

    span.innerText = tags.path[0].innerText;
    searchValue = span.innerText;
    
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
        closeTag(cross);

        //recherche
    })   
    
}

const searchWithT = () => {
    let searchTValue = dom.tagSection.children;

    searchTValue.forEach(tag => {
        
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
    
    if(dom.tagSection.children.length === 0){
        dom.tagSection.style.display = "none"
    }
}

export const tagEvents = (liste) => {
    let elementList = Array.from(liste.children);
    elementList.forEach((tags) => {
        let currentCategory = tags.parentElement.classList[0].split("-")[0];
        tags.addEventListener("click", function (tags) {
            createTag(tags, currentCategory)
            searchWithT()
        });        

    });       
};
