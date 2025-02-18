export interface Character {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    url:      string;
}

export interface Location {
    name: string;
    url:  string;
}

export type Characters = Character[];
