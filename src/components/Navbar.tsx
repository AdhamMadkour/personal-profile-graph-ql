import Breadcrumbs from "@mui/material/Breadcrumbs";
import AvatarPicture from "../assets/avatar.png";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Badge from "@mui/material/Badge";

const journey = ["Dashboard", "HR manage", "Employees", "John Smith Profile"];

const iconStyle = {
  color: "#004A3F",
  width: "24px",
  height: "24px",
  cursor: "pointer",
};

const IconWithBadge = ({
  icon: IconComponent,
  badgeContent,
}: {
  icon: React.ElementType;
  badgeContent: string;
}) => (
  <Badge
    badgeContent={badgeContent}
    color="error"
    variant="dot"
    overlap="circular"
  >
    <IconComponent sx={iconStyle} />
  </Badge>
);

const Navbar = () => (
  <div className="flex w-[1620px] h-[113px] px-10 py-6 justify-between bg-[#FAFAFA]">
    <div className="h-10 w-[470px]">
      <h1 className="text-[26px] font-bold">John Smith Profile</h1>
      <div className="flex flex-row w-[402px]">
        <Breadcrumbs
          separator={<ChevronRightOutlinedIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ color: "#459AFF" }}
        >
          {journey.map((item) => (
            <p key={item} className="text-[#737791] text-xs">
              {item}
            </p>
          ))}
        </Breadcrumbs>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <IconWithBadge icon={NotificationsNoneIcon} badgeContent=" " />
      <EmailOutlinedIcon sx={iconStyle} />
      <SettingsOutlinedIcon sx={iconStyle} />
      <img
        src={AvatarPicture}
        alt="profile"
        className="rounded-full w-10 h-10"
      />
    </div>
  </div>
);

export default Navbar;
