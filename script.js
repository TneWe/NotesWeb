const editBtn = document.querySelector(",edit");
const deleteBtn = document.querySelector(",delete");
const noteEl = document.querySelector(",notes");
const textarea = document.querySelector("textarea");
const main = noteEl.querySelector(".main")

editBtn.addEventListener("click", () =>{
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");


});
textarea.addEventListener("input" , ()=>{
const {value} = e.target;
main.innerHTML = marked(value);


});