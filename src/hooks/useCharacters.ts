import { Characters } from "@/type"
import { getCharacters } from "../utils/characters"
import { useState, useEffect } from "react"

export const useCharacters = () => {
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

    return { characters }
}
