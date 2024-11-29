import { Link } from "react-router-dom"
import { FaHouse } from "react-icons/fa6";
import { MdChat } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "preact/hooks";

export default function NavBar() {

    const [isLogged, setIsLogged] = useState(false)

    return (
        <>
            {isLogged && <nav>
                <Link to="/home">
                    <FaHouse />
                </Link>
                <Link>
                    <MdChat to="/home" />
                </Link>
                <Link to="/home">
                    <IoLocationSharp />
                </Link>
                <Link to="/home">
                    <RxHamburgerMenu />
                </Link>
            </nav>}
        </>
    )
}