import React from "react";
import { useState, useEffect } from "react";

import {Link} from "react-router-dom"
import { getTopics } from "../../axios/api";

export default function TopicsList({fromHeader}) {


const [topics, setTopics] = useState([]);

useEffect(() => {
      getTopics().then(( topics ) => {
          
        setTopics(topics);
      });
    }, []);

  return (
    
      topics.map((topic)=>{
            if(fromHeader) {
                return (
                    
                    <Link to={`/${topic.slug}`} className="nav-link" key={topic.slug}><span className="link"> {topic.slug} </span></Link> 
                )
            }
            else { return (

                <option value={topic.slug} key={topic.slug}>{topic.slug}</option>
            )
            } 
            }
           
          )
  
)
}