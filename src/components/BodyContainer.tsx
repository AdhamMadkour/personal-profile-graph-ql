import Navbar from "./Navbar";
import Outlet from "./Outlet";

const BodyContainer = () => {
  return (
    <div className="flex flex-col w-screen bg-sky-500 bg-cover">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default BodyContainer;
