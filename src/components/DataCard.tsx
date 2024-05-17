import DataCardForm from "./DataCardForm";
import DataCardHeader from "./DataCardHeader";

const DataCard = () => {
  return (
    <div className="grid w-[1155px] h-[548px] bg-white rounded-xl p-10">
      <DataCardHeader></DataCardHeader>
      <DataCardForm />
    </div>
  );
};

export default DataCard;
