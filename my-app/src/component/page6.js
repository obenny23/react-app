import React, {useEffect, useState} from 'react';
import Tasks from './Tasks'
import AddTask from './AddTask';
import '../style.css';

function Zoomdata() {
    const [tasks, setTasks] = useState([])


    useEffect ( () => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [])

    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()
        return data
    }

    const fetchTask = async (id) => {
        const res = await fetch('http://localhost:5000/tasks/${id}')
        const data = await res.json()
        return data
    }

    const deleteTask = async (id) => {
        const res = await fetch('http://localhost:5000/tasks/${id}',
        {method : 'DELETE'})
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const addTask = async (task) => {
        const res = await fetch ('http://localhost:5000/tasks', {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(task),
        })

        const data = await res.json()
        setTasks([...tasks, data])
    }

    const updateTask = async (id) => {
        const taskToToggle = fetchTask(id)
        const upDTask = { ...taskToToggle, important : !taskToToggle.important}

        const res = await fetch('http://localhost:5000/tasks/${id}', {
            method : 'PUT',
            headers : {
                'Content-type' :'application/json',
            },
            body: JSON.stringify(upDTask)
        })
        const data = await res.json()

        setTasks(
            tasks.map((task) =>
            task.id === id ? { ...task, important: data.important} : task
            )
        )
    }

    return (
        <div>
            <body> 
                <div className = "jaja">
                    <button className="zoom" >Create Meeting</button>
                        <h1>Zoom Meeting Manager</h1>
                        <AddTask onAdd={addTask}/>
                        <Tasks tasks={tasks} onDelete={deleteTask} onUpdate={updateTask}/>
                </div>
            </body>
        </div>
    )
}

export default Zoomdata;