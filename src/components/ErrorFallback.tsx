interface Props {
    error: Error | null
    resetErrorBoundary: () => void
}

export const ErrorFallback: React.FC<Props> = ({ error, resetErrorBoundary }) => {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-gray-100"
        >
            <div
                className="bg-white rounded-lg shadow-md p-4 max-w-md"
            >
                <h2 className="text-gray-800 mb-2">
                    Oops! Something were wrong.
                </h2>

                {
                    error && (
                        <div className="bg-gray-200 rounded-md p-4 mb-2">
                            <p className="text-gray-800 font-semibold">Error details:</p>
                            <p className="text-gray-700">{error.message}</p>
                        </div>
                    )
                }
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-md"
                    onClick={resetErrorBoundary}
                >
                    Try again
                </button>
            </div>
        </div>
    )
}
