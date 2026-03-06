import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Porsche911GT3R from "../Assets/Porsche911GT3R.png";
import LamborghiniUrusSE from "../Assets/LamborghiniUrusSE.png"
import McLaren720s from "../Assets/McLaren720s.png";
import BuggatiReSide from "../Assets/BuggatiReside.png";
import MercedesBenz300SL from "../Assets/MercedesBenz300SL1954.png";

const cars = [
  { name: "Porsche 911 GT3R", img: Porsche911GT3R, slogan: "NASCIDO PARA VENCER." },
  { name: "Lamborghini Urus SE", img: LamborghiniUrusSE, slogan: "CONQUISTE QUALQUER CAMINHO." },
  { name: "McLaren720s", img: McLaren720s, slogan: "VELOCIDADE EM ESTADO DE ARTE." },
  { name: "Buggati Chiron ", img: BuggatiReSide, slogan: "PERFORMANCE SEM LIMITES." },
  { name: "Mercedes Benz 300SL 1954", img:MercedesBenz300SL , slogan: "BELEZA ETERNA. ENGENHARIA LENDÁRIA."},
];

export default function CarrouselCar() {
  return (
    <div className="justify-self-center w-full vh-300 overflow-hidden">
      <div className="relative  bg-white py-10 ">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          wrapperClass="flex justify-self-center place-items-center m-auto"
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          className="mySwiper"
        >
          {cars.map((car, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`flex flex-col items-center transition-all duration-500  ${isActive ? "opacity-100 scale-100" : "opacity-30 scale-90"}`}
                >
                  <h2 className="text-4xl font-black italic tracking-tighter mb-4">
                    {car.name}
                  </h2>

                  <h3 className="text-6xl font-extrabold uppercase text-gray-800 mb-8 text-center max-w-2xl">
                    {car.slogan}
                  </h3>

                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full max-w-4xl object-contain scale-90"
                  />

                  <div
                    className={`flex gap-4 mt-10 transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <button className="bg-[#C59958] text-white px-8 py-3 font-bold uppercase text-xs flex items-center gap-2 hover:bg-[#121212] transition-all">
                      Explore the model <span>→</span>
                    </button>
                    <button className="border border-[#121212] px-8 py-3 font-bold uppercase text-xs flex items-center gap-2 hover:bg-[#121212] hover:text-white transition-all">
                      Download Brochure <span>↓</span>
                    </button>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="button-prev absolute left-10 top-1/3 -translate-y-1/2 z-10 border border-gray-400 p-4 rounded-sm hover:bg-[#121212] hover:text-white transition-all">
          ←
        </button>
        <button className="button-next absolute right-10 top-1/3 -translate-y-1/2 z-10 border border-gray-400 p-4 rounded-sm hover:bg-[#121212] hover:text-white transition-all">
          →
        </button>
      </div>
    </div>
  );
}
