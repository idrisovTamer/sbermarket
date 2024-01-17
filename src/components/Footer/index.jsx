import React from 'react'

const Footer = () => {
  return (
    <section>
        <div className=' flex flex-col mt-4 md:mt-14 '>
            <div className='mb-8 '>
            <h1 className='font-semibold text-base sm:text-lg md:text-xl lg:text-2xl'>Самые популярные ретейлеры в СберМаркете</h1>
            </div>
            <div className='flex flex-col lg:flex-row md:justify-around gap-4'>
                <button className='border rounded-full p-2'>ЕАПТЕКА</button>
                <button className='border rounded-full p-2'>FIX PRICE</button>
                <button className='border rounded-full p-2'>АШАН</button>
                <button className='border rounded-full p-2'>ВКУСВИЛЛ</button>
                <button className='border rounded-full p-2'>METRO</button>
                <button className='border rounded-full p-2'>ДИКСИ</button>
                <button className='border rounded-full p-2'>ЧЕТЫРЕ ЛАПЫ</button>
                <button className='border rounded-full p-2'>РИВ ГОШ</button>
                <button className='border rounded-full p-2'>МАГНИТ КОСМЕТИК</button>
                <button className='border rounded-full p-2'>ЛЕНТА</button>
            </div>
        </div>

        <footer className='bg-gray-100 mt-16 flex flex-row justify-around text-left pt-6'>
        <div className=' bg-gray-100 w-[210px] h-[70px]'>
            <img className='bg-gray-100' src='/image/sbermar.png' alt=''/>
        </div>

  <div className='flex flex-col gap-6'>
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

  <div className='flex flex-col gap-6'>
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
  <div className='flex flex-col gap-6'>
      <div>
          <h1 className='font-bold'>+7 800 222-11-00</h1>
      </div>
      <span>Круглосуточно</span>
  </div>
</footer>



    </section>
  )
}

export default Footer;