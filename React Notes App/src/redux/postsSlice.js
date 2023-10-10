import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [{
      id: 0,
      title: 'Post 1',
      category: 'None',
      body: 'Lorem ipsum...',
      likes: 0,
    }],
  },
  reducers: {
    // Adding Function
    addPost: (state, action) => {
      state.posts.push({
        ...action.payload,
      });
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
    // Deleting Function
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);

      // Filter out the post from local storage
      const updatedPosts = state.posts.filter((post) => post.id !== action.payload);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
    },

    // Editing function
    editPost: (state, action) => {
      const { postId, title, category, body } = action.payload;
      const postIndex = state.posts.findIndex((post) => post.id === postId);
      console.log(postIndex)

      if (postIndex !== -1) {
        state.posts[postIndex] = {
          ...state.posts[postIndex],
          title,
          category,
          body,
        };
      }
    },    
    // Like and Dislike function
    likePost: (state, action) => {
      const { id, newLikes } = action.payload;
      const postIndex = state.posts.findIndex((post) => post.id === id);
      if (postIndex !== -1) {
        state.posts[postIndex].likes = newLikes;
        localStorage.setItem('posts', JSON.stringify(state.posts));
      }
    },
  },
});

export const { addPost, deletePost, editPost, likePost } = postsSlice.actions;
export default postsSlice.reducer;
