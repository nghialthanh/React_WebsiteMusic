
export const setMusictoAudio = (ListMusic) => {
    return {
        type: 'SET-LIST',
        payload: ListMusic,
    }
}
export const setindexMusictoAudio = (index) => {
    return {
        type: 'SET-INDEX',
        payload: index,
    }
}
export const setshowAudioPlay = (test) => {
    return {
        type: 'OPEN-DIALOG-MUSIC',
        payload: test
    }
}