import { Card } from "@components/Card"
import { ErrorFallback } from "@components/ErrorFallback"
import { Loading } from "@components/Loading"
import { getCharacterById } from "@utils/characters"
import { useParams } from "react-router-dom"
import { useSuspenseQuery } from "@tanstack/react-query"
import { Suspense } from "react"

export const CharacterDetail: React.FC = () => {
    const { id } = useParams()
    if (id == null) return

    const { data: charDetail, isError } = useSuspenseQuery({
        queryKey: ["characterDetail", Number(id)],
        queryFn: () => getCharacterById(Number(id)),
    })

    if (isError) {
        return <ErrorFallback />
    }

    return (
        <Suspense fallback={<Loading />}>
            <Card {...charDetail} />
        </Suspense>
    )
}
