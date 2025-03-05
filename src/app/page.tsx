import Carousel from "@/components/elements/carousel";
import MemberStatusCard from "@/components/elements/member-status-card";
import UserActivityCard from "@/components/elements/user-activity-card";
import UserSummaryCard from "@/components/elements/user-summary-card";
import BottomNavigation from "@/components/layouts/bottom-navigation";
import HeaderPrimary from "@/components/layouts/header-primary";
import Layout from "@/components/layouts/layout";

export default function Home() {
  return (
    <Layout>
      <HeaderPrimary />
      <div className="mt-4 mb-24 flex flex-col gap-6 px-4 md:px-6">
        <UserSummaryCard />
        <UserActivityCard />
        <div className="flex flex-col gap-4 ">
          <h6 className="font-bold">PCS News</h6>
          <Carousel />
        </div>
        <MemberStatusCard />
      </div>
      <BottomNavigation />
    </Layout>
  );
}
