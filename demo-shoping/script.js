const form = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clear= document.getElementById("clear");
const filter = document.getElementById("filter");

let ItemListNew;

function addItem(event) {
    event.preventDefault()
    let newItem = itemInput.value;
    let li = document.createElement('l1');
    let button = document.createElement("button")
    let icon = document.createElement("i");
    button.classList="remove-item btn-link text-red"
    icon.classList="fa-solid fa-xmark"
    li.classList="item-list-product"
    button.appendChild(icon)

    li.appendChild(document.createTextNode(newItem)) 
    li.appendChild(button)
    itemList.appendChild(li)
    // ItemListNew = itemList;
    console.log(itemList.children)
    console.log(itemList.childElementCount)   
    // console.log(li)
    itemInput.value =""
}

function removeAllItems() {
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }
}

function removeItem(event) {
    if(event.target){
        console.log(event.target.parentElement.classList.contains("remove-item"))
        if(event.target.parentElement.classList.contains("remove-item")) {
            event.target.parentElement.parentElement.remove()
        }
    }
}

function filterItem(event) {
    let text = event.target.value.toLowerCase()
    // let items = document.querySelectorAll('li')
    let items = itemList.children
    // itemList.children.item(itemList.
    // let item = ItemListNew.

    // items.forEach((item)=> {
    //     let itemName = item.firstChild;  //.textContent.toLowerCase().trim()

    //     // apples.indexOf(a)
    //     if(itemName.indexOf(text) != -1) {
    //         console.log("flex")
    //         item.style.display = "flex"
    //     } else {
    //         item.style.display = "none"
    //     }
    // })
    for(let i= 0; i< items.length; i++) {
        let itemName = items[i].firstChild.textContent.toLowerCase().trim();
        console.log(itemName);

        //  apples.indexOf(a)
        if(itemName.indexOf(text) != -1) {
            console.log("flex")
            items[i].style.display = "flex"
            // items[i].style.color = "Orange"
        } else {
            items[i].style.display = "none"
        }
    }
    
    
}

form.addEventListener("submit", addItem)
clear.addEventListener("click", removeAllItems);
itemList.addEventListener("click", removeItem);
filter.addEventListener("input", filterItem);