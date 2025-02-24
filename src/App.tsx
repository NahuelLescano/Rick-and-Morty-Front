import './App.css'
import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom"
import { HomePage } from '@components/HomePage'
import { LandingPage } from '@components/LandingPage'
import { About } from '@components/About'
import { NavBar } from '@components/NavBar'

function App() {
    const location = useLocation()

    return (
        <div>
            {location.pathname !== '/' && <NavBar />}
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    )
}

export default App
