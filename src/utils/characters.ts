import type { CharacterApi, Result } from "@/type.d"

const BASE_URL = 'https://rickandmortyapi.com/api/character/'

const retryFetch = async (
    url: string,
    options: RequestInit = {},
    maxRetries: number = 3,
    delay: number = 1000

) => {
    let retryCount = 0

    while (retryCount < maxRetries) {
        try {
            const response = await fetch(url, options)
            if (response.ok) {
                return response
            } else {
                console.warn(`Fetch failed with status ${response.status}. retrying...`)
                retryCount++
            }
        } catch (error: any) {
            console.warn(`Fetch failed with error ${error.message}, retrying...`)
            retryCount++
        }
        await new Promise((resolve) => setTimeout(resolve, delay))
    }

    throw new Error(`Fetch failed after ${maxRetries} retries`)
}

const fetchCharacter = async (page?: number | null, id?: number) => {
    let url = BASE_URL
    if (id) {
        url = `${BASE_URL}${id}`
    } else {
        url = `${BASE_URL}?page=${page}`
    }

    try {
        const result = await retryFetch(url)
        const data = await result.json()
        return data
    } catch (error: any) {
        console.error('Final fetch error:', error)
    }
}

export const getCharacters = async (page: number) => {
    const charFetch: CharacterApi = await fetchCharacter(page)

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
