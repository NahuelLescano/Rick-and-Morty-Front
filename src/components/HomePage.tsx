import { CharacterCard } from "./CharacterCard"
import { useCharacters } from "../hooks/useCharacters"

export const HomePage = () => {
    const { characters } = useCharacters()

    return (
        <main className='min-h-screen py-8'>
            <h1 className='text-center text-4xl font-bold mb-8 text-white-800'>
                Rick and Morty web page
            </h1>

            <section className='container mx-auto px-4'>
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
            </section>
        </main>
    )
}
