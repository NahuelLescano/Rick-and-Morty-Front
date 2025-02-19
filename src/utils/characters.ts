export const getCharacters = async () => {
    const result = await fetch('./characters.json')
    if (!result.ok) {
        throw new Error(`Error! HTTP status code: ${result.status}`)
    }

    const charactersJson = await result.json()
    return charactersJson
}
