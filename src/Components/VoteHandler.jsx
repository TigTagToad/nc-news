import { useState } from "react";
import { updateVotesOnArticleById } from "../axios/api";

export default function VoteHandler ({votes, article_id }){
    const [votesAdded, setVotesAdded] = useState(0)
    const [error, setError] = useState(null)

const handleClickUp = (event) => {
    event.preventDefault()
    setVotesAdded((currVotesAdded)=>{
        return currVotesAdded + 1
    })
    setError(null);
    updateVotesOnArticleById(article_id, 1).catch((err)=>{
        setError("Your vote was not successful. Please try again!");
        setVotesAdded((currVotesAdded)=>{
            return currVotesAdded -1
        })
    })
}

const handleClickDown = () => {
    setVotesAdded((currVotesAdded)=>{
        return currVotesAdded - 1
    })
    setError(null);
    updateVotesOnArticleById(article_id, -1).catch((err)=>{
        setError("Your vote was not successful. Please try again!");
        setVotesAdded((currVotesAdded)=>{
            return currVotesAdded + 1
        })
    })
}
   return(
    <>
    <p>Total Votes: {votes + votesAdded}</p>
    <button type="submit" onClick={handleClickUp}>Up Vote</button>
    <button typeof="submit" onClick={handleClickDown}>Down Vote</button>
    {error ? <p>{error}</p> : null}
    </>
   )
}