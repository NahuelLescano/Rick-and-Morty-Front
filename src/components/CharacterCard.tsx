import type { Character } from "@/type.d"
import { Link } from "react-router-dom"
import { Card } from "./Card"

export const CharacterCard: React.FC<Character> = (
    { id, image, name, status, gender }
) => {
    return (
        <div
            className='bg-white rounded-lg shadow-md overflow-hidden'
        >
            <Card
                id={id}
                image={image}
                name={name}
                status={status}
                gender={gender}
            />

            <div className='pb-5'>
                <Link to={`/detail/${id}`}>
                    <button>
                        Show more
                    </button>
                </Link>
            </div>
        </div>
    )
}
