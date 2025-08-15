let input = document.querySelector(".input-btn input");
let btn   = document.querySelector(".input-btn button");
let listContainer = document.querySelector(".task-container");

btn.addEventListener("click" , () => {
     addTask();
})

function addTask(){
    if( input.value === ""){
        alert("please type something");
    }
    else {
        let newTask = document.createElement("li");
        newTask.innerText = input.value;
        listContainer.appendChild(newTask);
        let span = document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-trash"></i>';
        newTask.appendChild(span);
    }
        input.value = "";
        saveData();

}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("chacked");
        saveData();
    }
    else if(e.target.tagName === "SPAN" || e.target.parentElement.tagName === "SPAN"){
        e.target.parentElement.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();

