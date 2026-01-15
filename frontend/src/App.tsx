import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage.tsx'
import SignInPage from './pages/SignInPage.tsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  )
}

export default App
