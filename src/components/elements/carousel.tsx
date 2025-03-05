"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={1.2}
      centeredSlides={true}
      initialSlide={1}
      spaceBetween={12}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      loop={true}
      className="w-full h-[200px] !pt-2"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[160px] bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-black p-4 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-2 items-center">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <h6 className="font-bold text-[#F82C17] text-sm">
                  Ana Riswati
                </h6>
              </div>
              <div className="flex flex-col -gap-1 items-end">
                <p className="text-xs">Senin</p>
                <p className="text-xs">30 Mei 2022</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <p className="text-xs line-clamp-4">
                Kalimat 1 Kalimat 1 Kalimat 1 Kalimat 1 Kalimat 1 Kalimat 1
                Kalimat 1 Kalimat 1 Kalimat 1 Kalimat 1 Kalimat 1 v v Kalimat 1
                Kalimat 1 Kalimat 1 v Kalimat 1 v Kalimat 1 Kalimat 1 Kalimat 1
                Kalimat 1 Kalimat 1 Kalimat 1 Kalimat 1 Kalimat 1 Kalimat 1
                Kalimat 1 Kalimat 1 Kalimat 1 Kalimat 1 v v Kalimat 1 Kalimat 1
                Kalimat 1 v Kalimat 1 v Kalimat 1 Kalimat 1
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
