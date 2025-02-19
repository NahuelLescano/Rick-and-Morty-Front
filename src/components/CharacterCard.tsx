import { Character } from "@/type"

export const CharacterCard = (
    { id, image, name, status, gender } : Character
) => {
    return (

        <div
            key={id}
            className='bg-white rounded-lg shadow-md overflow-hidden'
        >
            <img
                src={image}
                alt={name}
                className='w-full h-64 object-cover'
            />
            <div className='p-5'>
                <h2
                    className='text-xl font-semibold mb-2 text-gray-800'
                >
                    {name}
                </h2>
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
