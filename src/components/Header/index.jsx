import React from "react";

const Header = () => {
  return (
    <section className="sm:p-8 mx-2  ">
      <div className="bg-slate-200 rounded-lg h-11 flex justify-around ">
        <button className="bg-green-500 ml-2 text-white font-bold w-full rounded-xl mt-1 mb-1">
          Доставка
        </button>
        <button className="text-gray-400 font-bold w-full">Самовывоз</button>
      </div>

      <div className="flex justify-between p-1 h-auto">
        <div className="relative flex min-h-[300px] md:w-[80%]  ">
        <div className="absolute flex flex-col w-full md:pt-12 pt-24 pl-12 gap-14 lg:pl-16">
          <div className=" flex ml-2">

            <p className="md:font-bold md:text-4xl md:leading-10 text-white leading-7 text-2xl font-medium ">
              Доставка из любимых <br />
              магазинов в Грозном
            </p>
          </div>
            <div className="hidden md:block relative md:w-[70%] lg:w-[40%]  ">
              <input
                type="text"
                placeholder="Ваш адрес"
                className="sm:px-4 sm:py-2 border rounded-[5px]  w-full h-14 font-bold"
              />
              <button className="absolute right-0 py-2 mt-2 px-3 mr-2  text-white border rounded-[5px]">
                ⚓️
              </button>
            </div>
            <div className=" md:hidden w-[90%] ">
              <button className="sm:px-4 sm:py-2 text-green-500 rounded-[5px] font-bold text-sm  w-full h-14  bg-white "> Добавьте свой адрес</button>
            
            </div>
          </div>
          <img
            className="rounded-2xl bg-no-repeat object-cover"
            src="./image/sberchel.webp"
            alt="sberboy"
          />
        
        </div>
        <div className="relative hidden ml-[20px] md:flex w-auto min-h-[300px]">

<div className="absolute flex flex-col justify-between items-center h-full p-[22px] lg:p-[32px]">
  <p className="text-white font-bold text-2xl pl-3">Попробуйте самовывоз</p>
  <button className=" bg-white border rounded text-center w-full h-[15%] ">Продолжить</button>
</div>

<img
  className="rounded-[38px] w-[260px] "
  src="./image/sberpacket.webp"
  alt="package"
/>
</div>

      </div>
 

<div className="flex flex-col gap-2 sm:gap-6 w-auto sm:mt-10 mt-4">
  <h2 className=" pl-4 font-bold text-2xl">Нашли 1 магазин в <span className=" text-green-600">Грозном</span></h2>
  <h4 className="pl-4 text-gray-400 font-bold">Напишите свой адрес — покажем, откуда к вам могут привезти товары</h4>
  <div className=" relative flex py-2 bg-slate-100 rounded-xl justify-between w-full pl-5 ">
    
    <div className=" sm:w-[70%] md:w-[28%] lg:w-[20%] w-[85%] bg-blue-900   py-6 rounded-br-[85px] rounded-l-[10px] relative z-10 ">
      <img className="rounded-xl h-14" src="./image/lentasmall.avif" alt="lenta" />
    </div>
    <div className="absolute   h-[86%] ml-16 md:ml-28 sm:ml-38 lg:ml-32 w-[75%] md:w-[20%]  z-1">
      <img className="h-full w-full rounded-r-[10px] " src="./image/flower.avif" alt="flower" />
    </div>
  </div>
</div>

    </section>
  );
};

export default Header;
