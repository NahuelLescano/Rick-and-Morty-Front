import { useEffect, useState } from 'react'
import { Characters } from '../type.d'
import './App.css'

const getCharacters = async () => {
    const result = await fetch('./characters.json')
    if (!result.ok) return

    const charactersJson = await result.json()
    return charactersJson
}

function App() {
    const [characters, setCharacters] = useState<Characters>([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const charJson = await getCharacters()
                setCharacters(charJson)
            } catch (error: unknown) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    return (
        <main className='min-h-screen py-8'>
            <h1 className='text-center text-4xl font-bold mb-8 text-white-800'>
                Rick and Morty web page
            </h1>

            <section className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        characters.map((char) => (
                            <div
                                key={char.id}
                                className='bg-white rounded-lg shadow-md overflow-hidden'
                            >
                                <img
                                    src={char.image}
                                    alt={char.name}
                                    className='w-full h-64 object-cover'
                                />
                                <div className='p-5'>
                                    <h2
                                        className='text-xl font-semibold mb-2 text-gray-800'
                                    >
                                        {char.name}
                                    </h2>
                                    <h3
                                        className='text-gray-600'
                                    >
                                        Status: {char.status}
                                    </h3>
                                    <h3
                                        className='text-gray-600'
                                    >
                                        Gender: {char.gender}
                                    </h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

export default App
