import React,{useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export const App =()=> {
  const [progress, setProgress] = useState(0)
    return (
      <>
      <LoadingBar
        color='#6bdb80'
        progress={progress}
        loaderSpeed={1500}
        transitionTime={1000}
  
      />  
      <Navbar />
      <Routes>
        <Route path='/' element={<News setProgress={setProgress} key="science" pageSize={10} country="in" category="science" />} />
        <Route path='business' element={<News setProgress={setProgress} key="business" pageSize={10} country="in" category="business" />} />
        <Route path='entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={10} country="in" category="entertainment" />} />
        <Route path='general' element={<News setProgress={setProgress} key="general" pageSize={10} country="in" category="general" />} />
        <Route path='health' element={<News setProgress={setProgress} key="health" pageSize={10} country="in" category="health" />} />
        <Route path='technology' element={<News setProgress={setProgress} key="technology" pageSize={10} country="in" category="technology" />} />
      </Routes>
      </>
    )
}
export default App
