import './App.css'
import BooksComponent from './Components/BooksComponent'
import FormComponent from './Components/FormComponent'
import Form from './Components/FormComponent'
import {Routes, Route} from 'react-router-dom'
import SuccessPage from './Components/SuccessPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<BooksComponent/>}/>
        <Route path="/form" element={<FormComponent/>}/>
        <Route path="/success" element={<SuccessPage/>}/>
      </Routes>
    </>
  )
}

export default App
