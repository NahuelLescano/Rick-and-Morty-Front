import type { Character } from "@/type.d"
import { Link } from "react-router-dom"

export const CharacterCard: React.FC<Character> = ({ id, image, name, status, gender }) => {
    return (
        <div
            className='bg-white rounded-lg shadow-md overflow-hidden'
        >
            <img
                src={image}
                alt={name}
                className='w-full h-64 object-cover'
            />
            <div className='p-5'>
                <Link to={`/detail/${id}`}>
                    <h2
                        className='text-xl font-semibold mb-2 text-gray-800'
                    >
                        {name}
                    </h2>
                </Link>
                <h3
                    className='text-gray-600'
                >
                    Status: {status}
                </h3>
                <h3
                    className='text-gray-600'
                >
                    Gender: {gender}
                </h3>
            </div>
        </div>
    )
}
