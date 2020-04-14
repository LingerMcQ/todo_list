document.addEventListener(
  "DOMContentLoaded",
  () => {
    // Variables
    let newTaskText = document.querySelector("#newTaskInput");
    let addNewTaskBtn = document.querySelector("#btn__addNewTask");
    let taskListUl = document.querySelector(".taskList__ul");

    // check enter keypress
    function checkKeyEnter(e) {
      var keyCode = e.keyCode;
      if (keyCode == 13) {
        checkInput();
      }
    }

    // trim space and check input content
    function checkInput() {
      let content = newTaskText.value.trim();
      if (content) {
        addTask(content);
        newTaskText.value = "";
      }
    }

    // add a task to the list
    function addTask(content) {
      // creat elements
      var taskItem = document.createElement("li");
      var taskItemText = document.createElement("p");
      var taskItemIconsCheck = document.createElement("ion-icon");
      var taskItemIconsTrash = document.createElement("ion-icon");

      // add class to the elements
      taskItem.classList.add("taskList__task", "taskList__task--incompleted");
      taskItemIconsCheck.classList.add(
        "icon",
        "taskList__task__icon__check--incompleted"
      );
      taskItemIconsTrash.classList.add("icon", "taskList__task__icon__trash");

      // set attribute for icon elements
      taskItemIconsCheck.setAttribute("name", "ellipse-outline");
      taskItemIconsTrash.setAttribute("name", "trash-outline");

      // put user's input content to the element
      taskItemText.textContent = content;

      // assemble the task elements
      taskItem.appendChild(taskItemIconsCheck);
      taskItem.appendChild(taskItemText);
      taskItem.appendChild(taskItemIconsTrash);

      // add the tasks to the ul
      taskListUl.appendChild(taskItem);

      // event handler: complete the task
      taskItemIconsCheck.onclick = () => {
        // change check icon attribute
        if (
          // incompleted --> completed
          taskItemIconsCheck.classList.contains(
            "taskList__task__icon__check--incompleted"
          )
        ) {
          taskItemIconsCheck.removeAttribute("name");
          taskItemIconsCheck.setAttribute("name", "checkmark-circle");
          toggleIconClassList();
        } else if (
          // completed --> incompleted
          taskItemIconsCheck.classList.contains(
            "taskList__task__icon__check--completed"
          )
        ) {
          taskItemIconsCheck.removeAttribute("name");
          taskItemIconsCheck.setAttribute("name", "ellipse-outline");
          toggleIconClassList();
        }

        // change the task and icon class
        function toggleIconClassList() {
          taskItem.classList.toggle("taskList__task--incompleted");
          taskItem.classList.toggle("taskList__task--completed");
          taskItemIconsCheck.classList.toggle(
            "taskList__task__icon__check--incompleted"
          );
          taskItemIconsCheck.classList.toggle(
            "taskList__task__icon__check--completed"
          );
        }
      };

      // event handler: delete the task
      taskItemIconsTrash.onclick = () => {
        taskItem.parentNode.removeChild(taskItem);
      };
    }

    // check click
    addNewTaskBtn.addEventListener("click", checkInput, false);
    // check enter keypress
    document.addEventListener("keypress", checkKeyEnter, false);
  },
  false
);
