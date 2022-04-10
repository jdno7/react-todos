import {useState} from 'react'

const NewTodoForm = ({addNewTodo}) => {
    const [todo, setTodo] = useState('')
    const [formData, setFormData] = useState('')
    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewTodo(todo)
        setFormData('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add New Todo</h2>
                <label htmlFor="todo">Todo</label>
                <input type="text" value={todo} onChange={handleChange} name="todo" id="todo"/>
                <button>Add Todo!</button>
            </form>
        </div>
    )
}

export default NewTodoForm