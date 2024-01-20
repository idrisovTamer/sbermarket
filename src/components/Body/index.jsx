import React from "react";

const Body = () => {
  return (
    <section>
      <div className="flex flex-col bg-slate-100 mt-16 rounded-xl gap-6 p-16">
        <div>
          <h1 className=" sm:font-semibold font-medium text-center sm:text-3xl text-xl ">
            Сохраняйте время, энергию и деньги <br />
            для того, что важно именно вам
          </h1>
        </div>

        <div className="flex sm:flex-row gap-6 flex-col justify-between  text-center leading-[1.28] text-[17px] font-light">
          <div className=" flex flex-col  items-center">
            <img className="w-[84px] h-[74px]" src="./image/one.jpg" alt="" />
            <p>
              Доставим день в день, <br />в удобное для <br />
              вас время
            </p>
          </div>
          <div className=" flex flex-col  items-center">
            <img className="w-[84px] h-[74px]" src="./image/two.jpg" alt="" />
            <p>
              Донесём тяжёлые <br />
              сумки прямо до <br />
              вашей двери
            </p>
          </div>

          <div className=" flex flex-col  items-center">
            <img className="w-[84px] h-[74px]" src="./image/three.jpg" alt="" />
            <p>
              Выберем лучшие <br />
              товары с полок <br />
              магазинов
            </p>
          </div>
          <div className=" flex flex-col  items-center">
            <img className="w-[84px] h-[74px]" src="./image/four.jpg" alt="" />
            <p>
              Тысячи товаров <br />
              со скидками до 60%
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-col lg:flex-row justify-center text-center  lg:justify-around leading-[1.28 p-16 sm:text-lg md:text-2xl lg:text-2xl">
        <div className="flex flex-col lg:gap-8">
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
        <div className="flex flex-col lg:gap-8">
          <p>
            <span className=" text-green-600 font-bold">Более 130</span>{" "}
            федеральных и региональных <br />
            ретейлеров — наши партнёры
          </p>
          <p>
            <span className=" text-green-600 font-bold">
              Более 50 тысяч компаний
            </span>
            доверяют нам <br />
            закупку продуктов и товаров для офиса
          </p>
        </div>
      </div>

      <div className="relative sm:mt-16 flex w-full h-full">
        <div className="absolute max-w-[500px]  sm:gap-6 flex flex-col justify-center items-center pt-16 py-16  md:pt-20 md:pl-16">
          <h1 className="font-bold  md:leading-10 text-xl sm:text-3xl text-center">
            Заказывайте продукты <br />и канцелярию для бизнеса
          </h1>
          <p className="md:text-[18px] text-small sm:leading-6 text-center ">
            Профиль компании, закрывающие документы <br />и круглосуточная
            поддержка
          </p>
          <button className="bg-green-500 sm:mt-0 mt-16  rounded-md text-white py-3 w-[70%] min-h-[55px]">
            Подробнее
          </button>
        </div>
        <img
          className="min-h-[365px] w-full h-full"
          src="./image/bgmarket.webp"
          alt="bgmarket"
        />
      </div>

      <div className="flex flex-col   mt-16 ">
        <div className=" flex justify-center">
          <h1 className=" font-semibold md:text-[32px] sm:text-25-[px]">
            СберМаркет сходит в магазин вместо вас
          </h1>
        </div>

        <div className="flex md:flex-row  flex-col relative mt-4 lg:mt-16 items-center justify-center">
          <img
            className="sm:w-[360px] sm:h-[360px] w-[250px] h-[240px] mx-8"
            src="./image/radius-one.avif"
            alt="sberphone"
          />
          <div className="absolute md:top-0 md:mr-36 mt-40  sm:mt-64 md:mt-0">
            <p className=" bg-gray-100 w-20 h-20 text-center flex items-center justify-center rounded-full text-3xl font-bold">
              1
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-8">
            <p className="md:text-3xl md:leading-10 text-base sm:text-lg items-center justify-center">
              <span className="font-semibold text-green-500">
                {" "}
                Выберите магазин и положите
              </span>{" "}
              <br />в корзину нужные товары
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse relative items-center justify-center mt-6">
          <img
            className="sm:w-[360px] sm:h-[360px] w-[250px] h-[240px] mx-8"
            src="./image/radius-two.avif"
            alt="sberphone"
          />
          <div className="absolute md:top-0 md:ml-80 mt-40  sm:mt-64 md:mt-0">
            <p className="bg-gray-100 w-20 h-20 text-center flex items-center justify-center rounded-full text-3xl font-bold">
              2
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-8">
            <p className="md:text-3xl md:leading-10 text-base sm:text-lg">
              <span className="font-semibold text-green-500">
                Специалист по закупкам соберёт
              </span>{" "}
              <br />
              самые свежие продукты с полок магазина
            </p>
          </div>
        </div>
        <div className="flex relative  md:flex-row flex-col items-center justify-center">
          <img
            className="sm:w-[360px] sm:h-[360px] w-[250px] h-[240px] mx-8"
            src="./image/radius-three.avif"
            alt="sberphone"
          />
          <div className="absolute md:top-0 md:mr-36 mt-40 sm:mt-64 md:mt-0">
            <p className="bg-gray-100 w-20 h-20 text-center flex items-center justify-center rounded-full text-3xl font-bold">
              3
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-8">
            <p className="md:text-3xl md:leading-10 text-base sm:text-lg">
              <span className="font-semibold text-green-500">
                Курьер привезёт продукты
              </span>{" "}
              <br /> в удобное для вас время
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-gray-100 h-full lg:max-h-[313px] mt-8 md:mt-44 items-center justify-around lg:flex-row lg:items-center lg:justify-around rounded-xl gap-4">
        <div className="lg:transform lg:translate-y-[-28px] lg:order-1 order-2">
          <img
            className="w-[365px] h-full lg:h-[368px]"
            src="./image/iphone.avif"
            alt="iphone"
          />
        </div>
        <div className="order-1">
          <div className="flex flex-col text-center lg:text-start items-center lg:items-start">
            <div className="flex">
              <h1 className="text-black lg:text-3xl lg:font-semibold lg:leading-10 text-2xl md:font-medium leading-8 ">
                Скачать приложение <br />в{" "}
                <a className="border-b hover:border-black" href="#">
                  Google play, AppStore, <br />
                  AppGallery, RuStore
                </a>
              </h1>
            </div>
            <div className="bg-white mt-[32px] text-center rounded-md  lg:ml-4 mx-auto  ">
              <button className=" font-semibold border-opacity-5 border rounded-md p-3 hover:bg-gray-100 hover:border-opacity-50">
                ☞ Загрузить .apk
              </button>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:items-center lg:justify-center hidden order-3">
          <img className="w-[206px] h-[206px]" src="./image/qr.avif" alt="qr" />
        </div>
      </div>
    </section>
  );
};

export default Body;
