import { MENU_ITEMS } from "@/utils/constants/bottom-menu-data";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function BottomNavigation() {
  return (
    <nav className="h-16 bg-white w-full fixed bottom-0 z-10 max-w-md shadow-t-lg px-4 md:px-6 flex flex-col justify-center shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
      <div className="w-full h-12 grid grid-cols-5 gap-4">
        {MENU_ITEMS.map((item) =>
          item.isFloating ? (
            <div key={item.id} className="h-full w-full relative">
              <div className="h-24 w-full absolute -top-[2.5rem] flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#F82C17] shadow-[0_-4px_6px_rgba(0,0,0,0.1)] flex justify-center items-center">
                  <Icon
                    icon={item.icon}
                    width="24"
                    height="24"
                    className="ml-1 text-white"
                  />
                </div>
                <span className="text-[10px] font-semibold text-[#F82C17] mt-1">
                  {item.name}
                </span>
              </div>
            </div>
          ) : (
            <div
              key={item.id}
              className={`h-full w-full flex flex-col items-center justify-center ${
                item.isActive ? "text-[#F82C17]" : item.inactiveColor
              }`}
            >
              <Icon icon={item.icon} width="28" height="28" />
              <span className="text-[10px] font-semibold">{item.name}</span>
            </div>
          )
        )}
      </div>
    </nav>
  );
}
