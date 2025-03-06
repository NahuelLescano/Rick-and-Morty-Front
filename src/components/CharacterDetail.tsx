import { Card } from "@components/Card"
import { Loading } from "@components/Loading"
import { getCharacterById } from "@utils/characters"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

export const CharacterDetail: React.FC = () => {
    const { id } = useParams()
    if (id == null) return

    const { data: charDetail, isLoading, isError } = useQuery({
        queryKey: ["characterDetail", Number(id)],
        queryFn: () => getCharacterById(Number(id)),
    })

    if (isLoading) {
        return <Loading />
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
