const Navbar = () => {
    return (
        <nav className="shadow-md flex justify-between items-center text-white py-6 px-8 w-screen ">
            <div className="flex items-center">
                <img src="/assets/wave.gif" alt="Wave" className="w-10 h-10" />
                <h1 className="font-bold text-xl">Robert S.</h1>
            </div>

            <ul className="flex gap-10 font-bold">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar