import React, { useState } from "react";
import MonthView from "../Components/MonthView";
import Timeline from "../Components/Timeline";
import CalenderEditor from "../Components/CalendarEditor";
import { event } from "../Types/CalendarTypes";
import AddEventModal from "../Components/AddEventModal";
import { FileWithPath } from '@mantine/dropzone';

type updateEvent = {
    update: boolean,
    index: number
}

const Create = () => {
    
    const [selectedMonthStyle,setSelectedMonthStyle] = useState('month')
    const [title, setTitle] = useState<string>("Placeholder")
    const [opened, setOpened] = useState(false)
    const [allEvents,setAllEvents] = useState<event[]>([])

    const [updateEvent,setUpdateEvent] = useState<updateEvent>({
        update: false,
        index: 0
    })



    // Event Properties
    const [newEvent,setNewEvent] = useState<event>({
        startDate: null,
        endDate: null,
        title: "",
        image: undefined,
        color: "#339af0"
    })


    const UpdateEventTitle = (event:string)=>{
        setNewEvent(prev => {
            return{
                ...prev,
                title: event}
        })
    }

    const AddNewEvent = (day:Date)=>{
        setUpdateEvent({
            update: false,
            index: 0
        }) 
        setOpened(true)
        setNewEvent(prev => {
            return{
                ...prev,
                title: "",
                image: undefined,
                startDate: day,
                endDate: null
            }
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
        if(updateEvent.update){

            setAllEvents(prev =>{
                
                const updatedList = prev.map((event,id)=>{

                    if(id === updateEvent.index) {
                        console.log("huh")
                        return newEvent
                    }
                    else {
                        return event
                    }
                })
                
                return updatedList
            })

            
        }else{
            allEvents.push(newEvent)
        }
    }

    const UpdateImage = (newImage: string | undefined)=>{
        setNewEvent(prev => {
            return{
                ...prev,
                image: newImage}
        })
    }

    const UpdateColor = (color: string) =>{
        setNewEvent(prev =>{
            return{
                ...prev,
                color: color
            }
        })
    }

    const deleteEvent = (eventId: number)=>{
        setAllEvents(prev =>{
            const newList = prev.filter((event,idx) => idx !== eventId)
            return newList
        })
    }

    const editEvent = (event: event,eventId: number)=>{
        setOpened(true)
        setNewEvent(event)
        setUpdateEvent({
            update: true,
            index: eventId
        })     
    }

    return ( 
        <div className="flex justify-center">

            <AddEventModal 
            modalStatus={opened} 
            newEvent={newEvent} 
            SetImage={UpdateImage}
            SetColor={UpdateColor}
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
            DeleteEvent={deleteEvent}
            UpdateEvent={editEvent}
            ></CalenderEditor>
            
        </div>
     );
}
 
export default Create;