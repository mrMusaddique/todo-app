let form = document.querySelector("form");
let input = document.querySelector(".inp");
let taskBox = document.querySelector(".task-container");

// Form submit handle karein (Click + Enter Key dono kaam karega)
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Page reload hone se rokta hai
    addTask();
});

function addTask() {
    // .trim() check karta hai ki khali spaces na hon
    if (input.value.trim() === "") {
        // Red border + Shake class add karein
        input.classList.add("input-error");
        input.placeholder = "Please enter a task!";
        input.focus();

        // 1.2 second baad error state remove ho jayegi
        setTimeout(() => {
            input.classList.remove("input-error");
            input.placeholder = "Add a task";
        }, 1200);

        return;
    }

    // Main task container
    let task = document.createElement("div");
    task.classList.add("task");

    // Left side container
    let leftSide = document.createElement("div");
    leftSide.classList.add("left-side");

    // Checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            text.classList.add("textLine");
        } else {
            text.classList.remove("textLine");
        }
    });

    // Task text
    let text = document.createElement("span");
    text.innerText = input.value.trim();
    text.classList.add("task-text");

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.type = "button"; // Form submit prevent karne ke liye
    delBtn.innerHTML = '<i class="ri-close-large-fill"></i>';
    delBtn.classList.add("delBtn");

    // Checkbox + text -> leftSide
    leftSide.appendChild(checkbox);
    leftSide.appendChild(text);

    // leftSide + delete button -> task
    task.appendChild(leftSide);
    task.appendChild(delBtn);

    // task -> taskBox
    taskBox.appendChild(task);

    // Delete task logic
    delBtn.addEventListener("click", function () {
        task.remove();
    });

    // Clear input after adding
    input.value = "";
}

