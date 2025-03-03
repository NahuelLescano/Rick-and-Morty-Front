import { Characters } from "@/type.d"

const fetchCharacter = async () => {
    try {
        const result = await fetch('/characters.json')
        if (!result.ok) {
            throw new Error(`Error! HTTP status code: ${result.status}`)
        }

        const characters: Characters = await result.json()
        return characters
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`An error has occurred: ${error.message}`)
        }
        console.error(error)
    }
}

export const getCharacters = async () => {
    const characters = await fetchCharacter()
    if (characters == null) {
        throw new Error('Could not fetch characters')
    }
    return characters
}

export const getCharacterById = async (id: number) => {
    const characters = await fetchCharacter()
    if (characters == null) {
        throw new Error('Could not fetch characters')
    }

    const charIndex = characters.findIndex((char) => char.id === id)
    if (charIndex === -1) {
        throw new Error(`${id} does not exist`)
    }

    const character = characters[charIndex]
    return character
}
