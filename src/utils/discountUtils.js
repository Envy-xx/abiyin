/**
 * 从折扣信息中提取城市列表
 * @param {Object} discountInfo - 折扣信息对象
 * @returns {Array} 城市名称数组
 */
export const getCityList = (discountInfo) => {
  if (!discountInfo || !discountInfo.dest_list) {
    return []
  }
  
  return Object.keys(discountInfo.dest_list)
}

/**
 * 获取特定城市的房源信息
 * @param {Object} discountInfo - 折扣信息对象
 * @param {string} cityName - 城市名称
 * @returns {Array} 该城市的房源数组
 */
export const getCityRooms = (discountInfo, cityName) => {
  if (!discountInfo || !discountInfo.dest_list || !discountInfo.dest_list[cityName]) {
    return []
  }
  
  return discountInfo.dest_list[cityName]
}

/**
 * 获取所有城市的房源信息
 * @param {Object} discountInfo - 折扣信息对象
 * @returns {Object} 城市名到房源数组的映射
 */
export const getAllCityRooms = (discountInfo) => {
  if (!discountInfo || !discountInfo.dest_list) {
    return {}
  }
  
  return discountInfo.dest_list
}

/**
 * 获取折扣信息的标题和副标题
 * @param {Object} discountInfo - 折扣信息对象
 * @returns {Object} 包含 title 和 subtitle 的对象
 */
export const getDiscountTitle = (discountInfo) => {
  if (!discountInfo) {
    return { title: '', subtitle: '' }
  }
  
  return {
    title: discountInfo.title || '',
    subtitle: discountInfo.subtitle || ''
  }
} 