import React from 'react'

const RecipesContext = React.createContext({
  savedRecipes: [],  
  searchedRecipes: [],
  getRecipes: () => {},
})

export default RecipesContext;