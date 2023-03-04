import { faBuilding, faTriangleExclamation, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Timeline = () => {
    return ( 
        <div className="md:w-[80%] lg:w-[70%] w-[90%] xl:w-[60%] m-6 border-2 border-stone-700 rounded-xl flex ">

            <div className="my-auto mx-auto flex flex-col text-4xl">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-5xl"/>
                <p>Under Contruction</p>
            </div>
        </div>
     );
}
 
export default Timeline;