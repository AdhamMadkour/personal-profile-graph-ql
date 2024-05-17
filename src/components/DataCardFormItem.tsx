interface Props {
    title: string;
    content: string;
}
const DataCardFormItem = (props: Props) => {
  return (
    <div className='w-60 flex flex-col items-start gap-1 '>
        <h3 className='font-normal text-xs leading-relaxed text-[#737791]'>{props.title}</h3>
        <p className='font-[500] text-[16px]/[24px] '>{props.content}</p>
    </div>
  )
}

export default DataCardFormItem
