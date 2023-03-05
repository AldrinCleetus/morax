import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
    <div className="flex flex-row justify-around h-[90%]">
        <div className="my-auto mx-12 w-[70%]">
            <h3 className="my-5  font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500">Craft Your Perfect Calendar: Add Images, Events, and More!</h3>
            <p className="text-xl opacity-80">Welcome to a customizable event calendar app! Create beautiful calendars that showcase all your important events with ease. Add photos, events, and more to make your calendar unique and export it as an image to easily share with others. Perfect for event planning, tracking important dates, or just staying organized. Start building your perfect calendar today!</p>
            <Link to='/create'><Button className="my-6" size="xl" variant="outline" leftIcon={ <FontAwesomeIcon icon={faPlus} />}>
                    Try it out!
                </Button></Link>
        </div>
        <div className="my-auto transition-all ease-in-out hover:scale-105 mx-12">
            <img src="../landing/front.png" alt="error" />
        </div>
    </div> );
}
 
export default Home;