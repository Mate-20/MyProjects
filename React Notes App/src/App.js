import Layout from './components/Layout';
import Home from './components/Home';
import NewPost from './components/NewPost';
import ViewPage from './components/ViewPost';
import Missing from './components/ErrorPage';
import EditPage from './components/EditPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function App() {
  
  const posts = useSelector((state) => state.posts.posts);
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home posts={posts}/>} />
        <Route path="post">
          <Route index element={<NewPost
          />} />
          <Route path=":id" element={<ViewPage
            posts={posts}
          />} />

        </Route>
        <Route path="edit/:id" element={<EditPage
          posts={posts}
        />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
