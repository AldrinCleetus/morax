import dayjs from "dayjs";
import { DayProps, event } from "../Types/CalendarTypes";



const Day = (props:DayProps) => {

    return ( 
        <div className="relative rounded-md bg-stone-800/50 flex flex-col gap-1 cursor-pointer day-highlight"  onClick={props.onClick}>
            <p className=" m-0 absolute text-right  bottom-0 right-1 z-10 text-shadow ">{props.day.format("DD")}</p>
            {
                
                props.events?.map(event => {
                    
                    if(event.startDate?.toDateString() === props.day.toDate().toDateString()){
                        // console.log(event.startDate, props.day.toDate())
                        return <div key={event.title + Math.random() * 10} className=" rounded h-[100%]  ">
                            {/* <h3 className="  text-white truncate text-shadow font-light p-2 h-[100%] object-cover object-fit bg-stone-500">{event.title}</h3> */}
                            {event.image ? 
                            <>
                            <h3 className="absolute w-[50%] text-white truncate text-shadow font-light p-2 h-[100%]">{event.title}</h3>
                            <img className="h-[100%] w-[100%] object-cover object-left" src={event.image} alt="" />
                            </>:
                            <h3 className="  text-white truncate text-shadow font-light p-2 rounded h-[100%] object-cover object-fit "
                            style={{
                                backgroundColor: event.color
                            }}>{event.title}</h3>
                            // <div className="h-[100%] object-cover object-fit" style={{
                            //     backgroundColor: event.color
                            // }}></div>
                        }
                            
                            

                        </div>
                    }

                    if(event.endDate && event.startDate){
                        if(event.startDate?.getTime() < props.day.toDate().getTime() && event.endDate.getTime() > props.day.toDate().getTime()){
                            return <div key={event.title + Math.random() * 10} className="relative rounded h-[100%] overflow-hidden  ">
                                {event.image ? 
                            <img className="h-[100%] w-[100%] object-cover object-left opacity-70" src={event.image} alt="" />:
                            <div className="  text-white truncate text-shadow font-light p-2 rounded h-[100%] object-cover object-fit"
                            style={{
                                backgroundColor: event.color
                            }}></div>}
                            </div>
                        }
                    }

                    if(event.endDate?.toDateString() === props.day.toDate().toDateString()){
                        // console.log(event.startDate, props.day.toDate())
                        return <div key={event.title + Math.random() * 10} className="relative rounded  h-[100%] overflow-hidden">
                           
                            {event.image ? 
                            <img className="h-[100%] w-[100%] object-cover object-left opacity-70" src={event.image} alt="" />:
                            <div className="h-[100%]  object-cover object-fit" style={{
                                background: `linear-gradient(90deg, ${event.color}, rgba(0,0,0,0))`
                            }}></div>}
                        </div>
                    }

                    
                })
            }
        </div>
     );
}
 
export default Day;