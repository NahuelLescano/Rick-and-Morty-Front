import { CharacterCard } from "@components/CharacterCard"
import { useQuery } from "@tanstack/react-query"
import { getCharacters } from "@utils/characters"
import { useState } from "react"

export const HomePage: React.FC = () => {
    const [page, setPage] = useState(1)

    const { data: characters, isLoading, isError } = useQuery({
        queryKey: ["characters"],
        queryFn: () => getCharacters(page)
    })

    console.log(page);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>An error has occurred...</div>
    }

    return (
        <main className='min-h-screen py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    characters?.map((char) => (
                        <CharacterCard
                            key={char.id}
                            id={char.id}
                            name={char.name}
                            status={char.status}
                            gender={char.gender}
                            image={char.image}
                        />
                    ))
                }
            </div>
            <div>
                <button
                    onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
                    disabled={page === 1}
                >
                    Prev
                </button>

                <button
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                >
                    Next
                </button>
            </div>
        </main>
    )
}
