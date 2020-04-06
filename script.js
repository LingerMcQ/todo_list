document.addEventListener("DOMContentLoaded", () => {

    // Variables
    let newTaskText = document.querySelector("#newTaskInput");
    let addNewTaskBtn = document.querySelector("#btn__addNewTask");
    let taskListUl = document.querySelector(".taskList__ul");


    function checkKeyEnter(e) {
        var keyCode = e.keyCode;
        if (keyCode == 13) {
            checkInput();
        }
    }

    function checkInput () {
        let content = newTaskText.value.trim();
        if (content) {
            addTask(content);
            newTaskText.value = '';
        }
    }

    function addTask (content) {

        // add a task to the list
        var taskItem = document.createElement("li");
        var taskItemText = document.createElement("p");
        var taskItemIconsCheck = document.createElement("ion-icon");
        var taskItemIconsTrash = document.createElement("ion-icon");
        
        taskItem.classList.add("taskList__task", "taskList__task--incompleted");
        taskItemIconsCheck.classList.add("icon", "taskList__task__icon__check--incompleted");
        taskItemIconsTrash.classList.add("icon", "taskList__task__icon__trash");

        taskItemIconsCheck.setAttribute("name", "ellipse-outline")
        taskItemIconsTrash.setAttribute("name", "trash-outline")

        taskItemText.textContent = content;

        taskItem.appendChild(taskItemIconsCheck);
        taskItem.appendChild(taskItemText);
        taskItem.appendChild(taskItemIconsTrash);
        
        taskListUl.appendChild(taskItem);


        // complete the task
        taskItemIconsCheck.onclick = () => {
            

            if (taskItemIconsCheck.classList.contains("taskList__task__icon__check--incompleted")) {
                taskItemIconsCheck.removeAttribute("name");
                taskItemIconsCheck.setAttribute("name", "checkmark-circle");
                toggleIconClassList();
            } else if (taskItemIconsCheck.classList.contains("taskList__task__icon__check--completed")) {
                taskItemIconsCheck.removeAttribute("name");
                taskItemIconsCheck.setAttribute("name", "ellipse-outline");
                toggleIconClassList();
            }

            function toggleIconClassList() {
                taskItem.classList.toggle("taskList__task--incompleted");
                taskItem.classList.toggle("taskList__task--completed");
                taskItemIconsCheck.classList.toggle("taskList__task__icon__check--incompleted");
                taskItemIconsCheck.classList.toggle("taskList__task__icon__check--completed");
            }
        }
    
        // incomplete the task
        
    
        // delete the task
        taskItemIconsTrash.onclick = () => {
            taskItem.parentNode.removeChild(taskItem);
        }
    }

    




    addNewTaskBtn.addEventListener("click", checkInput, false)
    document.addEventListener("keypress", checkKeyEnter, false)



}, false)