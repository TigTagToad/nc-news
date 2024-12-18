
import TopicsList from "./Topics/TopicsList"
import {Link} from "react-router-dom"
import SearchBar from "./SearchBar"
import { useLocation } from "react-router-dom";


export default function Header () {
    const location = useLocation();
    const showSearchBar = !location.pathname.includes('/articles/');
    return (
        <>
        <h1>TUNS O' FUN</h1>
        <Link to={"/"} className="nav-link" key="home"><span className="link"> Home </span></Link>  
        <TopicsList fromHeader={true}/>
        {showSearchBar && <SearchBar />}
        </>
    )
}