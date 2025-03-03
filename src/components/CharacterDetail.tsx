import { useQuery } from "@tanstack/react-query"
import { getCharacterById } from "@utils/characters"
import { useParams } from "react-router-dom"

export const CharacterDetail: React.FC = () => {
    const { id } = useParams()
    if (id == null) return

    const { data: charDetail, isLoading } = useQuery({
        queryKey: ["characterDetail", Number(id)],
        queryFn: () => getCharacterById(Number(id)),
    })


    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <section className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
                className='w-full h-90 object-cover'
                src={charDetail?.image}
                alt={charDetail?.name}
            />

            <div className="pb-5">
                <h2
                    className='text-pretty font-semibold mb-2 text-gray-800'
                >
                    name: {charDetail?.name}
                </h2>
                <h2
                    className='text-pretty text-gray-600'
                >
                    gender: {charDetail?.gender}
                </h2>
                <h2

                    className='text-pretty text-gray-600'
                >
                    location: {charDetail?.location.name}
                </h2>
                <h2
                    className='text-pretty text-gray-600'
                >
                    status: {charDetail?.status}
                </h2>
                <h2
                    className='text-pretty text-gray-600'
                >
                    species: {charDetail?.species}
                </h2>
                <h2
                    className='text-pretty text-gray-600'
                >
                    origin: {charDetail?.origin.name}
                </h2>
            </div>
        </section>
    )
}
