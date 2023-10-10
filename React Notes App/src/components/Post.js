import React from 'react';
import { useDispatch } from 'react-redux';
import { likePost } from '../redux/postsSlice'; // Import your Redux actions
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const dispatch = useDispatch();

    const handleLikeClick = (postId, newLikes) => {
        // Dispatch the likePost action to update likes in the Redux store
        dispatch(likePost({ id: postId, newLikes }));
    };

    const handleDislikeClick = (postId, newLikes) => {
        // Likes should not be negative, so prevent dislikes when likes are zero
        if (post.likes > 0) {
            // Dispatch the dislikePost action to update likes in the Redux store
            dispatch(likePost({ id: postId, newLikes }));
        }
    };

    return (
        <div className="card text-bg-dark mb-2 border-success post">
            <h5 className="card-header">{post.title}</h5>
            <div className="card-body">
                <p className="card-title">Category: {post.category}</p>
                <p className="card-text postBody">
                    {post.body.length <= 25
                        ? post.body
                        : `${post.body.slice(0, 25)}...`}
                </p>
                <div className="container d-flex">
                    <Link to={`post/${post.id}`} className="btn btn-primary viewbtn ">View Post</Link>
                    <button className="btn btn-success ms-3 likebtn "
                        onClick={() => handleLikeClick(post.id, post.likes + 1)}
                    >
                        <i className="bi bi-hand-thumbs-up"></i></button>
                    <h6 className='ms-3 mt-2 likes'>{post.likes}</h6>
                    <button
                        className="btn btn-success ms-3 dislikebtn"
                        onClick={() => handleDislikeClick(post.id, post.likes - 1)}
                        disabled={post.likes === 0}
                    >
                        <i className="bi bi-hand-thumbs-down"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Post;
