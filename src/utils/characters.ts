import type { CharacterApi, Result } from "@/type.d"

const BASE_URL = 'https://rickandmortyapi.com/api/character/'

const fetchCharacter = async (page: number | null, id?: number) => {
    let url = BASE_URL
    if (id) {
        url = `${BASE_URL}${id}`
    } else {
        url = `${BASE_URL}?page=${page}`
    }

    try {
        const result = await fetch(url)
        const data = await result.json()
        return data
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`An error has occurred: ${error.message}`)
        }
        console.error(error)
    }
}

export const getCharacters = async (page: number) => {
    const charFetch: CharacterApi = await fetchCharacter(page)
    if (charFetch == null) {
        throw new Error('Could not fetch characters')
    }

    const characters = charFetch
        .results.map((char) => ({
            id: char.id,
            name: char.name,
            status: char.status,
            gender: char.gender,
            origin: char.origin,
            location: char.location,
            image: char.image,
            species: char.species,
        }))

    return characters
}

export const getCharacterById = async (id: number) => {
    const charFetch: Result = await fetchCharacter(null, id)
    if (charFetch == null) {
        throw new Error('Could not fetch characters')
    }

    const character = {
        id: charFetch.id,
        name: charFetch.name,
        status: charFetch.status,
        gender: charFetch.gender,
        origin: charFetch.origin,
        location: charFetch.location,
        image: charFetch.image,
        species: charFetch.species,
    }

    return character
}
