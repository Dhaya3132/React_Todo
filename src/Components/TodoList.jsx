import Delete from '../assets/Delete.svg';
const TodoList = ({ data, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id)
  }
  return (
    <div>
      <ul className="bg-slate-50 p-5 rounded-xl flex gap-5">
        {data.map((item) => (
          <li
            className="border-solid border-2 border-slate-300 rounded-md p-5"
            key={item.id}>
            <h2 className="font-Sora text-xl font-light text-600">
              Todo: <span className="font-Sora font-semibold text-xl">{item.text}</span>
            </h2>
            <div className="flex items-center justify-end mt-3">
              <button onClick={()=>handleDelete(item.id)}>
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
