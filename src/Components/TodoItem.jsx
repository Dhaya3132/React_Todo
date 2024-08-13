import { useState } from "react";
import Add from "./AddField";
import SearchField from "./SearchField";
import { nanoid } from 'nanoid';
import TodoList from "./TodoList";
import Notification from "./Notification";
import DeleteNotification from "./DeleteNotification";

const TodoItem = () => {
  
  const [lists, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [message, setMessage] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);

  const addTodoItem = (input) => {
    const newTodo = {
      id: nanoid(),
      text: input,
    };
    setList([...lists, newTodo]);
  };

  const deleteList = (id) => {
    setDeleteMessage(true);

    setTimeout(() => {
      setDeleteMessage(false);
    }, 1000);

    const filteredData = lists.filter((item) => item.id !== id);
    setList(filteredData);
  };

  const searchList = (searchText) => {
    setSearchText(searchText);
  };

  const searchFilterData = lists.filter((item) =>
    item.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const completeList = (id) => {
    setMessage(true);

    setTimeout(() => {
      setMessage(false);
    }, 1000);

    const completedList = lists.filter((item) => item.id !== id);
    setList(completedList);
  };


  const SaveList = (id, text) => {
    const EditText = lists.map((item) => item.id === id ? { ...lists, text: text } : text)
    setList(EditText);
  }

  return (
    <div className="p-10">
      <h2 className="font-Sora font-semibold text-3xl">My Todos</h2>
      <div className="md:flex justify-between items-center mt-5 mb-5">
        <Add list={addTodoItem} />
        <SearchField search={searchList} />
      </div>

      <TodoList
        data={searchText ? searchFilterData : lists}
        onDelete={deleteList}
        onComplete={completeList}
        onSave={SaveList}
      />

      {message && <Notification />}
      {deleteMessage && <DeleteNotification />}
    </div>
  );
};

export default TodoItem;
