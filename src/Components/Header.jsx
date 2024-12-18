
import TopicsList from "./Topics/TopicsList"
import {Link} from "react-router-dom"


export default function Header () {
    return (
        <>
        <h1>TUNS O' FUN</h1>
        <Link to={"/"} className="nav-link" key="home"><span className="link"> Home </span></Link>  
        <TopicsList/>
       
        </>
    )
}