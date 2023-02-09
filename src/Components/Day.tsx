import dayjs from "dayjs";
import { DayProps, event } from "../Types/CalendarTypes";



const Day = (props:DayProps) => {
    return ( 
        <div className="relative rounded-md bg-stone-800  flex flex-col gap-1 cursor-pointer day-highlight"  onClick={props.onClick}>
            <p className=" m-0 absolute bottom-0 right-1 z-10 text-shadow">{props.day.format("DD")}</p>
            {
                props.events?.map(event => {
                    if(event.startDate?.toDateString() === props.day.toDate().toDateString()){
                        console.log(event.startDate, props.day.toDate())
                        return <div className="relative rounded  h-[100%] overflow-hidden">
                            <h3 className="absolute  text-white text-shadow font-light">{event.title}</h3>
                            <img className="h-[100%] object-cover" src="temp/test.png" alt="" />
                        </div>
                    }

                    
                })
            }
        </div>
     );
}
 
export default Day;