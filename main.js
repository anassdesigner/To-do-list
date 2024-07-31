const inputbox = document.getElementById("box");
const List = document.getElementById("list");

//create alert, remove button and edit button 

function AddWork(){
     if(inputbox.value === ''){
        alert("you must write something!")
     }
     else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        List.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        let editbtn = document.createElement("editbtn");
        editbtn.innerText = "edit";
        li.appendChild(editbtn);

  
    editbtn.addEventListener('click', () => {
        inputbox.value = list.innerText;
        const parent = editbtn.parentElement;
        parent.parentElement.removeChild(parent);
    });

     }
     inputbox.value = "";
     saveData();
}

//checked and remove function

List.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);

//Store Data in local Storage


function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();
