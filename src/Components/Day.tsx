import dayjs from "dayjs";
import { DayProps, event } from "../Types/CalendarTypes";



const Day = (props:DayProps) => {
    return ( 
        <div className="relative rounded-md bg-stone-800  flex flex-col cursor-pointer"  onClick={props.onClick}>
            <p className=" m-0 absolute bottom-0 right-1">{props.day.format("DD")}</p>
            {
                props.events?.map(event => {
                    if(event.startDate?.toDateString() === props.day.toDate().toDateString()){
                        console.log(event.startDate, props.day.toDate())
                        return <div>Hello</div>
                    }

                    
                })
            }
        </div>
     );
}
 
export default Day;