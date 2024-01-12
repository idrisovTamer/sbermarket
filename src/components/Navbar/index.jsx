import React from 'react'

const Navbar = () => {
  return (
    <section>
        <div className='flex justify-between'>
            <div className='flex '>
            <button>
            <img className='w-14 h-12' src='/image/menu.png' alt='menu'></img>
            </button>
<img className=' w-auto h-16' src='/image/sbermarket.png' alt='sber-logo'></img>
            </div>

            <div> 
                <button className=' h-14 border rounded-[14px] w-20 font-bold' type='button'>Войти</button>
            </div>
        </div>
    </section>
  )
}

export default Navbar;