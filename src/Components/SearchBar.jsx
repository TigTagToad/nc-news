
import { useState} from "react"
import { useSearchParams } from "react-router"

export default function SearchBar () {
    const [toggle, setToggle] = useState(true)
    const [formData, setFormData] = useState(
        {
            "sort_by": "created_at",
            "order": "ASC"

        }
    )
    const [searchParams, setSearchParams] = useSearchParams();

 

    const handleClick = () => {
        const newOrder = toggle ? 'DESC' : 'ASC';
        setToggle(!toggle);
        setFormData({ ...formData, order: newOrder });
        setSearchParams({ ...formData, order: newOrder });  
    }

    const handleSortChange = (e) => {
        const newSortBy = e.target.value;
        setFormData({ ...formData, sort_by: newSortBy });
        setSearchParams({ ...formData, sort_by: newSortBy });  
       
    }
   
  
    return(
    <div>
       
     

         <label><span className="link">Sort By: </span>
        <select 
            name="sort_by" 
            id="sort_by"
            value={formData.sort_by} 
            onChange={handleSortChange} 
            className="link"
        >
            <option value="created_at" key="created_at" className="link"> date posted </option>
            <option value="comment_count" key="comment_count" className="link"> comment count </option>
            <option value="votes" key="votes" className="link"> votes </option>
        </select>
        </label>
       
        <label name="order"><span className="link"> Order: </span> 
        <button type="toggle" onClick={handleClick}><span className="link">{toggle ? " Ascending " : " Descending "}</span></button>
        </label>
        
     
    </div>
    )

}