import React, { useState } from "react";
import MonthView from "../Components/MonthView";
import Timeline from "../Components/Timeline";
import CalenderEditor from "../Components/CalendarEditor";
import { Button, Modal, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { event } from "../Types/CalendarTypes";
import AddEventModal from "../Components/AddEventModal";


const Create = () => {
    
    const [selectedMonthStyle,setSelectedMonthStyle] = useState('month')
    const [title, setTitle] = useState<string>("Placeholder")
    const [opened, setOpened] = useState(false)
    const [allEvents,setAllEvents] = useState<event[]>([])


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