import { useState } from "react";
import MonthView from "../Components/MonthView";
import Timeline from "../Components/Timeline";
import CalenderEditor from "../Components/CalendarEditor";
import { Modal } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

type event = {
    startDate: Date | null
    endDate: Date| null
}

const Create = () => {
    
    const [selectedMonthStyle,setSelectedMonthStyle] = useState('month')
    const [title, setTitle] = useState<string>("Placeholder")
    const [event,setEvent] = useState({})

    const [opened, setOpened] = useState(false)

    const [newEvent,setNewEvent] = useState<event>({
        startDate: null,
        endDate: null,
    })

    const AddNewEvent = (day:Date)=>{
        setOpened(true)
        setNewEvent(prev => {
            return{
                ...prev,
                startDate: day}
        })
    }

  
    const UpdateEventDate = (day: Date| null, property: "startDate" | 'endDate') =>{
        setNewEvent(prev => {
            return{
                ...prev,
                [property]: day}
        })
    }
    

    return ( 
        <div className="flex justify-center">

            <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Add Event">
                <div className="my-2 font-bold text-md">Date</div>
                <DatePicker className='my-2' placeholder="Pick date" label="Event date" defaultValue={newEvent.startDate} onChange={e => UpdateEventDate(e,"startDate")}/>
                <DatePicker className='my-2' placeholder="Pick date" label="End date (Optional)" onChange={e => UpdateEventDate(e,"endDate")}/>
            </Modal>
            
            {selectedMonthStyle === 'month' && <MonthView title={title} AddEventModal={setOpened} AddEvent={AddNewEvent}></MonthView>}
            {selectedMonthStyle === 'timeline' && <Timeline></Timeline>}

            <CalenderEditor 
            CalendarTypeSetFunction={setSelectedMonthStyle}
            TitleSetFunction={setTitle}
            AddNewEventFunction={setEvent}
            ></CalenderEditor>
            
        </div>
     );
}
 
export default Create;