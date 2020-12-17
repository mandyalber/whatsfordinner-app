import React from 'react'

const RecipesContext = React.createContext({
  savedRecipes: [],  
  searchedRecipes: [],
  weekdayRecipes: [],
  isAuthenticated: Boolean,
  userName: '',
  handleLogIn: () => {},
  handleLogOut: () => {},
  getSearchedRecipes: () => {},
  getWeekdayRecipes: () => {},
  getSavedRecipes: () => {}
})

export default RecipesContext;