import xxRequest from '@/services'

export const getHomeGoodPriceInfo = () => {
    return xxRequest.get({
        url:'home/goodprice'
    })
}


