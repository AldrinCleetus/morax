import dayjs from "dayjs";
import { DayProps, event } from "../Types/CalendarTypes";



const Day = (props:DayProps) => {


    
    return ( 
        <div className="relative rounded-md bg-stone-800  flex flex-col gap-1 cursor-pointer day-highlight"  onClick={props.onClick}>
            <p className=" m-0 absolute bottom-0 right-1 z-10 text-shadow">{props.day.format("DD")}</p>
            {
                props.events?.map(event => {
                    if(event.startDate?.toDateString() === props.day.toDate().toDateString()){
                        // console.log(event.startDate, props.day.toDate())
                        return <div key={event.title + Math.random() * 10} className="relative rounded h-[100%] overflow-hidden">
                            <h3 className="absolute  text-white text-shadow font-light p-2">{event.title + "START"}</h3>
                            {event.image ? 
                            <img className="h-[100%] w-[100%] object-cover object-left" src={event.image} alt="" />:
                            <div className="h-[100%] object-cover object-fit bg-blue-500"></div>}
                            
                            

                        </div>
                    }

                    if(event.endDate && event.startDate){
                        if(event.startDate?.getTime() < props.day.toDate().getTime() && event.endDate.getTime() > props.day.toDate().getTime()){
                            return <div key={event.title + Math.random() * 10} className="relative rounded  h-[100%] overflow-hidden">
                                {event.image ? 
                            <img className="h-[100%] w-[100%] object-cover object-left" src={event.image} alt="" />:
                            <div className="h-[100%] object-cover object-fit bg-blue-500"></div>}
                            </div>
                        }
                    }

                    if(event.endDate?.toDateString() === props.day.toDate().toDateString()){
                        // console.log(event.startDate, props.day.toDate())
                        return <div key={event.title + Math.random() * 10} className="relative rounded  h-[100%] overflow-hidden">
                           
                            {event.image ? 
                            <img className="h-[100%] w-[100%] object-cover object-left" src={event.image} alt="" />:
                            <div className="h-[100%] object-cover object-fit bg-gradient-to-r  from-blue-500 to-transparent"></div>}
                        </div>
                    }

                    
                })
            }
        </div>
     );
}
 
export default Day;