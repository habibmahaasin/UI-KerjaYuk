import Image from "next/image";

export default function MemberStatusCard() {
  return (
    <div className="flex flex-col gap-4 ">
      <h6 className="font-bold">Online</h6>
      <div className="w-full h-[80px] white rounded-3xl shadow-lg flex justify-center">
        <div className="avatar-group -space-x-3 sm:-space-x-2 h-fit">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              className="w-fit h-fit flex flex-col gap-0 justify-center text-center"
              key={index}
            >
              <div className="avatar" key={index}>
                <div className="w-10">
                  <Image
                    width={1000}
                    height={1000}
                    alt="profile"
                    src="/img/avatar.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold">Joni</span>
                <span className="text-[10px] -mt-1">CEO</span>
              </div>
            </div>
          ))}
          <div className="avatar avatar-placeholder h-fit w-fit">
            <div className="bg-gradient-to-br from-[#EF2723] via-[#E81C4F] to-[#C5105F] text-neutral-content w-10 h-10 flex flex-col">
              <span className="text-[10px] text-center">10</span>
              <span className="text-[10px] text-center -mt-1">More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
