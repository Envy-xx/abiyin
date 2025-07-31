import xxRequest from '@/services'
export const getHomeHotRecommenddest = () => {
    return xxRequest.get({
        url:'home/hotrecommenddest'
    })
}

