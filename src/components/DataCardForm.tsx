import { useState } from "react";
import DataCardFormItem from "./DataCardFormItem";
import DataCardFormItemEditable from "./DataCardFormItemEditable";
interface Props {
  edit: boolean;
  itemIndex: number;
  setItemIndex: (index: number, val: string) => void;
}

const DataCardForm = (props: Props) => {
  // comment for Eng. Mustafa this line is to change the number of columns in each row
  const layout = [3, 3, 4, 2];
  const [items, setItems] = useState<string[]>([]);
  useState(() => {
    setItems(Array.from({ length: 12 }, (_, index) => `Item ${index + 1}`));
  });

  const renderGridItems = () => {
    let itemIndex = 0;
    return layout.map((columns, rowIndex) => {
      const rowItems = [];
      for (let i = 0; i < columns; i++) {
        if (itemIndex < items.length) {
          rowItems.push(
            props.edit ? (
              <DataCardFormItemEditable
                title={`Item ${itemIndex + 1}`}
                content={items[itemIndex]}
                key={`item-${rowIndex}-${i}`}
                index={itemIndex}
                setIndex={(index, val) => {
                  const newItems = [...items];
                  newItems[index] = val;
                  setItems(newItems);
                  props.setItemIndex(index, val);
                }}
              />
            ) : (
              <DataCardFormItem
                title={`Item ${itemIndex + 1}`}
                content={items[itemIndex]}
                key={`item-${rowIndex}-${i}`}
              />
            )
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
