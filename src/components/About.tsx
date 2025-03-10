export const About: React.FC = () => {
    return (
        <main className="border-2 backdrop-blur-md bg-transparent rounded-lg shadow-md overflow-hidden">
            <div className="p-5">
                <img
                    src="images/profile-photo.webp"
                    alt="A random image"
                    className="object-cover"
                />
                <p
                    className="text-4xl font-semibold text-wrap text-gray-900">
                    Re write my Rick and Morty web page
                </p>
            </div>
        </main>
    )
}
