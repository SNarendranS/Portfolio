import Header from './Layouts/Header'
import Body from './Layouts/Body'
import Footer from './Layouts/Footer'
import { BrowserRouter } from 'react-router-dom'
import { Box } from '@mui/material'

function App() {

  return (
    <Box
      sx={{
      }}>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </Box>
  )
}

export default App