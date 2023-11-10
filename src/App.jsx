import { useState } from 'react'
import './App.css'
import AverageRatings from './components/AdverageRatings'
import './style.css'
import Reviews from './components/Reviews'
import SentimentAnalysis from './components/SentimentAnalysis'
import Sidebar from './components/Sidebar'
import WebsiteVisitors from './components/WebsiteVisitors'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="container">
   <AverageRatings/>
   <Reviews/>
   <SentimentAnalysis/>
   <Sidebar/>
   <WebsiteVisitors/>
   </div>
  
  )
}

export default App
