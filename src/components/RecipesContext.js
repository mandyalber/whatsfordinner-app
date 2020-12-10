import React from 'react'

const RecipesContext = React.createContext({
  savedRecipes: [],  
  searchedRecipes: [],
  weekdayRecipes: [],
  getSearchedRecipes: () => {},
  getWeekdayRecipes: () => {},
  getSavedRecipes: () => {}
})

export default RecipesContext;