import React, {useEffect, useState} from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Title from './title';
import ZoomButton from './zoomButton'
import '../style.css';

const Zoomdata = () => {
    const [tasks, setTasks] = useState([])


    useEffect (() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [])

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
    }

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }

    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`,
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
        const taskToToggle = await fetchTask(id)
        const editTask = { ...taskToToggle, title: taskToToggle.title, day: taskToToggle.day, textInfor: taskToToggle.textInfor,  important : !(taskToToggle.important)}

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method : 'PUT',
            headers : {
                'Content-type' :'application/json',
            },
            body: JSON.stringify(editTask)
        })
        const data = await res.json()

        setTasks(
            tasks.map((task) =>
            task.id === id ? { ...task, title: taskToToggle.title, day: taskToToggle.day, textInfor: taskToToggle.textInfor, important: data.important} : task
            )
        )
    }

    return (
        <div>
            <body> 
                <div className = "jaja">
                        <Title/>
                        <ZoomButton/>
                        <AddTask onAdd={addTask}/>
                        <Tasks tasks={tasks} onDelete={deleteTask} onUpdate={updateTask}/>
                </div>
            </body>
        </div>
    )
}

export default Zoomdata;