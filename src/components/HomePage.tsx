import { CharacterCard } from "@components/CharacterCard"
import { Pagination } from "@components/Pagination"
import { Loading } from "@components/Loading"
import { getCharacters } from "@utils/characters"
import { useQuery } from "@tanstack/react-query"

interface Props {
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export const HomePage: React.FC<Props> = ({ page, setPage }) => {
    const { data: characters, isLoading, isError } = useQuery({
        queryKey: ["characters", page],
        queryFn: () => getCharacters(page)
    })

    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <div>An error has occurred...</div>
    }

    return (
        <main className='min-h-screen py-8'>
            <Pagination page={page} setPage={setPage} />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    characters?.map((char) => (
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

            <Pagination page={page} setPage={setPage} />
        </main>
    )
}
