import xxRequest from '@/services'
export const getHomePlus = () => xxRequest.get({
    url: '/home/plus'
})