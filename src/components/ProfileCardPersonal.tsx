import AvatarPicture from "../assets/avatar.png";
const ProfileCardPersonal = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center h-[120px] w-[120px] bg-white">
        <img src={AvatarPicture} alt="profile" className="rounded-[40px]" />
      </div>
      <div className="pt-4">
        <h1 className="text-2xl font-bold">John Smith</h1>
        <p className="text-[#737791]">Senior Product Manager</p>
      </div>
    </div>
  );
};

export default ProfileCardPersonal;
