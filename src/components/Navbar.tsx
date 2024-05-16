import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AvatarPicture from "../assets/avatar.png";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const journey = ["Dashboard", "HR manage", "Employees", "John Smith Profile"];

const Navbar = () => {
  return (
    <div className="flex w-[1620px] h-[113px] left-[108px] px-10 py-6 justify-between bg-[#FAFAFA]">
      <div className="h-10 w-[470px]">
        <h1 className="flex flex-col text-[26px] font-bold">
          John Smith Profile
        </h1>
        <div>
          <span className="flex flex-row w-[402px]">
            {journey.map((item, index) => {
              return (
                <div key={index} className="flex flex-row">
                  <p className="text-[#737791] text-xs">{item}</p>
                  {index !== journey.length - 1 && (
                    <ChevronRightOutlinedIcon
                      sx={{
                        color: "#459AFF",
                        width: "14px",
                        height: "14px",
                        marginTop: "3px",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <NotificationsNoneOutlinedIcon />
        </div>
        <div>
          <NotificationsNoneOutlinedIcon />
        </div>
        <div>
          <NotificationsNoneOutlinedIcon />
        </div>
        <div>
          <div>
            <img
              src={AvatarPicture}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
