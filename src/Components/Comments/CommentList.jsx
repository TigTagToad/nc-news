import CommentCard from "./CommentCard";


export default function CommentList ({comments}) {

return(
   
    <>
        {
            comments.map((comment)=>{
                return (
                    <CommentCard key={comment.comment_id} comment={comment}/>
                )
            })
        }
    </>
    
)

}