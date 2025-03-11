
import React, { useState, useEffect } from 'react'
import { MdDelete } from "react-icons/md";


const TodoList = () => {

    const [input, setInput] = useState("")
    const [todoData, setTodoData] = useState(() => {
        const savedTasks = localStorage.getItem("todos")
        return savedTasks ? JSON.parse(savedTasks) : []
    })

    const [editingIndex, setEditingIndex] = useState(null)


    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoData))
    }, [todoData])


    const handleTodo = (e) => {
        setInput(e.target.value)
    }

    const addTodo = () => {
        if (input.trim() !== "") {
            if (editingIndex !== null) {
                const updateTasks = [...todoData]
                updateTasks[editingIndex] = input
                setTodoData(updateTasks)
                setEditingIndex(null)
            }
            else {
                setTodoData([...todoData, input])
            }
            setInput("")
        }
    }

    const deleteTodo = (index) => {
        const updatedTaks = todoData.filter((_, i) => i !== index)
        setTodoData(updatedTaks)
        setInput("")

    }

    const editTodo = (index) => {
        setInput(todoData[index])
        setEditingIndex(index)
    }
    return (
        <div className=' mt-20 bg-blue-400 md:p-[20px] p-[10px] md:w-[50%] w-full rounded-lg '>
            
            <div className='input-and-add-btn flex justify-between'>
                <input 
                    className='bg-white rounded-bl-lg rounded-tl-lg p-2 text-lg w-[100%]'
                    type="text"
                    onChange={handleTodo}
                    value={input}
                    placeholder='add a Task'
                />
                <button onClick={addTodo} className=' bg-white text-blue-500 text-lg font-semibold
                 hover:bg-blue-200 hover:text-white transition-all cursor-pointer rounded-tr-lg rounded-br-lg'>Add Todo</button>

            </div>

            <div className='ALL-task'>

                {todoData.map((data, index) =>
                    <div className='md:text-2xl text-xl flex justify-between items-center mt-5' key={index}>
                   
                        <p className='text-xl font-semibold text-white '>{data}</p>
                   
                     <div className='flex items-center gap-6 '>
                   
                        <span className='font-semibold text-white text-xl cursor-pointer'
                         onClick={() => editTodo(index)}>edit</span>
                        <span className='text-xl text-white ' onClick={() => deleteTodo(index)} ><MdDelete /></span>
                   
                        </div>
                    </div>
                )}
            </div>




        </div>
    )
}

export default TodoList