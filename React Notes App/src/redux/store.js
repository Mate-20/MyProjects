import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';

const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  preloadedState: {
    posts: {
      posts: storedPosts,
    },
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
