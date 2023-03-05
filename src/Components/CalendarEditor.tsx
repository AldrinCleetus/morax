import { ActionIcon, Button, Input, SegmentedControl } from '@mantine/core';
import { faDownload, faEllipsis, faHeading, faImage, faPenToSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CalenderEditorProps, event } from '../Types/CalendarTypes';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";






const CalenderEditor = (props:CalenderEditorProps) => {

    const data = [
        { label: 'Month Calendar', value: 'month' },
        { label: 'Timeline', value: 'timeline' }
    ]

    return ( 
        <div className="m-6 md:w-[20%] lg:w-[30%] w-[20%] xl:w-[25%] border-stone-700 border-2 rounded-xl flex px-5 overflow-y-scroll ">
            <div className='w-[100%] flex flex-col'>
                <div className="mx-auto my-5 font-bold text-xl text-center">Calendar Editor</div>
                <div className="my-2 font-bold text-md">Style</div>
                <SegmentedControl data={data} onChange={props.CalendarTypeSetFunction} radius={'md'}/>
                <div className="my-2 font-bold text-md">Name</div>
                <Input icon={<FontAwesomeIcon icon={faHeading} />} placeholder="Title" radius="md" onChange={e => props.TitleSetFunction(e.target.value)}/>
                <div className="my-2 font-bold text-md">Background Image</div>
                <div className='flex flex-row justify-center'>
                <Dropzone
                className="my-2 flex flex-col w-[50%] "
                onDrop={(files) => props.SetBackgroundImage(URL.createObjectURL(files[0]))}
                onReject={(files) => props.SetBackgroundImage(undefined)}
                maxSize={5 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                >
                    
                    
                    {props.BackgroundImage === undefined ?  
                    <>
                    <div className="text-center"><FontAwesomeIcon icon={faImage} /></div>
                    <p className="text-center">Drag images here or click to select files</p>
                    </> :
                    
                    <img src={props.BackgroundImage} alt="helklo" />
                    
                    }   
                
                   
                    
                </Dropzone>
                {props.BackgroundImage ? 
                   <ActionIcon className='my-2 ml-2' variant="filled" color='red' onClick={()=>props.SetBackgroundImage(undefined)}><FontAwesomeIcon icon={faRemove}/></ActionIcon>:
                   ""}
                </div>

                <Button onClick={()=>{props.DownloadScreenshot(props.imageReference)}} className="mx-auto my-2" variant="outline" leftIcon={ <FontAwesomeIcon icon={props.isDownloading? faEllipsis : faDownload}/>}>Download Calendar Screenshot</Button>
                

                <div className="my-2 font-bold text-md">Events</div>
                <div className='flex flex-col flex-shrink-0 flex-grow-0 gap-1  h-4'>
                    {props.events.map((event,index)=>{
                        return <div key={index+event.title} className={`bg-stone-800 relative p-4 flex-shrink-0 flex flex-row justify-between w-[90%] overflow-hidden mx-auto `}>
                            {event.title ? <p className='w-64 truncate z-10 bg-blue-600 rounded-md px-2'>{event.title}</p> : <div>Untitled</div>}
                            <div className='flex flex-row gap-2'>
                            <img src={event.image} className='absolute top-0 left-0 ' alt="" />
                            <ActionIcon variant="filled" color='red' onClick={()=>props.DeleteEvent(index)}><FontAwesomeIcon icon={faRemove}/></ActionIcon>
                            <ActionIcon variant="filled" color='blue'onClick={()=>props.UpdateEvent(event,index)}><FontAwesomeIcon icon={faPenToSquare}/></ActionIcon>
                            </div>



                        </div>
                    })}
                </div>
                
                
            </div>
        </div>
    )
}
 
export default CalenderEditor;