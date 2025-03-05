import Image from "next/image";

export default function UserSummaryCard() {
  return (
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
  );
}
