import React from "react";

const Body = () => {
  return (
    <section>
      <div className="flex flex-col bg-slate-100 mt-16 rounded-xl gap-6 p-16">
        <div>
          <h1 className=" font-semibold text-center text-3xl ">
            Сохраняйте время, энергию и деньги <br />
            для того, что важно именно вам
          </h1>
        </div>

        <div className="flex md:flex-row flex-col justify-between  text-center leading-[1.28] text-[17px] font-light">
          <div className=" flex flex-col  items-center">
            <img className="w-[84px] h-[74px]" src="/image/one.jpg" alt="" />
            <p>
              Доставим день в день, <br />в удобное для <br />
              вас время
            </p>
          </div>
          <div className=" flex flex-col  items-center">
            <img className="w-[84px] h-[74px]" src="/image/two.jpg" alt="" />
            <p>
              Донесём тяжёлые <br />
              сумки прямо до <br />
              вашей двери
            </p>
          </div>

          <div className=" flex flex-col  items-center">
            <img className="w-[84px] h-[74px]" src="/image/three.jpg" alt="" />
            <p>
              Выберем лучшие <br />
              товары с полок <br />
              магазинов
            </p>
          </div>
          <div className=" flex flex-col  items-center">
            <img className="w-[84px] h-[74px]" src="/image/four.jpg" alt="" />
            <p>
              Тысячи товаров <br />
              со скидками до 60%
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around leading-[1.28 p-16 text-[22px]">
        <div className="flex flex-col gap-8">
          <p>
            <span className=" text-green-600 font-bold">Более 3 миллионов</span>{" "}
            заказов в месяц <br />
            доставляют наши курьеры
          </p>
          <p>
            Мы стали незаменимым помощником <br />
            для{" "}
            <span className=" text-green-600 font-bold">
              миллионов людей
            </span>{" "}
            по всей России
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p>
            <span className=" text-green-600 font-bold">Более 130</span>{" "}
            федеральных и региональных <br />
            ретейлеров — наши партнёры
          </p>
          <p>
            <span className=" text-green-600 font-bold">
              Более 50 тысяч компаний
            </span>{" "}
            доверяют нам <br />
            закупку продуктов и товаров для офиса
          </p>
        </div>
      </div>

      <div className="relative sm:mt-16 flex w-full h-full">
        <div className="absolute max-w-[500px] gap-6 flex flex-col sm:pt-20 pl-16">
          <h1 className="font-bold text-[32px] leading-10">
            Заказывайте продукты <br />и канцелярию для бизнеса
          </h1>
          <p className="text-[18px] leading-6">
            Профиль компании, закрывающие документы <br />и круглосуточная
            поддержка
          </p>
          <button className="bg-green-500  rounded-md text-white py-3 w-[70%] min-h-[55px]">
            Подробнее
          </button>
        </div>
        <img
          className="min-h-[365px] w-full h-full"
          src="/image/bgmarket.webp"
          alt="bgmarket"
        />
      </div>

      

       

    </section>
  );
};

export default Body;
