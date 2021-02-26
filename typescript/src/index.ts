import { TodoItem } from './todoItem'
import { TodoCollection } from './todoCollection'

let todos: TodoItem[] = [
  new TodoItem(1, "Buy flowers"),new TodoItem(2, "Learn typescript"),
  new TodoItem(3, "Collect harvey"),new TodoItem(4, "Feed cats"),
]

let collection: TodoCollection = new TodoCollection("Kerryn", todos);

console.clear()
console.log(`${collection.userName}'s Todo List`)

let newId = collection.addTodo("Go for a run")
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();