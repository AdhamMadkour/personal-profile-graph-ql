import TextField from "@mui/material/TextField";
interface Props {
  title: string;
  content: string;
}

{/* <div className='w-60 flex flex-col items-start gap-1 '>
<h3 className='font-normal text-xs leading-relaxed text-[#737791]'>{props.title}</h3>
<p className='font-[500] text-[16px]/[24px] '>{props.content}</p>
</div> */}
const DataCardFormItemEditable = (props: Props) => {
  return <div>
    <TextField
      id="outlined-basic"
      label={props.title}
      variant="outlined"
      defaultValue={props.content}
    />
  </div>;
};

export default DataCardFormItemEditable;
