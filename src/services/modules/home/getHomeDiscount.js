import xxRequest from '@/services'

export const getHomeDiscountInfo = () => {
    return xxRequest.get({
        url:'home/discount'
    })
}