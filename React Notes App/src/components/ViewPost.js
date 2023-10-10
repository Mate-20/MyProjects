import { useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { deletePost } from '../redux/postsSlice'; // Import your Redux actions


const ViewPage = ({ posts }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete = (postId) => {
        // Dispatch the deletePost action with the postId as payload
        dispatch(deletePost(postId));
        navigate('/')
      };

    return (
        <main className="PostPage">
            <h2>View Post</h2>
            <article className="post">
                {post &&
                    <>
                        <div className="card border-success mb-3">
                            <div className="card-header">{post.title}</div>
                            <div className="card-body text-success">
                                <h5 className="card-title">{post.category}</h5>
                                <p className="card-text">{post.body}</p>
                                <a className="btn btn-danger" onClick={() => handleDelete(post.id)}>Delete</a>  
                                <Link to={`/edit/${post.id}`} className="btn btn-success ms-3">Edit</Link>  
                            </div>
                        </div>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>

    )
}

export default ViewPage
