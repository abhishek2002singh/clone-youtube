import { useEffect } from "react"
import { COMMENT_API} from '../utils/constant'


const commentList=[
    {
        name:"kamal",
        comment : "nice video",
        reply: [
            {
                name : "rajpal",
                comment : "not good video",
                reply : []
            },
            {
                name : "satyanarayan",
                comment : "not good video",
                reply : [
                    {
                        name : "rajpal",
                        comment : "not good video",
                        reply : []
                    },
                ]
            }
        ]          
    },
    {
        name:"abhishek singh",
        comment : "awesome video",
        reply: [] ,           
    },
    {
        name:"Lalu yadav",
        comment : "love you , this type of video",
        reply: [] ,           
    },
    {
        name:"ujjwal",
        comment : "wow , this is awesome" ,
        reply: [] ,          
    },
    {
        name:"poonam",
        comment : "oh , this is good",
        reply: [] ,           
    },
    {
        name:"mamta",
        comment : "bad video",
        reply: [] ,           
    },
    {
        name:"somya yadav",
        comment : "such a nice video" ,
        reply: [] ,          
    },
]

const Comment =({items})=>{
    const {name ,comment,reply}=items
    return <div className="flex shadow-sm bg-gray-200 w-[980px] rounded-lg">
          <img src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" 
          className="h-101 w-11"
          alt=""
          
          />
          <div className="px-3">
            <h1 className="font-bold">{name}</h1>
            <h1>{comment}</h1>
          </div>
        
    </div>
}

const CommentContainer=({comments})=>{
    return comments.map((comment)=>(
        <div>
            <Comment  items={comment}/>
            <div className="pl-5 border border-l-black ml-5">
            <CommentContainer comments={comment.reply}/>
            </div>
        </div>
        
    ))
}

const CommentSection =()=>{

    return(
        <div >
        
        <h1 className="font-bold text-2xl mx-5">comments :</h1>
       
           <CommentContainer comments={commentList} />
        </div>
    )
}

export default CommentSection