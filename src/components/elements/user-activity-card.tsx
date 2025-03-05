import { Icon } from "@iconify/react/dist/iconify.js";

export default function UserActivityCard() {
  return (
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
          <p className="font-bold text-md">--:--</p>
          <span className="text-xs">Check Out</span>
        </div>
      </div>
    </div>
  );
}
