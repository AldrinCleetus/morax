import { useState } from "react";
import Navbar from "../Components/Navbar";
import { getMonth } from "../Util/Month";
import Day from "../Components/Day";
import Title from "../Components/Title";

const Home = () => {
    
    const [month, setMonth] = useState(getMonth())
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

    return ( 
        <div className=" ">
            <Navbar></Navbar>
            <div className="md:w-[80%] lg:w-[70%] w-[90%] xl:w-[60%]  m-6 border-2 border-stone-700 rounded-xl flex justify-center flex-col">
                
                <Title name="Placeholder"></Title>
                <div className="month mx-auto mt-5 font-bold text-2xl">January</div>
                <div className="grid grid-container m-5  gap-2 ">
                    
                    {
                        week.map(day =>{
                            return <div className="text-xl flex justify-center">{day}</div>
                        })
                    }

                    {
                        month.map((row,index) => {
                            return <>
                                {
                                    row.map(
                                        (day,idx)=>{

                                            return <Day day={day} id={idx} onClick={()=>{console.log(day.format('DD'))}}></Day>
                                            
                                        }
                                    )
                                }
                            </>
                            
                        })
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Home;