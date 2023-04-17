export type SearchCardType = {
    song: string,
    artist: string,
    key: number,
    maxKey: string,
}

export type StreamSong = {
    song: string,
    artist: string,
}

export type StreamResponce = {
    damResponce: Array<StreamSong>,
    joyResponce: Array<StreamSong>,
}

export type ViewType = 'stream' | 'search' | 'register'
export type ModelType = 'Joy' | 'DAM'