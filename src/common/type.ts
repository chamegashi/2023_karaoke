export type SearchCardType = {
    music_name: string,
    artist: string,
    key: number,
    max_key: string,
}

export type StreamSong = {
    music_name: string,
    artist: string,
}

export type StreamResponce = {
    damResponce: Array<StreamSong>,
    joyResponce: Array<StreamSong>,
}

export type Music = {
    music_name: string,
    music_name_hira: string,
    artist: string,
    key: string,
    max_key: string,
    max_score: string,
}

export type ViewType = 'stream' | 'search' | 'register'
export type ModelType = 'Joy' | 'DAM'