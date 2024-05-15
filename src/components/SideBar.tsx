import firm_logo from "../assets/firm_logo.png";
import GridViewIcon from "@mui/icons-material/GridView";

function SideBar() {
  return (
    <div className=" flex flex-col w-28 h-screen bg-white-500">
      <div className="w-full h-16 bg-white flex justify-center items-center text-white text-2xl p-5">
        <img src={firm_logo} alt="logo" className="size-11" />
      </div>

      <div className="flex flex-col items-center pt-5 justify-center">
        <div>
          <GridViewIcon className="text-4xl bg-blue" />
        </div>
        
      </div>
    </div>
  );
}

export default SideBar;
