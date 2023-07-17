const formAddTodo = document.querySelector(".form-add-todo form")
const todosContainer = document.querySelector(".todos-container")
const inputSearchTodo = document.querySelector(".form-search-todo input")

const addTodo = event => {
  event.preventDefault()
  const inputValue = event.target.add.value.trim()
  
  if(inputValue.length){
    todosContainer.innerHTML += `
    <li style="display: flex; justify-content: space-between;" data-todo="${inputValue}">
      <span>- ${inputValue}</span>
      <img src="./assets/trash.svg" alt="trash" class="trash-icon" data-trash="${inputValue}">
    </li>`
    formAddTodo.reset()
  }
}

const deleteTodo = event => {
  const clickedElement = event.target
  const trashDataValue = clickedElement.dataset.trash 
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)

  if(trashDataValue) todo.remove()
}

const searchTodo = event =>{
  const inputValue = event.target.value.trim().toLowerCase()
  const todos = Array.from(todosContainer.children)
  
  todos.forEach(todo => {
    const todoText = todo.textContent.toLowerCase()
    const isMatch = todoText.includes(inputValue)

    todo.classList.toggle("hidden", !isMatch)
  })
}

formAddTodo.addEventListener('submit', addTodo)
todosContainer.addEventListener('click', deleteTodo)
inputSearchTodo.addEventListener('input', searchTodo)