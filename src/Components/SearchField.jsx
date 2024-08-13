import { useState } from 'react';
import SearchIcon from '../assets/SearchIcon.svg';

const SearchField = ({search}) => {
    const [searchTexts ,setSearchText] = useState();

    const handleSearchBtn = () => {
        search(searchTexts);
    }
    return (
        <div className='relative flex items-center gap-3'>
            <input type="text" className='pl-2 pr-7 py-2.5 border-solid border-2 border-blue-100 rounded-lg focus:outline-none' placeholder='Search Todo' onChange={(e)=>setSearchText(e.target.value)} id='SearchInput' name='SearchButton' />
            <button className='bg-blue-500 px-3.5 py-2.5 text-white font-Sora font-normal text-md rounded-md flex items-center justify-center' onClick={handleSearchBtn}>
                Search 
                <img src={SearchIcon} alt="search" className='ml-1'/>
            </button>
        </div>
    )
}

export default SearchField;

//Search Field box