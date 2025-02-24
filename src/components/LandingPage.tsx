import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export const LandingPage: React.FC = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }

        return () => {
            document.body.classList.remove('no-scroll')
        }
    }, [location.pathname])

    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <div className="bg-white/20 border-2 backdrop-blur-md rounded-lg p-8 shadow-lg">
                <h1
                    className="text-5xl font-bold text-orange-600/70 mb-8"
                >
                    Welcome to Rick and Morty App!
                </h1>
                <Link
                    to="/home"
                    className="
                        bg-blue-500 hover:bg-blue-700 !text-white font-bold py-2 px-4 rounded-2xl 
                        transform transition-transform duration-200 ease-in-out hover:scale-105"
                >
                    Enter the portal
                </Link>
            </div>
        </main>
    )
}
