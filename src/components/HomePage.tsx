import { CharacterCard } from "@components/CharacterCard"
import { useQuery } from "@tanstack/react-query"
import { getCharacters } from "@utils/characters"

export const HomePage: React.FC = () => {
    const { data: characters, isLoading, error } = useQuery({
        queryKey: ["characters"],
        queryFn: getCharacters
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
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
                            species={char.species}
                            origin={char.origin}
                            image={char.image}
                            location={char.location}
                            url={char.url}
                        />
                    ))
                }
            </div>
        </main>
    )
}
