import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Ferrari from "../Assets/Ferrari.png";
import Revuelto from "../Assets/Revuelto.png"
import carCardThree from "../Assets/carCardThree.png"
import carCardFour from "../Assets/carCardFour.png";
import BuggatiReSide from "../Assets/BuggatiReside.png";
import LamboReside from "../Assets/LamboReside.png";

const cars = [
  { name: "Ferrari", img: Ferrari, slogan: "YOU CAN'T HIDE WHO YOU ARE" },
  { name: "REVUELTO", img: Revuelto, slogan: "FROM NOW ON" },
  { name: "SF90 Stradale", img: carCardThree, slogan: "SEILÁ FODASE" },
  { name: "Huayra Roadster ", img: carCardFour, slogan: "CARRO FODA" },
  { name: "Buggati Chiron ", img: BuggatiReSide, slogan: "Velocidade Máxima" },
  { name: "Huracan ", img: LamboReside, slogan: "Super esportivo de respeito"},
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
          wrapperClass="flex justify-self-center m-auto "
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
        <button className="button-prev absolute left-10 top-1/2 -translate-y-1/2 z-10 border border-gray-400 p-4 rounded-sm hover:bg-[#121212] hover:text-white transition-all">
          ←
        </button>
        <button className="button-next absolute right-10 top-1/2 -translate-y-1/2 z-10 border border-gray-400 p-4 rounded-sm hover:bg-[#121212] hover:text-white transition-all">
          →
        </button>
      </div>
    </div>
  );
}
