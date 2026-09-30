import { useState } from "react";
import { todosData } from "../data.js"
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "@heroui/react";
import { FaCheck } from "react-icons/fa";
import { NewTodo } from "./NewTodo.jsx";
import { useEffect } from "react";

export function MyTodos() {
    const [data, setData] = useState(todosData);
    const [remaining, setRemaining] = useState(0);

    useEffect(() => {
        const count = data.filter(({done}) => !done).length
        setRemaining(count)
    }, [data])

    const handleDelete = (id) => {
        setData(prev=> prev.filter(obj =>obj.id!=id))
    }

    const handleCheck = (id) => {
        setData(prev=>prev.map(obj=> obj.id == id ? {...obj, done: !obj.done} : obj))
    }

    const handleAdd = (description) => {
        const newTodo = {
            id: Date.now(),
            description,
            done: false
        }
        setData(prev=>[...prev, newTodo])
    }

    return (
        <div>
            <h2 className="bg-amber-50 p-3 max-w-3xl m-auto text-center font-bold">My todos</h2>
            <NewTodo handleAdd={handleAdd}/>
            <ul className="flex flex-col gap-3 shadow-md max-w-3xl m-auto">
                {data.map(({id, description, done}) => 
                    <li key={id} className="flex justify-between p-5 border-b-2">
                        <Button isIconOnly variant="tertiary" onClick={() => handleCheck(id)}>
                            <FaCheck color={done ? "green" : "gray"}/>
                        </Button>
                        <div style={{textDecoration: done ? "line-through" : "none"}}>
                            {description}
                        </div>
                        <Button isIconOnly variant="danger" onClick={() => handleDelete(id)}>
                            <FaTrashAlt/>
                        </Button>
                    </li>
                )}
            </ul>
            <div>
                { remaining != 0 ? "Elvégzetlen feladatok: " + remaining : "Nincs elvégzetlen feladat"} 
            </div>
        </div>
    )
}