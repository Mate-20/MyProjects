import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../redux/postsSlice'; // Import your Redux actions
import { useNavigate } from 'react-router-dom';


const NewPost = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const newId = posts.length ? posts[posts.length - 1].id + 1 : 1;

        // Create a new post object with the form data
        const newPost = {
            id:newId,
            title: e.target.postTitle.value,
            category: e.target.postCat.value,
            body: e.target.postBody.value,
            likes : 0
        };

        // Dispatch the addPost action to add the new post to the Redux store
        dispatch(addPost(newPost));

        // Clear the form fields (optional)
        e.target.reset();

        navigate('/')
    };

    return (
        <main className="NewPost">
            <h2>Add Post</h2>
            <form className="mb-3" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="postTitle" className="form-label">
                        Title
                    </label>
                    <input
                        id="postTitle"
                        type="text"
                        required
                        className="form-control"
                        name="postTitle"
                    />
                </div>
                <div>
                    <label htmlFor="postCat" className="form-label">
                        Category
                    </label>
                    <input
                        id="postCat"
                        type="text"
                        required
                        className="form-control"
                        name="postCat"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="postBody" className="form-label">
                        Content
                    </label>
                    <textarea
                        id="postBody"
                        required
                        className="form-control"
                        name="postBody"
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Add
                </button>
            </form>
        </main>
    );
};

export default NewPost;

