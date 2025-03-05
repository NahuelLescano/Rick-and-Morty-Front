export interface CharacterApi {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string | null;
    prev:  string | null;
}

export interface Result extends Character {
    species:  string;
    type:     string;
    origin:   Location;
    location: Location;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface Location {
    name: string;
    url:  string;
}

export interface Character {
    id:       number;
    name:     string;
    status:   string;
    gender:   string;
    image:    string;
}
