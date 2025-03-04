import HeaderSecondary from "@/components/layouts/header-secondary";
import Layout from "@/components/layouts/layout";
import { NOTIFICATION_DATA } from "@/utils/constants/notification-data";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Notification() {
  return (
    <Layout>
      <HeaderSecondary href={"/"}>Notification</HeaderSecondary>
      <div className="mt-0 flex flex-col">
        {NOTIFICATION_DATA.map((data, index) => (
          <div
            key={index}
            className={`${
              data.isRead ? "bg-white" : "bg-[#D7E5FF]"
            } h-fit py-4 w-full px-4 md:px-6 flex gap-4 items-center`}
          >
            <div className="flex gap-4 items-start">
              <div className="h-[60px] min-w-[60px] w-[60px] bg-gradient-to-br from-[#EF2723] via-[#E81C4F] to-[#C5105F] rounded-lg mt-1 flex justify-center items-center relative">
                <Icon
                  icon={
                    data.category === "Reimbursement"
                      ? "fluent-color:coin-multiple-48"
                      : data.category === "Sickness"
                      ? "streamline-emojis:pill"
                      : "emojione:alarm-clock"
                  }
                  width="32"
                  height="32"
                />
                <div
                  className={`w-6 h-6 absolute -bottom-1 -right-1 rounded-[100%] flex justify-center items-center ${
                    data.status === "approved"
                      ? "bg-[#32AF85]"
                      : data.status === "rejected"
                      ? "bg-[#F82C17]"
                      : "bg-[#377DFF]"
                  }`}
                >
                  <Icon
                    icon={
                      data.status === "approved"
                        ? "entypo:check"
                        : data.status === "rejected"
                        ? "qlementine-icons:close-12"
                        : "ci:arrow-right-md"
                    }
                    className="text-white"
                    width="16"
                    height="16"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 h-fit w-fit">
                <div className="flex justify-between items-center">
                  <h6 className="text-md font-bold">{data.title}</h6>
                  <span className="text-xs text-gray-400">{data.date}</span>
                </div>
                <p className="text-sm">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
