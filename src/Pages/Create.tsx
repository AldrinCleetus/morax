import { useState } from "react";
import { getMonth } from "../Util/Month";
import Day from "../Components/Day";
import Title from "../Components/Title";
import { SegmentedControl } from '@mantine/core';
import MonthView from "../Components/MonthView";
import Timeline from "../Components/Timeline";

const Create = () => {
    
    const [month, setMonth] = useState(getMonth())
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    const data = [
        { label: 'Month Calendar', value: 'month' },
        { label: 'Timeline', value: 'timeline' }
    ]


    const [selectedMonthStyle,setSelectedMonthStyle] = useState('month')

    return ( 
        <div className="flex justify-center">
            
            {selectedMonthStyle === 'month' && <MonthView></MonthView>}
            {selectedMonthStyle === 'timeline' && <Timeline></Timeline>}


            <div className="m-6 md:w-[20%] lg:w-[30%] w-[20%] xl:w-[20%] border-stone-700 border-2 rounded-xl flex justify-center">
                <div>
                    <div className="month mx-auto my-5 font-bold text-2xl text-center">Options</div>
                    <SegmentedControl data={data} onChange={setSelectedMonthStyle}/>
                </div>
            </div>
        </div>
     );
}
 
export default Create;