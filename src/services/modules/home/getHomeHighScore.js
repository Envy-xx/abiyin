import xxRequest from '@/services'

export const getHomeHighScoreInfo = () => {
    return xxRequest.get({
        url:'home/highscore'
    })
}


