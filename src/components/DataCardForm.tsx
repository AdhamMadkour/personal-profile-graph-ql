import DataCardFormItem from "./DataCardFormItem";

const DataCardForm = () => {
  const layout = [3, 3, 4, 2];
  // Sample data to populate the grid items
  const items = Array.from({ length: 12 }, (_, index) => `Item ${index + 1}`);

  const renderGridItems = () => {
    let itemIndex = 0;
    return layout.map((columns, rowIndex) => {
      const rowItems = [];
      for (let i = 0; i < columns; i++) {
        if (itemIndex < items.length) {
          rowItems.push(
            <DataCardFormItem title={"title"} content={"description"} />
          );
          itemIndex++;
        }
      }
      // Fill the remaining columns in the row with empty divs if needed
      for (let i = columns; i < 4; i++) {
        rowItems.push(
          <div
            className="bg-transparent border-none"
            key={`empty-${rowIndex}-${i}`}
          ></div>
        );
      }
      return rowItems;
    });
  };

  return <div className="grid grid-cols-4 gap-2 p-4">{renderGridItems()}</div>;
};

export default DataCardForm;
