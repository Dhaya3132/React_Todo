import { useState } from "react";
import Add from "./AddField";
import SearchField from "./SearchField";
import { nanoid } from 'nanoid';
import TodoList from "./TodoList";

const TodoItem = () => {

    const [lists, setlist] = useState([]);
    const [searchText, setSearchText] = useState("");


    const TodoItem = (input) => {
        const newTodo = {
            id: nanoid(),
            text: input,
        }
        setlist([...lists, newTodo]);
    }

    const deleteList = (id) => {
        const filteredData = lists.filter((item) => item.id !== id);
        setlist(filteredData);
    }

    const searchList = (SearchText) => {
        setSearchText(SearchText);
    }

    const searchFilterData = lists.filter((item) => (
        item.text.toLowerCase().includes(searchText.toLowerCase())
    ));


    return (
        <div className="p-10">
            <h2 className="font-Sora font-semibold text-3xl">My Todos</h2>
            <div className="flex justify-between items-center mt-5 mb-5">
                <Add list={TodoItem} />
                <SearchField search={searchList} />
            </div>

            <TodoList data={searchText ? searchFilterData : lists} onDelete={deleteList} />

        </div>
    )
}

export default TodoItem;