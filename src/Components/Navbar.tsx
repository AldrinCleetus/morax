import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mantine/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";




const Navbar = () => {
    return ( 
        <div className=" h-20 flex justify-between text-white p-3">

            <div className="my-auto flex">
                <img src="icons/logo.svg" alt=""  className="mx-3 w-8"/>
                <Link to='/'><h2 className="text-3xl font-bold italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-200 to-blue-500 ">Kalender</h2></Link>
                <div className="version my-auto ml-3 bg-stone-700 px-2 py-1 text-xs rounded-xl text-stone-400">
                    <p>v0.0.8</p>
                </div>
            </div>

           <div className="my-auto">
                <Link to='/create'><Button className="mx-2" variant="outline" leftIcon={ <FontAwesomeIcon icon={faPlus} />}>
                    Create
                </Button></Link>
                <a href="https://github.com/AldrinCleetus/morax">
                <Button className="mx-2" variant="default" color="dark" leftIcon={ <img src="icons/github.svg" alt="" width={"20px"}/>}>
                    Github
                </Button>
                </a>
           </div>
        </div>
     );
}
 
export default Navbar;