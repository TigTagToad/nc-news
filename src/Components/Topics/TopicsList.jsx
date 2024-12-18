import React from "react";
import { useState, useEffect } from "react";

import {Link} from "react-router-dom"
import { getTopics } from "../../axios/api";

export default function TopicsList() {


const [topics, setTopics] = useState([]);

useEffect(() => {
      getTopics().then(( topics ) => {
          console.log(topics)
        setTopics(topics);
      });
    }, []);

  return (
    
      topics.map((topic)=>{
          return (
           
            <Link to={`/${topic.slug}`} className="nav-link" key={topic.slug}> {topic.slug} </Link>
           
          )
      }
  )
)
}