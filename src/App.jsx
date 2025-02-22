import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import FormInput from "./Pages/FormInput"
import Todo from "./Pages/Todo"

function App() {



      
    
  return (
   <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/form-input" element={<FormInput/>} />
        <Route path="/todo" element={<Todo/>}/>
      </Routes> 
    </BrowserRouter>

   </>
  )
}

export default App
