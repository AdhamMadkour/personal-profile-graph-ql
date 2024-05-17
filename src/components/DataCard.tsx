import { useState } from "react";
import DataCardForm from "./DataCardForm";
import DataCardHeader from "./DataCardHeader";

const DataCard = () => {
  const [editable, setEditable] = useState(false);
  return (
    <div className="grid w-[1155px] h-[548px] bg-white rounded-xl p-10">
      <DataCardHeader edit={editable} setEdit={setEditable}></DataCardHeader>
      <DataCardForm edit={editable} />
    </div>
  );
};

export default DataCard;
