import { useEffect } from "react";
import DataCard from "./DataCard";
import { useQuery } from "@apollo/client";
import { GET_USER_PROFILE } from "../graphql/Queries";
const DataCardRail = () => {
  const { data } = useQuery(GET_USER_PROFILE);

  useEffect(() => {
    console.log(data);
  }, [data]);
  // console.log(user);
  return (
    <div className="flex flex-row w-[1155px] h-[1718px] bg-[#FAFAFA] space-x-6">
      <DataCard></DataCard>
    </div>
  );
};

export default DataCardRail;
