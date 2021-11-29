import React, {useState, useEffect} from 'react'
import logo from "../image/netflix.png"
const Navbar = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setShow(true)
            }else{
                setShow(false)
            }
        })
        return () => {
           window.removeEventListener("scroll");
        }
    }, [])
    return (
        <div className={`navbar ${show && "nav_black"}`}>
            <img src={logo} alt="netflix" width="100" />
            <i className="fas fa-bars" style={{ lineHeight: "40px" }}></i>
        </div>
    )
}

export default Navbar
