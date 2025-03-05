import { useQuery } from "@tanstack/react-query"
import { getCharacterById } from "@utils/characters"
import { useParams } from "react-router-dom"
import { Card } from "@components/Card"

export const CharacterDetail: React.FC = () => {
    const { id } = useParams()
    if (id == null) return

    const { data: charDetail, isLoading, isError } = useQuery({
        queryKey: ["characterDetail", Number(id)],
        queryFn: () => getCharacterById(Number(id)),
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Something were wrong!</div>
    }

    if (!charDetail) {
        return <div>No character were found.</div>
    }

    return (
        <Card {...charDetail} />
    )
}
