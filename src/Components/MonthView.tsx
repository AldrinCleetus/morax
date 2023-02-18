import { Dispatch, useState } from "react";
import { getMonth } from "../Util/Month";
import Title from "./Title";
import Day from "./Day";
import { event } from "../Types/CalendarTypes";
import React from "react";


type MonthViewProps = {
    title: string,
    events: event[],
    backgroundImage: string | undefined,
    AddEvent: (day:Date)=> void,

}

const MonthView = (props:MonthViewProps) => {

    const today = new Date()

    const [month, setMonth] = useState(getMonth(today.getMonth()))
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    const allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];



    return ( 
        <div className="md:w-[80%] lg:w-[70%] w-[90%] xl:w-[60%] m-6 border-2 border-stone-700 rounded-xl flex justify-center flex-col h-[50%]"
        style={{
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",

            
        }}>
                
                <Title name={props.title}></Title>
                <div className="month mx-auto mt-5 font-bold text-4xl text-shadow text-stroke">{allMonths[today.getMonth()]}</div>
                <div className="justify-center grid grid-container m-5  gap-2 ">
                    
                    {
                        week.map(day =>{
                            return <div key={day} className="text-xl flex justify-center text-stroke">{day}</div>
                        })
                    }

                    {
                        month.map((row,index) => {
                            return <React.Fragment key={index}>
                                {
                                    row.map(
                                        (day,idx)=>{

                                            return <Day key={index * 7 + idx} day={day} id={idx} onClick={()=>{props.AddEvent(day.toDate())}} events={props.events}></Day>
                                            
                                        }
                                    )
                                }
                            </React.Fragment>
                            
                        })
                    }
                </div>
            </div>
     );
}
 
export default MonthView;