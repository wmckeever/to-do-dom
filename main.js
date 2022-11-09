//*<------------- Query Selectors ------------->*//
let removeAll = document.querySelector('#removeAllButton');
let removeCompleted = document.querySelector('#removeCompletedButton');
let addButton = document.querySelector('#addButton');
let orderedList = document.querySelector('ol');
let input = document.querySelector('#listItem');
let totals = document.querySelector('#tasksRemaining');



//*<------------- Functional Code ------------->*//
//*<------------------------------------------->*//


//*<------------- Add Item ------------->*//
addButton.addEventListener('click', function(event){
  event.preventDefault();
  console.log("Add Item Button Works")

  //empty input detection
if(input.value === ""){
  alert("Please enter a valid item to add it to the list. ")
  document.remove("li")
}

  let listItem = document.createElement("li");
  listItem.classList.add('allItems');
  
  
  
  //*<------------- Mark Items As Complete ------------->*//
  listItem.addEventListener('click', function(){
    
    //listItem.innerText = input.value;
    
    if(listItem.style.textDecoration === "line-through"){
      listItem.style.textDecoration = "";
      console.log(listItem.classList);
    }else if(listItem.style.textDecoration === ""){
      listItem.style.textDecoration = "line-through"
      //listItem.innerText = input.value += " - completed";
      listItem.classList.add('completed');
      console.log(listItem.classList);
    }
  });
  
  listItem.innerText = input.value;
  orderedList.appendChild(listItem);
  input.value = "";
  
});
//*<------------- Remove Completed Items ------------->*//
removeCompleted.addEventListener('click', function(event){
  event.preventDefault();
  let completed = document.querySelectorAll('.completed');

  completed.forEach(item => {item.remove()});
});


//*<------------- Remove All Items ------------->*//
removeAll.addEventListener('click', (e)=>{
  e.preventDefault();
  let allItems = document.querySelectorAll('ol li');
  allItems.forEach(item => {item.remove()});
});

//*<------------- Display Total ------------->*//
let itemCount = querySelectorAll('ol li');
let totalCount = querySelector('#totalCount');

for (let i = 0; i < itemCount.length; i++) {

 totalCount.innerText = itemCount.length;
  
}