const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const newTask = document.getElementById("new-task").value;
    if (newTask !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
      <input type="checkbox">
      <span>${newTask}</span>
      <span class="status">En cours</span>
      <button class="delete-btn">Supprimer</button>`;
        taskList.appendChild(li);
        document.getElementById("new-task").value = "";
        const deleteBtn = li.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });
        const checkbox = li.querySelector("input[type='checkbox']");
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                li.querySelector(".status").textContent = "Fait";
            } else {
                li.querySelector(".status").textContent = "En cours";
            }
        });
    }
});
