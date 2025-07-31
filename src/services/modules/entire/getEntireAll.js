import xxRequest from '@/services'

export const getEntireAll = (offset = 0, size = 20) => {
  return xxRequest.get({
    url: `entire/list?offset=${offset}&size=${size}`,
  })
}