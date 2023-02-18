import React, { RefObject, useRef, useState } from "react";
import MonthView from "../Components/MonthView";
import Timeline from "../Components/Timeline";
import CalenderEditor from "../Components/CalendarEditor";
import { event } from "../Types/CalendarTypes";
import AddEventModal from "../Components/AddEventModal";
import html2canvas from "html2canvas";
import { Button } from "@mantine/core";

import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

type updateEvent = {
    update: boolean,
    index: number
}

const Create = () => {
    
    const [selectedMonthStyle,setSelectedMonthStyle] = useState('month')
    const [title, setTitle] = useState<string>("")
    const [opened, setOpened] = useState(false)
    const [allEvents,setAllEvents] = useState<event[]>([])
    const [calendarBackgroundImage,setCalendarBackgroundImage] = useState<string | undefined>(undefined)

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
            setAllEvents(prev => [...prev, newEvent])
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


    const imageRef = useRef<HTMLDivElement>(null)
    const handleDownloadImage = async (referenceElement: RefObject<HTMLDivElement>) => {

        const element = referenceElement.current;
        
        if(element){
            const canvas = await html2canvas(element,{allowTaint:true,useCORS: true,backgroundColor:"#262626",foreignObjectRendering:false});
            const data = canvas.toDataURL('image/jpg');
            const link = document.createElement('a');
    
            if (typeof link.download === 'string') {
            link.href = data;
            link.download = 'image.jpg';
        
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            } else {
            window.open(data);
            }
        }
        
      };


    const downloadScreenshot = (referenceElement: RefObject<HTMLDivElement>)=>{

        if(referenceElement.current){
            htmlToImage.toJpeg(referenceElement.current,{ 
                cacheBust: false,
                width: referenceElement.current.clientWidth  , 
                height: referenceElement.current.clientHeight ,  
                canvasWidth: referenceElement.current.clientWidth * 2 ,
                canvasHeight: referenceElement.current.clientHeight * 2 ,
                style:{
                    border: "none",
                    outline: "none",
                    marginLeft : 'auto',
                    marginTop: 'auto',
                    marginRight: 'auto',
                    borderRadius: "0"
            }})
            .then(function (dataUrl) {
            // download(dataUrl, 'my-node.png');
            
            const link = document.createElement('a');
    
            if (typeof link.download === 'string') {
            link.href = dataUrl;
            link.download = 'image.jpeg';
        
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            } else {
            window.open(dataUrl);
            }
        });
        }

        
    }






    return ( 
        <div className="flex justify-center ">

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
            
            {selectedMonthStyle === 'month' && <MonthView  
            imageReference = {imageRef}
            backgroundImage={calendarBackgroundImage} 
            events={allEvents} title={title} 
            AddEvent={AddNewEvent}></MonthView>}
            {selectedMonthStyle === 'timeline' && <Timeline></Timeline>}

            <CalenderEditor 
            SetBackgroundImage={setCalendarBackgroundImage}
            CalendarTypeSetFunction={setSelectedMonthStyle}
            TitleSetFunction={setTitle}
            events={allEvents}
            DeleteEvent={deleteEvent}
            UpdateEvent={editEvent}
            BackgroundImage={calendarBackgroundImage}
            imageReference={imageRef}
            DownloadScreenshot={downloadScreenshot}
            ></CalenderEditor>

            {/* <Button onClick={()=>{downloadScreenshot(imageRef)}} className="mx-2 my-5" variant="default" color="dark" leftIcon={ <img src="icons/github.svg" alt="" width={"20px"}/>}>Download</Button> */}
            
        </div>
     );
}
 
export default Create;