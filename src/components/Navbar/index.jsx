import React from 'react'

const Navbar = () => {
  return (
    <section className='' >
        <div className='flex justify-between'>
            <div className='flex '>
            <button>
            <img className='lg:w-14 w-8 h-8 lg:h-12 ml-4' src='./image/menu.png' alt='menu'></img>
            </button>
<img className='  sm:w-auto h-16' src='./image/sbermarket.png' alt='sber-logo'></img>
            </div>

            <div className='mr-1'> 
            <button className='sm:h-10 border  rounded-lg   mt-4 h-10 sm:font-bold transition duration-300 font-medium hover:bg-gray-100  px-3 mr-3' type='button'>
  Войти
</button>
            </div>
        </div>
        <hr className="my-4 border-t" />
    </section>
  )
}

export default Navbar;