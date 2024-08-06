import SearchIcon from '../assets/SearchIcon.svg';

const Search = () => {
    return (
        <div className='relative flex items-center gap-3'>
            <input type="text" className='pl-2 pr-7 py-2.5 border-solid border-2 border-blue-100 rounded-lg focus:outline-none' placeholder='Search Todo' />
            <button className='bg-blue-500 px-3.5 py-2.5 text-white font-Sora font-normal text-md rounded-md flex items-center justify-center'>
                Search 
                <img src={SearchIcon} alt="ADD" className='ml-1'/>
            </button>
        </div>
    )
}

export default Search;