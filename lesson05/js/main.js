const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
    
// If the input is empty, this prevents anything from happening
  if (input.value != "") {
    const li = document.createElement("li");
    li.textContent = input.value;

    const delete_button = document.createElement("button");
    delete_button.textContent = "❌";

    li.appendChild(delete_button);
    list.appendChild(li);

    // Delete button removes item
    delete_button.addEventListener("click", () => {
      list.removeChild(li);
    });
    // Reset input 
    input.value = "";
  }
});
