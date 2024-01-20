import React from 'react'

const Navbar = () => {
  return (
    <section>
        <div className='flex justify-between'>
            <div className='flex '>
            <button>
            <img className='w-14 h-12' src='./image/menu.png' alt='menu'></img>
            </button>
<img className=' w-48 sm:w-auto h-16' src='./image/sbermarket.png' alt='sber-logo'></img>
            </div>

            <div> 
            <button className='sm:h-14 border rounded-[14px] sm:w-20 w-18 mt-3 sm:mt-0 h-10 sm:font-bold transition duration-300 font-extralight hover:bg-gray-100' type='button'>
  Войти
</button>
            </div>
        </div>
    </section>
  )
}

export default Navbar;