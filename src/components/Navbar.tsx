import Breadcrumbs from "@mui/material/Breadcrumbs";
import AvatarPicture from "../assets/avatar.png";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Badge from "@mui/material/Badge";

const journey = ["Dashboard", "HR manage", "Employees", "John Smith Profile"];
const iconDesign = {
  color: "#004A3F",
  width: "24px",
  height: "24px",
  cursor: "pointer",
};
const Navbar = () => {
  return (
    <div className="flex w-[1620px] h-[113px] left-[108px] px-10 py-6 pr-10 justify-between bg-[#FAFAFA]">
      <div className="h-10 w-[470px]">
        <h1 className="flex flex-col text-[26px] font-bold">
          John Smith Profile
        </h1>
        <div>
          <span className="flex flex-row w-[402px]">
            <Breadcrumbs
              separator={<ChevronRightOutlinedIcon fontSize="small" />}
              aria-label="breadcrumb"
              sx={{
                color: "#459AFF",
              }}
            >
              {journey.map((item) => {
                return <p className="text-[#737791] text-xs">{item}</p>;
              })}
            </Breadcrumbs>
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between w-[249px] h-10">
        <div>
          <Badge
            badgeContent=" "
            color="error"
            variant="dot"
            overlap="circular"
          >
            <NotificationsNoneIcon sx={iconDesign} />
          </Badge>
        </div>
        <div>
          <EmailOutlinedIcon sx={iconDesign} />
        </div>
        <div>
          <SettingsOutlinedIcon sx={iconDesign} />
        </div>
        <div>
          <div>
            <img
              src={AvatarPicture}
              alt="profile"
              className="rounded-full size-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
