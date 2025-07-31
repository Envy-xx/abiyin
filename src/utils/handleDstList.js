export const handleDstList = (dstList) => {
  const cityList = Object.keys(dstList)
  const cityList0 = cityList.slice(0, 4)
  const cityList1 = cityList.slice(4, 8)
  const newCityList = []
  newCityList.push(cityList0)
  newCityList.push(cityList1)
  return newCityList
}

export const getselectedRooms = (dstList,currentIndex,selectedIndex) => {
  const cityList = Object.keys(dstList)
  const newCityList = handleDstList(cityList)
  const currentCityArray = newCityList[currentIndex] || [] 
  const selectedCity = currentCityArray[selectedIndex]
  const selectedRooms = selectedCity && dstList ? dstList[selectedCity] || [] : []
  return selectedRooms
}