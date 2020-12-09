import React from 'react'

const RecipesContext = React.createContext({
  savedRecipes: [],  
  searchedRecipes: [],
  getSearchedRecipes: () => {},
  getSavedRecipes: () => {}
})

export default RecipesContext;