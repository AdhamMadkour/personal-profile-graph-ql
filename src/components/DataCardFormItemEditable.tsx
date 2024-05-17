import TextField from "@mui/material/TextField";
interface Props {
  title: string;
  content: string;
  index: number;
  setIndex: (index: number, val: string) => void;
}

const DataCardFormItemEditable = (props: Props) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label={props.title}
        variant="outlined"
        defaultValue={props.content}
        onChange={(e) => {
          props.setIndex(props.index, e.target.value);
        }}
      />
    </div>
  );
};

export default DataCardFormItemEditable;
