export type SearchCardType = {
    title: string,
    artist: string,
    key: number,
    maxKey: string,
}

export type StreamCardType = {
    title: string,
    artist: string,
}

export type StreamResponce = {
    damResponce: Array<StreamSong>,
    joyResponce: Array<StreamSong>,
}

export type StreamSong = {
    artist: string,
    song: string,
}

export type ViewType = 'stream' | 'search' | 'register'