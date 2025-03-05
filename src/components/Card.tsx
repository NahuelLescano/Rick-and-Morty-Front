import type { Location } from "@/type.d"

interface Props {
    id:         number;
    name:       string;
    status:     string;
    image:      string;
    gender:     string;
    species?:   string;
    origin?:    Location;
    location?:  Location;
}

export const Card: React.FC<Props> = ({ image, name, status, gender, species, origin, location }) => {
    return (
        <section className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
                className='w-full h-90 object-cover'
                src={image}
                alt={name}
            />

            <div className='pb-5'>
                <h2
                    className='text-pretty font-semibold mb-2 text-gray-800'
                >
                    name: {name}
                </h2>
                <h2
                    className='text-pretty text-gray-600'
                >
                    gender: {gender}
                </h2>
                {
                    location &&
                    <h2

                        className='text-pretty text-gray-600'
                    >
                        location: {location.name}
                    </h2>
                }
                <h2
                    className='text-pretty text-gray-600'
                >
                    status: {status}
                </h2>
                {
                    species &&
                    <h2
                        className='text-pretty text-gray-600'
                    >
                        species: {species}
                    </h2>
                }
                {
                    origin &&
                    <h2
                        className='text-pretty text-gray-600'
                    >
                        origin: {origin.name}
                    </h2>
                }
            </div>
        </section>
    )
}
