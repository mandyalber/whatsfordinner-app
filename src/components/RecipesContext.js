import React from 'react'

const RecipesContext = React.createContext({
  savedRecipes: [],  
  searchedRecipes: [],
  weekdayRecipes: [],
  setSavedRecipes: () => {},
  isAuthenticated: Boolean,
  userName: '',
  handleLogIn: () => {},
  handleLogOut: () => {},
  getSearchedRecipes: () => {},
  getWeekdayRecipes: () => {},
  getSavedRecipes: () => {}
})

export default RecipesContext