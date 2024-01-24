import React from 'react'

const Navbar = () => {
  return (
    <section className='' >
        <div className='flex justify-between'>
            <div className='flex '>
            <button>
            <img className='lg:w-14 w-12 h-10 lg:h-12 ' src='./image/menu.png' alt='menu'></img>
            </button>
<img className=' w-52 sm:w-auto h-16' src='./image/sbermarket.png' alt='sber-logo'></img>
            </div>

            <div className='mr-1'> 
            <button className='sm:h-14 border md:rounded-[14px] rounded-lg sm:w-20 w-18 mt-3 sm:mt-2 h-10 sm:font-bold transition duration-300 font-extralight hover:bg-gray-100 px-1' type='button'>
  Войти
</button>
            </div>
        </div>
        <hr className="my-4 border-t" />
    </section>
  )
}

export default Navbar;