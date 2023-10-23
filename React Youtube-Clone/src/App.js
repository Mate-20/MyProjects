import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
