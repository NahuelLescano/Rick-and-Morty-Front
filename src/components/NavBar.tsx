import { NavLink } from "react-router-dom"
import { LINKS } from "@/consts/links"

export const NavBar: React.FC<{ currentPage: number }> = ({ currentPage }) => {
    return (
        <nav className="border-2 backdrop-blur-md rounded-lg p-8 shadow-lg bg-transparent py-4 fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto flex items-center justify-center">
                <ul>
                    <li className="flex space-x-4">
                        {LINKS.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.to === '/home' ? `/home?page=${currentPage}` : link.to}
                                className="text-gray-300 hover:text-white"
                            >
                                {link.text}
                            </NavLink>
                        ))}
                    </li>
                </ul>
            </div>
        </nav>
    )
}
