import React, { createContext, useState } from 'react';


export const SearchContext = createContext();


export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };


  const contextValue = {
    searchQuery,
    handleSearchQueryChange,
  };


  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};