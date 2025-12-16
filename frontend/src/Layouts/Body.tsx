import {Routes,Route} from 'react-router-dom'
import Intro from '../Pages/Intro'
const Body = () => {
  return (
    <Routes>
                <Route path='/' element={<Intro/>}/>

        <Route path='/intro' element={<Intro/>}/>
    </Routes>
  )
}

export default Body