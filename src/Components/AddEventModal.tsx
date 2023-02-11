import { Button, Modal, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { AddEventModalProps } from "../Types/CalendarTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faImage } from "@fortawesome/free-solid-svg-icons";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";




const AddEventModal = (props: AddEventModalProps) => {
    return ( 
        <Modal
            opened={props.modalStatus}
            onClose={() => props.SetModalStatus(false)}
            title="Add Event">
                <div className="my-2 font-bold text-md">Date</div>
                <DatePicker className='my-2' placeholder="Pick date" label="Event date" defaultValue={props.newEvent.startDate} onChange={e => props.UpdateEventDate(e,"startDate")} required clearable={false}/>
                <DatePicker className='my-2' placeholder="Pick date" label="End date (Optional)" onChange={e => props.UpdateEventDate(e,"endDate")} excludeDate={(date) => props.newEvent.startDate? date < props.newEvent.startDate : false}/>
                <TextInput placeholder="Title" label="Title of the Event" onChange={e => props.UpdateEventTitle(e.currentTarget.value)}/>

                <Dropzone
                className="my-2 flex flex-col"
                onDrop={(files) => props.SetImage(files[0])}
                onReject={(files) => props.SetImage(undefined)}
                maxSize={3 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                >
                    
                    
                    {props.image === undefined ?  
                    <>
                    <div className="text-center"><FontAwesomeIcon icon={faImage} /></div>
                    <p className="text-center">Drag images here or click to select files</p>
                    </> :
                    
                    <img src={URL.createObjectURL(props.image)} alt="helklo" />
                    
                    }

                   

                </Dropzone>


                <Button className="my-2" variant="default" color="dark" leftIcon={ <FontAwesomeIcon icon={faCheck} />} onClick={props.AddEventToCalendar}>
                   Add 
                </Button>
            </Modal>
     );
}
 
export default AddEventModal;