
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editPost } from '../redux/postsSlice'; // Import your editPost action


const EditPage = () => {
    const { id } = useParams();
    const postId = parseInt(id, 10); // Convert id to a number
    const dispatch = useDispatch();
    
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const navigate = useNavigate();


    const post = posts.find((post) => post.id.toString() === id);

    const [postTitle, setPostTitle] = useState(post ? post.title : '');
    const [postBody, setPostBody] = useState(post ? post.body : '');
    const [postCat, setPostCat] = useState(post ? post.category : '');

    const updatedPost = { postId, title: postTitle, body: postBody, category: postCat };


    const handleSubmit = (e) => {
        e.preventDefault();         

        const postIndex = posts.findIndex((post) => post.id === postId);
        console.log(postIndex)
        const updatedPosts = [...posts];
        if (postIndex !== -1) {
            updatedPosts[postIndex] = {
                ...updatedPosts[postIndex],
                title: postTitle,
                category: postCat,
                body: postBody,
            };
            // Dispatch the editPost action directly
            dispatch(editPost(updatedPost));
            // After dispatching, you can perform additional tasks
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            navigate('/');
        }
    };

    return (
        <main className="EditPost">
            {post ? (
                <>
                    <h2>Edit Post</h2>
                    <form className="mb-3" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="postTitle" className="form-label">Title</label>
                            <input
                                id="postTitle"
                                type="text"
                                required
                                value={postTitle}
                                onChange={(e) => setPostTitle(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div >
                            <label htmlFor="postCat" className="form-label">Category</label>
                            <input
                                id="postCat"
                                type="text"
                                required
                                value={postCat}
                                onChange={(e) => setPostCat(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="postBody" className="form-label">Content</label>
                            <textarea
                                id="postBody"
                                required
                                value={postBody}
                                onChange={(e) => setPostBody(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-success">
                            Edit
                        </button>
                    </form>
                </>
            ) : (
                <>
                    <main className="Missing">
                        <div className="card text-center border-danger mb-3">
                            <div className="card-header">Empty</div>
                            <div className="card-body">
                                <h2 className="card-title">Post Not Found</h2>
                                <p className="card-text">
                                    Click Add on Navbar or visit Home
                                </p>
                            </div>
                        </div>
                    </main>
                </>
            )}
        </main>
    );
};

export default EditPage;
