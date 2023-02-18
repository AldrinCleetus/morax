import { ActionIcon, Button, Input, SegmentedControl } from '@mantine/core';
import { Dispatch, useState } from 'react';
import { faHeading, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker } from '@mantine/dates';
import { event } from '../Types/CalendarTypes';
import { faRemove } from '@fortawesome/free-solid-svg-icons';


type CalenderEditorProps = {
    CalendarTypeSetFunction: Dispatch<React.SetStateAction<string>>,
    TitleSetFunction: Dispatch<React.SetStateAction<string>>,
    DeleteEvent: (id: number) => void
    events: event[]
}

const CalenderEditor = (props:CalenderEditorProps) => {

    const data = [
        { label: 'Month Calendar', value: 'month' },
        { label: 'Timeline', value: 'timeline' }
    ]




    return ( 
        <div className="m-6 md:w-[20%] lg:w-[30%] w-[20%] xl:w-[20%] border-stone-700 border-2 rounded-xl flex px-5 ">
            <div className='w-[100%] '>
                <div className="mx-auto my-5 font-bold text-xl text-center">Calendar Editor</div>
                <div className="my-2 font-bold text-md">Style</div>
                <SegmentedControl data={data} onChange={props.CalendarTypeSetFunction} radius={'md'}/>
                <div className="my-2 font-bold text-md">Name</div>
                <Input icon={<FontAwesomeIcon icon={faHeading} />} placeholder="Title" radius="md" onChange={e => props.TitleSetFunction(e.target.value)}/>
                <div className="mx-auto my-5 font-bold text-xl text-center">Events</div>
                <div className='flex flex-col flex-shrink-0 gap-1 overflow-y-scroll h-96 '>
                    {props.events.map((event,index)=>{
                        return <div key={index+event.title} className={`bg-stone-800 relative p-4 flex-shrink-0 flex flex-row justify-between w-[90%] overflow-hidden mx-auto `}>
                            {event.title ? <p className='w-32 truncate z-10 bg-blue-600 rounded-md px-2'>{event.title}</p> : <div></div>}
                            <div className='flex flex-row gap-2'>
                            <img src={event.image} className='absolute top-0 left-0 ' alt="" />
                            <ActionIcon variant="filled" color='red' onClick={()=>props.DeleteEvent(index)}><FontAwesomeIcon icon={faRemove}/></ActionIcon>
                            <ActionIcon variant="filled" color='blue'><FontAwesomeIcon icon={faPenToSquare}/></ActionIcon>
                            </div>



                        </div>
                    })}
                </div>
                
            </div>
        </div>
     );
}
 
export default CalenderEditor;