import { ActionIcon, Button, ColorPicker, Modal, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { AddEventModalProps } from "../Types/CalendarTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faImage, faRemove } from "@fortawesome/free-solid-svg-icons";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";




const AddEventModal = (props: AddEventModalProps) => {

    return ( 
        <Modal
            opened={props.modalStatus}
            onClose={() => props.SetModalStatus(false)}
            title="Add Event">
                <div className="my-2 font-bold text-md">Date</div>
                <DatePicker className='my-2' placeholder="Pick date" label="Event date" defaultValue={props.newEvent.startDate} onChange={e => props.UpdateEventDate(e,"startDate")} required clearable={false}/>
                <DatePicker className='my-2' placeholder="Pick date" label="End date (Optional)" defaultValue={props.newEvent.endDate} onChange={e => props.UpdateEventDate(e,"endDate")} excludeDate={(date) => props.newEvent.startDate? date < props.newEvent.startDate : false}/>
                <TextInput placeholder="Title" label="Title of the Event" defaultValue={props.newEvent.title} onChange={e => props.UpdateEventTitle(e.currentTarget.value)}/>

                <Dropzone
                className="my-2 flex flex-col"
                onDrop={(files) => props.SetImage(URL.createObjectURL(files[0]))}
                onReject={(files) => props.SetImage(undefined)}
                maxSize={3 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                >
                    
                    
                    {props.newEvent.image === undefined ?  
                    <>
                    <div className="text-center"><FontAwesomeIcon icon={faImage} /></div>
                    <p className="text-center">Drag images here or click to select files</p>
                    </> :
                    
                    <img src={props.newEvent.image} alt="helklo" />
                    
                    }

                   

                </Dropzone>
                {props.newEvent.image ? 
                   <ActionIcon className='my-2 ml-2' variant="filled" color='red' onClick={()=>props.SetImage(undefined)}><FontAwesomeIcon icon={faRemove}/></ActionIcon>:
                   ""}

                <ColorPicker onChange={e => props.SetColor(e)} className="w-[100%]" withPicker={false} swatchesPerRow={7} format="hex" swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']} />


                <Button className="my-2" variant="default" color="dark" leftIcon={ <FontAwesomeIcon icon={faCheck} />} onClick={props.AddEventToCalendar}>
                   Add 
                </Button>
            </Modal>
     );
}
 
export default AddEventModal;