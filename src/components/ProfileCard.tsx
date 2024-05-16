import ProfileCardPersonal from "./ProfileCardPersonal";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const profileCardOptions = ["Personal Information", "Financial Information"];

const ProfileCard = () => {
  return (
    <div className="w-[393px] h-[464px] bg-white rounded-xl p-6 ml-6">
      <ProfileCardPersonal></ProfileCardPersonal>
      <div className="border-b-2 border-[#E7EAEE] mt-6"></div>
      <div>
        <Stack spacing={2} className="pt-6">
          {profileCardOptions.map((item, index) => {
            return (
              <Button
                key={index}
                variant="text"
                sx={{
                  textTransform: "none",
                  justifyContent: "flex-start",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#051D49",
                  "&:hover": {
                    color: "#0F6CBD",
                  },
                }}
              >
                {item}
              </Button>
            );
          })}
        </Stack>
      </div>
    </div>
  );
};

export default ProfileCard;
