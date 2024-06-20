const input = document.querySelector("input");

const ul = document.querySelector("ul");

ul.style.textDecoration = "none";

const button = document.querySelector("button");

button.addEventListener("click", () => {

    const listItem = document.createElement("li");

    if (input.value.trim() === "" || input.value.length === 0) {

        alert("List must be filled in!");

    } else {
        const btn = document.createElement("button");
        btn.type = 'button';
        btn.classList.add('btn-delete');

        listItem.textContent = input.value;
        listItem.classList.add('list-task');

        listItem.appendChild(btn);
        btn.textContent = "delete";

        ul.appendChild(listItem);

        btn.addEventListener("click", () => {
            listItem.style.textDecorationLine = "line-through";

        });

        btn.addEventListener("click", () => {
            setTimeout(() => {
                ul.removeChild(listItem);
            },3000);
        });


        input.value = "";
        input.focus();
    }
})