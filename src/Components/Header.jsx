import Logo from '../assets/Logo.png';
const Header = () => {
    return (
        <div className='p-5'>
            <nav className='flex gap-5 p-4 border-solid border-b-4 border-slate-200'>
                <img src={Logo} alt="Logo" className='w-8 h-8' />
                <h2 className="font-Sora text-lg font-semibold">Todo Manager</h2>
            </nav>
        </div>
    )
}

export default Header;