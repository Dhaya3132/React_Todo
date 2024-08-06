import Delete from '../assets/Delete.svg';
const TodoList = ({ data }) => {
    return (
        <div>
            <ul className="bg-slate-50 p-5 rounded-xl flex flex-wrap gap-5">
                {
                    data.map((li) => (
                        <li className="border-solid border-2 border-slate-300 rounded-md p-5">
                            <h2 className="font-Sora text-xl font-light text-600">Todo : <span className="font-Sora font-semibold text-xl">{li}</span></h2>
                            <div className="flex items-center justify-end mt-3">
                                <button>
                                    <img src={Delete} alt="" />
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;