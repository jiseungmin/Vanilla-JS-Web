const todo = document.getElementById("to-form")
const todoinput = document.querySelector("#to-form input")
const todolist = document.getElementById("todo-list")
let array =[]

function save(){
  localStorage.setItem("todos", JSON.stringify(array))
}

function deletebutton(event){
  const li = event.target.parentElement
  li.remove()
  array = array.filter((todo)=> todo.id !== parseInt(li.id))
  save()
}

function paintToDo(newtodo){
  const li = document.createElement("li")
  li.id = newtodo.id
  const span = document.createElement("span")
  span.innerText = newtodo.text
  const button = document.createElement("button")
  button.innerText = "X"
  button.addEventListener("click", deletebutton)
  li.appendChild(span)
  li.appendChild(button)
  todolist.appendChild(li)
}

function hanleacc(event){
  event.preventDefault()
  const newtodo = todoinput.value
  todoinput.value=""
  const newobj = {
    text: newtodo,
    id: Date.now()
  }
  array.push(newobj)
  paintToDo(newobj)
  save()
}

todo.addEventListener("submit", hanleacc)

const savetodos = localStorage.getItem("todos")

if(savetodos != null){
  const parseTodos = JSON.parse(savetodos)
  array = parseTodos
  parseTodos.forEach(paintToDo)
}
