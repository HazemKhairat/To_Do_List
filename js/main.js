let input = document.querySelector("input")
let button = document.querySelector(".btn")
let span = document.querySelector("span")
let divTasks = document.querySelector("#tasks")
let AllTasks = [];


let renderTasks = () => {
    if ((input.value).trim() == "") {
        alert("Pleas enter task to add")
    } else {
        singleTask = {
            task: input.value,
        }
        AllTasks.push(singleTask)
        input.value = ""
        display_tasks();

    }
}

let Delete = (index) =>{
    AllTasks.splice(index, 1);
    display_tasks();
}


let display_tasks = () => {
    span.innerText = AllTasks.length
    divTasks.innerHTML = "";
    AllTasks.forEach((element, index) => {
    divTasks.innerHTML += `<div class="caption">
    <h3>${element.task}</h3>
    <input type="text" class="edit-input" value="${element.task}" style="display: none;">
    <input type="hidden" class="task-index" value="${index}">
</div>
<div class="action">
    <button class="success edit-save-btn"><span>Edit</span></button>
    <button onclick="Delete(${index})" class="danger">Delete</button>
</div>`
    })
}


document.addEventListener("click", function(event) {
    if (event.target.classList.contains("edit-save-btn")) {
        let captionDiv = event.target.parentNode.parentNode.querySelector(".caption");
        let taskText = captionDiv.querySelector("h3");
        let editInput = captionDiv.querySelector(".edit-input");
        let taskIndex = captionDiv.querySelector(".task-index").value;
        let buttonText = event.target.querySelector("span");

        if (buttonText.innerText === "Edit") {
            buttonText.innerText = "Save";
            taskText.style.display = "none";
            editInput.style.display = "block";
            editInput.focus();
        } else {
            buttonText.innerText = "Edit";
            taskText.innerText = editInput.value;
            taskText.style.display = "block";
            editInput.style.display = "none";
            AllTasks[taskIndex].task = editInput.value;
        }
    }
});


button.addEventListener("click", renderTasks)