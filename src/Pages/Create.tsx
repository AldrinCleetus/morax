import React, { useState } from "react";
import MonthView from "../Components/MonthView";
import Timeline from "../Components/Timeline";
import CalenderEditor from "../Components/CalendarEditor";
import { event } from "../Types/CalendarTypes";
import AddEventModal from "../Components/AddEventModal";
import { FileWithPath } from '@mantine/dropzone';



const Create = () => {
    
    const [selectedMonthStyle,setSelectedMonthStyle] = useState('month')
    const [title, setTitle] = useState<string>("Placeholder")
    const [opened, setOpened] = useState(false)
    const [allEvents,setAllEvents] = useState<event[]>([])

    

    const [eventImage,setEventImage] = useState<FileWithPath | undefined>()


    // Event Properties
    const [newEvent,setNewEvent] = useState<event>({
        startDate: null,
        endDate: null,
        title: ""
    })
    //const [eventTitle,setEventTitle] = useState("")

    const UpdateEventTitle = (event:string)=>{
        setNewEvent(prev => {
            return{
                ...prev,
                title: event}
        })
    }

    const AddNewEvent = (day:Date)=>{
        setEventImage(undefined)
        setOpened(true)
        setNewEvent(prev => {
            return{
                ...prev,
                title: "",
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

    const AddEventToCalendar = ()=>{
        setOpened(false)
        allEvents.push(newEvent)
        console.log(allEvents)
    }

    

    return ( 
        <div className="flex justify-center">

            <AddEventModal 
            modalStatus={opened} 
            newEvent={newEvent} 
            image={eventImage}
            SetImage={setEventImage}
            SetModalStatus={setOpened} 
            UpdateEventDate={UpdateEventDate}
            UpdateEventTitle={UpdateEventTitle} 
            AddEventToCalendar={AddEventToCalendar}
            ></AddEventModal>
            
            {selectedMonthStyle === 'month' && <MonthView events={allEvents} title={title} AddEvent={AddNewEvent}></MonthView>}
            {selectedMonthStyle === 'timeline' && <Timeline></Timeline>}

            <CalenderEditor 
            CalendarTypeSetFunction={setSelectedMonthStyle}
            TitleSetFunction={setTitle}
            events={allEvents}
            ></CalenderEditor>
            
        </div>
     );
}
 
export default Create;