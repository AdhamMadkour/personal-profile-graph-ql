import ProfileCard from "./ProfileCard";
import DataCardRail from "./DataCardRail";

const Outlet = () => {
  return (
    <div className="flex flex-row h-screen bg-[#FAFAFA] space-x-6">
      <ProfileCard></ProfileCard>
      <DataCardRail></DataCardRail>
    </div>
  );
};

export default Outlet;
