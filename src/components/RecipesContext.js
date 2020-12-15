import React from 'react'

const RecipesContext = React.createContext({
  savedRecipes: [],  
  searchedRecipes: [],
  weekdayRecipes: [],
  isAuthenticated: false,
  handleLogIn: () => {},
  handleLogOut: () => {},
  getSearchedRecipes: () => {},
  getWeekdayRecipes: () => {},
  getSavedRecipes: () => {}
})

export default RecipesContext;