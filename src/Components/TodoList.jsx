import Delete from '../assets/Delete.svg';
const TodoList = ({ data, onDelete, onComplete }) => {
  const handleDelete = (id) => {
    onDelete(id)
  }
  const handleComplete = (id) => {
    onComplete(id);
  }
  return (
    <div>
      <ul className="bg-slate-50 p-5 rounded-xl flex flex-col gap-5">
        {data.map((item) => (
          <li
            className="border-solid border-2 border-slate-300 rounded-md p-2.5"
            key={item.id}>
            <h2 className="font-Sora text-lg font-light text-600">
              Todo: <span className="font-Sora font-semibold text-3xl">{item.text}</span>
            </h2>
            <div className="flex items-center justify-end mt-3 gap-3">
              <button onClick={()=>handleComplete(item.id)} className='flex font-Sora text-xs font-semibold items-center border-solid border-2 border-slate-200 px-3 py-3 rounded-2xl hover:bg-green-600 hover:text-white'>
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
    </div>
  );
};

export default TodoList;
