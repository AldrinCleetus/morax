import { Dispatch, useState } from "react";
import { getMonth } from "../Util/Month";
import Title from "./Title";
import Day from "./Day";
import { event } from "../Types/CalendarTypes";


type MonthViewProps = {
    title: string,
    AddEvent: (day:Date)=> void,
    events: event[]
}

const MonthView = (props:MonthViewProps) => {

    const [month, setMonth] = useState(getMonth())
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']



    return ( 
        <div className="md:w-[80%] lg:w-[70%] w-[90%] xl:w-[60%] m-6 border-2 border-stone-700 rounded-xl flex justify-center flex-col">
                
                <Title name={props.title}></Title>
                <div className="month mx-auto mt-5 font-bold text-4xl">January</div>
                <div className="grid grid-container m-5  gap-2 ">
                    
                    {
                        week.map(day =>{
                            return <div key={day} className="text-xl flex justify-center">{day}</div>
                        })
                    }

                    {
                        month.map((row,index) => {
                            return <>
                                {
                                    row.map(
                                        (day,idx)=>{

                                            return <Day key={index * 7 + idx} day={day} id={idx} onClick={()=>{props.AddEvent(day.toDate())}} events={props.events}></Day>
                                            
                                        }
                                    )
                                }
                            </>
                            
                        })
                    }
                </div>
            </div>
     );
}
 
export default MonthView;