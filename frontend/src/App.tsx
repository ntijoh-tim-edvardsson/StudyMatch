import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage.tsx'
import SignInPage from './pages/SignInPage.tsx'
import SwipePage from './pages/SwipePage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/swipe" element={<SwipePage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
