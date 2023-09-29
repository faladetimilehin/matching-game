import './App.css'
import Homepage from './Homepage'
import ImageGrid from './components/ImageGrid'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Homepage />}></Route>
      <Route path='/image-grid' element={<section className='imagegrid-component-wrapper'>
      <ImageGrid />
      </section>}>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
