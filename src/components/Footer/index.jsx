import React from 'react'

const Footer = () => {
  return (
    <section>
        <div className=' flex flex-col md:mt-14 sm:p-8 p-3 mx-2 mt-10 '>
            <div className='mb-4 '>
            <h1 className='font-semibold text-base sm:text-lg md:text-xl lg:text-2xl'>Самые популярные ретейлеры в СберМаркете</h1>
            </div>
            <div className='flex flex-row flex-wrap gap-3 mr-[10px]'>
                <button className='border rounded-full px-4 py-3'>ЕАПТЕКА</button>
                <button className='border rounded-full px-4 py-3 '>FIX PRICE</button>
                <button className='border rounded-full px-4 py-3 '>АШАН</button>
                <button className='border rounded-full px-4 py-3'>ВКУСВИЛЛ</button>
                <button className='border rounded-full px-4 py-3'>METRO</button>
                <button className='border rounded-full px-4 py-3'>ДИКСИ</button>
                <button className='border rounded-full px-4 py-3 '>ЧЕТЫРЕ ЛАПЫ</button>
                <button className='border rounded-full  px-4 py-3'>РИВ ГОШ</button>
                <button className='border rounded-full px-4 py-3 '>МАГНИТ КОСМЕТИК</button>
                <button className='border rounded-full px-4 py-3'>ЛЕНТА</button>
            </div>
        </div>

        <footer className='bg-gray-100 mt-16 pt-6 flex text-center flex-col lg:flex-row lg:text-left '>
  <div className='bg-gray-100 px-8'>
    <img className=' w-80' src='./image/sbermar.png' alt='' />
  </div>

  <div className='sm:flex sm:justify-around  lg:flex-row w-full '>
    <div className='flex flex-col gap-4'>
      <div>
        <h1 className='font-bold'>СберМаркет</h1>
      </div>
      <ul className='leading-[1.7] text-sm'>
        <li>О компании</li>
        <li>Контакты</li>
        <li>Ресторанам</li>
        <li>Стать курьером</li>
        <li>IT-аккредитация</li>
        <li>Промокоды</li>
      </ul>
    </div>
    <div className='flex flex-col gap-4'>
      <div>
        <h1 className='font-bold'>Помощь покупателю</h1>
      </div>
      <ul className='leading-[1.7] text-sm'>
        <li>Как мы работаем</li>
        <li>Зоны доставки</li>
        <li>Доставка и оплата</li>
        <li>Помощь</li>
      </ul>
    </div>
    <div className='flex flex-col gap-4'>
      <div>
        <h1 className='font-bold'>+7 800 222-11-00</h1>
      </div>
      <span>Круглосуточно</span>
    </div>
  </div>
</footer>




    </section>
  )
}

export default Footer;