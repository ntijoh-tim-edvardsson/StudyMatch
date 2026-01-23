import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage.tsx'
import SignInPage from './pages/SignInPage.tsx'
import SwipePage from './pages/SwipePage.tsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/swipe" element={<SwipePage />} />
    </Routes>
  )
}

export default App
