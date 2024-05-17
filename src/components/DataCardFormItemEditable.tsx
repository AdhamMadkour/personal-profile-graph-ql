import TextField from "@mui/material/TextField";
interface Props {
  title: string;
  content: string;
}

const DataCardFormItemEditable = (props: Props) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label={props.title}
        variant="outlined"
        defaultValue={props.content}
      />
    </div>
  );
};

export default DataCardFormItemEditable;
