export function initSearching(searchField) {
  return (query, state, action) => {
    const searchValue = state[searchField];

    if (!searchValue || searchValue.trim() === '') {
      return query; 
    }

    const cleanedSearch = searchValue
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');  

     return Object.assign({}, query, {
      search: cleanedSearch, 
      exactMatch: true
    });
  };
}

