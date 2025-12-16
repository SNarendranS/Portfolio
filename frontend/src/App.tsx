import Header from './Layouts/Header'
import Body from './Layouts/Body'
import Footer from './Layouts/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Body />
      <Footer/>
    </BrowserRouter>
  )
}

export default App