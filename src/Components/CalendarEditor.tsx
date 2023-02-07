import { Input, SegmentedControl } from '@mantine/core';
import { Dispatch, useState } from 'react';
import { faHeading } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker } from '@mantine/dates';

type CalenderEditorProps = {
    CalendarTypeSetFunction: Dispatch<React.SetStateAction<string>>,
    TitleSetFunction: Dispatch<React.SetStateAction<string>>,
}

const CalenderEditor = (props:CalenderEditorProps) => {

    const data = [
        { label: 'Month Calendar', value: 'month' },
        { label: 'Timeline', value: 'timeline' }
    ]




    return ( 
        <div className="m-6 md:w-[20%] lg:w-[30%] w-[20%] xl:w-[20%] border-stone-700 border-2 rounded-xl flex px-5">
            <div className='w-[100%]'>
                <div className="mx-auto my-5 font-bold text-xl text-center">Calendar Editor</div>
                <div className="my-2 font-bold text-md">Style</div>
                <SegmentedControl data={data} onChange={props.CalendarTypeSetFunction} radius={'md'}/>
                <div className="my-2 font-bold text-md">Name</div>
                <Input icon={<FontAwesomeIcon icon={faHeading} />} placeholder="Title" radius="md" onChange={e => props.TitleSetFunction(e.target.value)}/>
            </div>
        </div>
     );
}
 
export default CalenderEditor;