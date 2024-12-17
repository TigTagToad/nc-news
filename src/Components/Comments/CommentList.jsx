import CommentCard from "./CommentCard";


export default function CommentList ({comments}) {

return(
   
    <ul>
        {
            comments.map((comment)=>{
                return (
                    <CommentCard key={comment.comment_id} comment={comment}/>
                )
            })
        }
    </ul>
    
)

}