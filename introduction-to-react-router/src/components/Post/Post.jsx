import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id,title} = post;
    const postSyle ={
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
        
    }
    return (
        <div style={postSyle}>
            <h2>Post of Id: {id} </h2>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Post;