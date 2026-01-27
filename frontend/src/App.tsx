import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import MyProfile from './pages/MyProfile.tsx'
import SwipePage from './pages/SwipePage.tsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/swipe" element={<SwipePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Routes>
  )
}

export default App
