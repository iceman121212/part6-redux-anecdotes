const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER_CHANGE':
      console.log(action)
      return action.searchText
    default:
      return state
  }
}

export const filterChange = searchText => {
  console.log(searchText)
  return {
    type: 'FILTER_CHANGE',
    searchText: searchText
  }
}

export default filterReducer