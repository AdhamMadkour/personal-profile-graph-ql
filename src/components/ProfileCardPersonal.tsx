import AvatarPicture from "../assets/avatar.png";
import { Box, IconButton } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const ProfileCardPersonal = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center h-[120px] w-[120px] bg-white">
        <Box position="relative" display="inline-block">
          <img src={AvatarPicture} alt="profile" className="rounded-[40px]" />
          <IconButton
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              color: "#2D2F30",
              backgroundColor: "#F0F0F0",
              "&:hover": {
                backgroundColor: "gray.200",
              },
            }}
          >
            <CameraAltOutlinedIcon />
          </IconButton>
        </Box>
      </div>
      <div className="pt-4">
        <h1 className="text-2xl font-bold">John Smith</h1>
        <p className="text-[#737791]">Senior Product Manager</p>
      </div>
    </div>
  );
};

export default ProfileCardPersonal;
