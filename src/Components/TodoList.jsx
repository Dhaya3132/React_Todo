import { useState } from 'react';
import Delete from '../assets/Delete.svg';
const TodoList = ({ data, onDelete, onComplete, onSave }) => {

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleDelete = (id) => {
    onDelete(id)
  }
  const handleComplete = (id) => {
    onComplete(id);
  }
  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text)
  }
  const handleSave = (id) => {
    onSave(id, editText)
  }

  return (
    <div>
      <ul className="bg-gray-50 p-5 rounded-xl flex flex-col gap-5 shadow-xl">
        {data.map((item) => (
          <li className="border-solid border-2 border-slate-200 rounded-md p-2.5" key={item.id}>
            {editId === item.id 
            ? (<div><input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} className='border-2 border-solid border-slate-200 bg-transparent rounded-xl p-2' /> <button onClick={() => handleSave(item.id)} className='bg-blue-400 px-5 py-2 text-Sora font-semibold text-white rounded-xl'>Save</button></div>)
            : (<h2 className="font-Sora md:text-lg font-light text-600 text-base">Todo: <span className="font-Sora font-semibold md:text-3xl text-xl">{item.text}</span></h2>)}
            <div className="flex items-center justify-end mt-3 gap-3">
              <button onClick={() => handleEdit(item.id, item.text)} className='font-Sora text-xs font-semibold items-center border-solid border-2 border-slate-200 px-3 py-3 rounded-2xl hover:bg-blue-600 hover:text-white'>
                Edit
              </button>
              <button onClick={() => handleComplete(item.id)} className='flex font-Sora text-xs font-semibold items-center border-solid border-2 border-slate-200 px-3 py-3 rounded-2xl hover:bg-green-600 hover:text-white'>
                Completed
              </button>
              <button onClick={() => handleDelete(item.id)} className='flex font-Sora text-xs font-semibold items-center border-solid border-2 border-slate-200 px-3 py-2 rounded-2xl hover:bg-red-600 hover:text-white'>
                Delete
                <img src={Delete} alt="Delete" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div >
  );
};

export default TodoList;
