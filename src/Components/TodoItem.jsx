import { useState } from "react";
import Add from "./Add";
import Search from "./Search";
import TodoList from "./TodoList";
const TodoItem = () =>{
    const [lists, setlist] = useState([])
    const TodoItem = (input) =>{
        setlist([...lists,input])
    }
    return(
        <div className="p-10">
            <h2 className="font-Sora font-semibold text-3xl">My Todos</h2>
            <div className="flex justify-between items-center mt-5 mb-5">
                <Add list={TodoItem} />
                <Search />
            </div>
            <TodoList data={lists} />
        </div>
    )
}

export default TodoItem;