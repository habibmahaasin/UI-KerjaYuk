"use client";
import Layout from "@/components/layouts/layout";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

export default function Home() {
  return (
    <Layout>
      <header className="flex justify-between items-center sticky top-0 z-10 bg-white py-4 px-4 md:px-6">
        <h1 className="text-lg font-bold text-[#F82C17]">KerjaYuk</h1>
        <Link
          href={"/notification"}
          className="text-sm hover:scale-110 transform transition-transform"
        >
          <Icon icon="f7:bell" width="24" height="24" />
          <div className="w-2 h-2 bg-[#F82C17] rounded-[100%] absolute top-0 right-1"></div>
        </Link>
      </header>
      <div className="mt-4 mb-20 flex flex-col gap-6 px-4 md:px-6">
        <div className="flex flex-col gap-4 ">
          <h6 className="font-semibold">Hi, Good Morning!</h6>
          <div className="text-white w-full h-[160px] bg-gradient-to-br from-[#EF2723] via-[#E81C4F] to-[#C5105F] rounded-lg flex flex-col justify-between items-center">
            <div className="w-full flex justify-between items-start p-4 h-full">
              <div className="flex gap-4 items-start">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <Image
                      width={1000}
                      height={1000}
                      alt="profile"
                      src="/img/avatar.jpg"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold">Tabby</p>
                  <span className="text-xs italic ">UI/UX Designer</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs italic ">Member Since</span>
                <p className="text-md font-bold">01 Juni 2021</p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center px-4 md:px-6 h-full">
              <div className="flex flex-col items-start">
                <span className="text-xs italic">Location</span>
                <p className="text-md font-bold">Kantor Sahid</p>
              </div>
              <div className="text-xs italic">ICO</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-bold">Today Activities</h6>
          <div className="w-full h-[100px] grid grid-cols-3 gap-4">
            <div className="h-full w-full flex flex-col items-center justify-center">
              <Icon
                icon="iconamoon:clock-light"
                width="52"
                height="52"
                className="text-[#EE2724]"
              />
              <p className="font-bold text-md">08:00</p>
              <span className="text-xs">Check In</span>
            </div>
            <div className="h-full w-full flex flex-col items-center justify-center">
              <Icon
                icon="ph:clock-counter-clockwise"
                width="52"
                height="52"
                className="text-[#EE2724]"
              />
              <p className="font-bold text-md">03:00:00</p>
              <span className="text-xs">Working Hours</span>
            </div>
            <div className="h-full w-full flex flex-col items-center justify-center">
              <Icon
                icon="iconamoon:clock-light"
                width="52"
                height="52"
                className="text-[#EE2724]"
              />
              <p className="font-bold text-md">08:00</p>
              <span className="text-xs">Check Out</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <h6 className="font-bold">PCS News</h6>
          <Swiper
            slidesPerView={1.5}
            centeredSlides={true}
            initialSlide={1}
            spaceBetween={12}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            loop={true}
            className="w-full h-[190px]"
          >
            <SwiperSlide>
              <div className="w-full h-[160px] bg-black text-white">
                Slide 1
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[160px] bg-red-500 text-white">
                Slide 12
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[160px] bg-black text-white">
                Slide 13
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="w-full h-[160px] bg-red-500 text-white">
                Slide 1312
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className="w-full h-[160px] bg-[#EE2724] rounded-lg"></div> */}
        </div>
        <div className="flex flex-col gap-4 ">
          <h6 className="font-bold">Online</h6>
          <div className="w-full h-[80px] white rounded-3xl shadow-lg flex justify-center">
            <div className="avatar-group -space-x-6 h-fit">
              {Array.from({ length: 8 }).map((_, index) => (
                <div className="avatar" key={index}>
                  <div className="w-12">
                    <Image
                      width={1000}
                      height={1000}
                      alt="profile"
                      src="/img/avatar.jpg"
                    />
                  </div>
                </div>
              ))}
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-12">
                  <span>+99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="h-16 bg-white w-full fixed bottom-0 z-10 max-w-md shadow-t-lg px-4 md:px-6 flex flex-col justify-center shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
        <div className="w-full h-12 grid grid-cols-5 gap-4">
          <div className="h-full w-full flex flex-col items-center justify-center text-[#F82C17]">
            <Icon icon="clarity:home-solid" width="28" height="28" />
            <span className="text-xs font-semibold">Home</span>
          </div>
          <div className="h-full w-full flex flex-col items-center justify-center text-gray-400">
            <Icon icon="mdi:calendar" width="28" height="28" />
            <span className="text-xs">Attendance</span>
          </div>
          <div className="h-full w-full relative">
            <div className="h-24 w-full absolute -top-[2.5rem] flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-[100%] bg-[#F82C17] shadow-[0_-4px_6px_rgba(0,0,0,0.1)] flex justify-center items-center">
                <Icon
                  icon="icomoon-free:exit"
                  width="24"
                  height="24"
                  className="ml-1 text-white"
                />
              </div>
              <span className="text-xs font-semibold text-[#F82C17]">
                Check Out
              </span>
            </div>
          </div>
          <div className="h-full w-full flex flex-col items-center justify-center text-gray-400">
            <Icon icon="fluent:form-24-filled" width="28" height="28" />
            <span className="text-xs">Form</span>
          </div>
          <div className="h-full w-full flex flex-col items-center justify-center text-gray-400">
            <Icon
              icon="material-symbols:settings-rounded"
              width="28"
              height="28"
            />
            <span className="text-xs">Settings</span>
          </div>
        </div>
      </nav>
    </Layout>
  );
}
