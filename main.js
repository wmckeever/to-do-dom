//*<------------- Query Selectors ------------->*//
let removeAll = document.querySelector('#removeAllButton');
let removeCompleted = document.querySelector('#removeCompletedButton');
let addButton = document.querySelector('#addButton');
let orderedList = document.querySelector('ol');
let items = document.querySelector('li');
let input = document.querySelector('#listItem');




//*<------------- Functional Code ------------->*//
//*<------------------------------------------->*//


//*<------------- Add Item ------------->*//
addButton.addEventListener('click', function(event){
  event.preventDefault();
  console.log("Add Item Button Works")
  
  let listItem = document.createElement("li");

//*<------------- Mark Items As Complete ------------->*//
listItem.addEventListener('click', function(){

  if(listItem.style.textDecoration === "line-through"){
    listItem.style.textDecoration = "";
    listItem.innerText = input.value;
      }else if(listItem.style.textDecoration === ""){
    listItem.style.textDecoration = "line-through"
    listItem.innerText = input.value + " - completed";
   

  }
  });

  listItem.innerText = input.value;
  orderedList.appendChild(listItem);
  
});


//*<------------- Remove All Items ------------->*//

removeAll.addEventListener('click', function(event){
  event.preventDefault();
  let removeItems = document.querySelectorAll('ol li');
    for (let i = 0; i < removeItems.length; i++) {
        olItem1.removeChild(removeItems[i]);
    }
  
});

