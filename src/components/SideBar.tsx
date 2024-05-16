import firm_logo from "../assets/firm_logo.png";
import GridViewIcon from "@mui/icons-material/GridView";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import { LuUsers } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";

function SideBar() {
  return (
    <div className=" flex flex-col w-[108px] h-[1273px] bg-[#FFFFFF] items-center gap-10 p-[30px]">
      <div className="h-[45px] flex justify-center items-center text-white text-2xl pt-[40px]">
        <img src={firm_logo} alt="logo" className="size-11" />
      </div>

      <div className="flex flex-col items-center pt-5 gap-6 h-80 w-12">
        <div>
          {/* inner radius */}
          <GridViewIcon
            sx={{
              backgroundColor: "#003fad",
              color: "white",
              width: "48px",
              height: "48px",
              borderRadius: "35%",
              padding: "12px",
            }}
          />
        </div>
        <div>
          <FiPieChart className="text-2xl text-[#737791]" />
        </div>
        <div>
          <FeedRoundedIcon
            sx={{
              color: "#737791",
              width: "24px",
              height: "24px",
            }}
            className="text-4xl bg-blue"
          />
        </div>
        <div>
          <LuUsers className="text-2xl text-[#737791]" />
        </div>

        <div>
          <BsBoxSeam className="text-2xl text-[#737791]" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
