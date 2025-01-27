const todoList = document.querySelector(".todoList");
const listValue = document.querySelector(".todoValue");
const btn = document.querySelector(".btn");

let todoListValue = [];


const getTodoList = () => {
    return JSON.parse(localStorage.getItem("todoKey")) || []; // [] -> empty array // This method converts a JSON string into a JavaScript object.
}

const  addTodoLIstLocalStorage = (todo) => {
    return localStorage.setItem("todoKey", JSON.stringify(todo)); // This method converts a JavaScript object into a JSON string.


}




const addTodoList = (e) => {
    e.preventDefault() ;// while using a form
    // console.log("hello");
  
    todoListValue = getTodoList();
   let newTodo = listValue.value.trim();

    if(newTodo.length != 0 && !todoListValue.includes(newTodo))  { // if 0 not add to the local storage
     console.log(typeof todoListValue);
  
        todoListValue.push(newTodo);

        todoListValue = [...new Set(todoListValue)] // duplicate not add or remove duplicate


        addTodoLIstLocalStorage(todoListValue); // array

        const list = document.createElement("li");
        list.innerHTML = `
        ${listValue.value}
        `;
        listValue.value = "";
    
        todoList.appendChild(list);
    }    
};




btn.addEventListener("click", (e) => {
    addTodoList(e);
})


todoList.addEventListener("click", () => {
    
})