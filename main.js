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
  listItem.innerText = input.value;
  orderedList.appendChild(listItem);
  //listItem = true;
})

//*<------------- Remove All Items ------------->*//

removeAll.addEventListener('click', function(){
  orderedList.removeAll("li")
})




//*<------------- Mark Items As Complete ------------->*/

  for (let i = 0; i < orderedList.length; i++) {
        console.log(orderedList);
  orderedList[i].classList.addEventListener('click', function(){
        orderedList[i].style.textDecoration = "line-through";
  } )
      
  
};

completedTasks();
  
  //items.style.textDecoration = "line-through";





//*<------------- Stretch Goals ------------->*//