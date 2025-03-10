import { CharacterCard } from "@components/CharacterCard"
import { Pagination } from "@components/Pagination"
import { ErrorFallback } from "@components/ErrorFallback"
import { Loading } from "@components/Loading"
import { getCharacters } from "@utils/characters"
import { useSuspenseQuery } from "@tanstack/react-query"
import { Suspense } from "react"

interface Props {
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export const HomePage: React.FC<Props> = ({ page, setPage }) => {
    const { data: characters, isError, error, refetch } = useSuspenseQuery({
        queryKey: ["characters", page],
        queryFn: () => getCharacters(page)

    })

    if (isError) {
        return <ErrorFallback error={error} resetErrorBoundary={refetch} />
    }

    return (
        <main className='min-h-screen py-8'>
            <Pagination page={page} setPage={setPage} />

            <Suspense fallback={<Loading />}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        characters.map((char) => (
                            <CharacterCard
                                key={char.id}
                                id={char.id}
                                name={char.name}
                                status={char.status}
                                gender={char.gender}
                                image={char.image}
                            />
                        ))
                    }
                </div>
            </Suspense>

            <Pagination page={page} setPage={setPage} />
        </main>
    )
}
