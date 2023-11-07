import React, {useState} from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <nav className={`md:w-[80%] w-[90%] mx-auto relative`}>
        <div className='md:flex justify-between items-center md:py-1 py-4  px-2 bg-red-500'>
          <h1>Welcome</h1>
          <span className="material-symbols-outlined md:hidden absolute right-0 top-[15px]" onClick={e=>setOpen(!open)}>{open? 'close' : 'menu'}
      </span>
          <ul className={`transition-all md:transition-none duration-[5s] md:z-auto  ease-in ${open? 'top-auto' : '-top-20'} md:static absolute md:px-0 md:py-0 px-4 py-5 md:visible md:flex justify-between md:gap-20 ${open? 'visible' : 'hidden'} ${open && 'text-blue-800'}`}>
            <li className='my-5'><a href="">Home</a></li>
            <li className='my-5'><a href="">SignUp</a></li>
            <li className='my-5'><a href="">About</a></li>
            <li className='my-5'><a href="">Reviews</a></li>
          </ul>
        
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
