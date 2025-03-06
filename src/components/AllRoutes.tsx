import { Route, Routes, useLocation } from "react-router-dom"
import { NavBar } from "@components/NavBar"
import { LandingPage } from "@components/LandingPage"
import { HomePage } from "@components/HomePage"
import { About } from "@components/About"
import { CharacterDetail } from "@components/CharacterDetail"
import { useState } from "react"

export const AllRoutes = () => {
    const location = useLocation()

    const [page, setPage] = useState(1)

    return (
        <div>
            {location.pathname !== '/' && <NavBar currentPage={page} />}
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<HomePage page={page} setPage={setPage} />} />
                <Route path='/about' element={<About />} />
                <Route path='/detail/:id' element={<CharacterDetail />} />
            </Routes>
        </div>
    )
}
