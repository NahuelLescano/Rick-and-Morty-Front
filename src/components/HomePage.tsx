import { CharacterCard } from "./CharacterCard"
import { useCharacters } from "../hooks/useCharacters"

export const HomePage = () => {
    const { characters } = useCharacters()

    return (
        <main className='min-h-screen py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    characters.map((char) => (
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
