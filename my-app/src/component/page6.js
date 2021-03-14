import React, {useEffect, useState} from 'react';
import Title from './title';
import ZoomButton from './zoomButton'
import Display from './display'
import '../style.css';

const Zoomdata = () => {
    const [isNew, setIsNew] = useState(false)
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

    const updateTask = async (id, ntitle, nday, ntextInfor, nImportant) => {
        const editTask = {title: ntitle, day: nday, textInfor: ntextInfor,  important : nImportant}

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
            task.id === id ? { ...task, title: ntitle, day: nday, textInfor: ntextInfor, important: nImportant} : task
            )
        )
    }

    const onCreate = () => {    setIsNew(!isNew);    }



    return (
        <div>
            <body> 
                <div className = "jaja">
                    <ZoomButton onCreate={onCreate} isNewTask={isNew}/>
                    <Title />
                    <Display onAdd={addTask}  tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} isNewTask={isNew}/>
                </div>
            </body>
        </div>
    )
}

export default Zoomdata;