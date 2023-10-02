import React, {useState} from 'react'
import './App.css'
import Homepage from './Homepage'
import ImageGrid from './components/ImageGrid'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const[flipped, setFlipped] = useState(false)

  const handleFlipped = () => {
    setFlipped(!flipped)
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Homepage />}/>
      <Route path='/image-grid/:level' element={<section className='imagegrid-component-wrapper' onClick={handleFlipped}>
      <ImageGrid flipped={flipped} />
      </section>} />
     
      </Routes>
    </BrowserRouter>
  )
}

export default App;
