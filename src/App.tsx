import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
import Login from './pages/login'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Login />} />
          <Route path="/dashboard" caseSensitive={false} element={<Dashboard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
