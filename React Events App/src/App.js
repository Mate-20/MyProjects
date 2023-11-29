import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AddEvent from './Components/AddEvent'
import EventsList from './Components/EventsList';
import OpenEvent from './Components/OpenEvent';
import Footer from './Components/Footer';
import ErrorPage from './Components/ErrorPage';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element = {<EventsList/>}/>
        <Route path="AddEvent" element = {<AddEvent/>}/>
        <Route path="view/:id" element = {<OpenEvent/>}/>
        <Route path="*" element = {<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
