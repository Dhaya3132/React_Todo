import AddIcon from '../assets/AddIcons.svg';
import { useState } from 'react';
const Add = ({list}) => {
    const [input, setInput] = useState('')
    const handleAdd = (e) => {
        setInput(e.target.value);
    }
    const handleAddbtn = () => {
        list(input)
    }
    return (
        <div className='relative flex items-center gap-3'>
            <input type="text" onChange={handleAdd} className='pl-2 pr-7 py-2.5 border-solid border-2 border-blue-100 rounded-lg focus:outline-none' placeholder='Add New Todo'/>
            <button className='bg-Vermillion px-3.5 py-2.5 text-white font-Sora font-normal text-md rounded-md flex items-center justify-center' onClick={handleAddbtn}>
                Add
                <img src={AddIcon} alt="ADD" className='ml-1' />
            </button>
        </div>
    )
}

export default Add;