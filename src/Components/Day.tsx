import dayjs from "dayjs";

type DayProps = {
    id: number
    day: dayjs.Dayjs
    onClick: ()=>void 
}

const Day = (props:DayProps) => {
    return ( 
        <div className="relative rounded-md bg-stone-800  flex flex-col cursor-pointer" key={props.id} onClick={props.onClick}>
            <p className=" m-0 absolute bottom-0 right-1">{props.day.format("DD")}</p>
        </div>
     );
}
 
export default Day;