import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Routes, Route} from "react-router-dom"
import {Home, Recipe} from "./Container"
const App = () => {
  const [ingredient, setIngredient] = useState("")
  const [search, setSearch] = useState("")
  const [recipes, setRecipes] = useState(null)
  const handleIngredient = (event) => {
    event.preventDefault()
    setIngredient(search.toLowerCase())
  }
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_KEY}&ingredients=${ingredient}`)
      .then(res => {
        setRecipes(res.data)
      }).catch(error => console.log(error))
  }, [ingredient])
  return (
    <Routes>
      <Route path="/" exact element={<Home search={search} setSearch={setSearch} recipes={recipes} handleIngredient={handleIngredient}/>}/>
      <Route path="/recipe/:id" element={<Recipe/>}/>
    </Routes>
  )
}

export default App