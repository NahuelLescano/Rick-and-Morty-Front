interface Props {
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination: React.FC<Props> = ({ page, setPage }) => {
    const previousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1))
    }

    const nextPage = () => {
        setPage((prevPage) => prevPage + 1)
    }

    return (
        <div className="flex justify-center m-4">
            <button
                onClick={previousPage}
                disabled={page === 1}
            >
                Prev
            </button>

            <button
                onClick={nextPage}
            >
                Next
            </button>
        </div>
    )
}
