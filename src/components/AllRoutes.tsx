import { Route, Routes, useLocation } from "react-router-dom"
import { NavBar } from "@components/NavBar"
import { LandingPage } from "@components/LandingPage"
import { HomePage } from "@components/HomePage"
import { About } from "@components/About"
import { CharacterDetail } from "@components/CharacterDetail"

export const AllRoutes = () => {
    const location = useLocation()

    return (
        <div>
            {location.pathname !== '/' && <NavBar />}
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/about' element={<About />} />
                <Route path='/detail/:id' element={<CharacterDetail />} />
            </Routes>
        </div>
    )
}
