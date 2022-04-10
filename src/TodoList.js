import todolist from './todos'
import {useState} from 'react'
import NewTodoForm from './NewTodoForm'
// import './TodoList.css'
import {v4 as uuid} from "uuid" 


const TodoList = () => {
    const [todos, setTodos] = useState(todolist)
    const handleRemove = (todo) => {
        const newTodos = todos.filter(td => td != todo)
        setTodos(newTodos)
    }
    const addNewTodo = (newTodo) => {
        setTodos([
            ...todos, newTodo
        ])
    } 

    return (
        <>
        <div>
            <h2>My Todo List</h2>
            {todos.map((td, idx) => 
                <div>{td}
                    <button 
                        onClick={() => handleRemove(td)}
                        key={idx}
                        data-testid={td}>
                        X
                    </button>
                </div>
            )}
            </div>
        <NewTodoForm addNewTodo={addNewTodo}/>
        </>
    )
}

export default TodoList