import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Input  from './components/Input';
import Recipe  from './components/Recipe';

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;


function App() {
  const APP_ID = "dcaf6da3";
  const APP_KEY = "4e2b1c160e50682a0e8d9bc5119c3d1f";

  const [name, setName] = useState('Usuário');
  const [recipe, setRecipe] = useState([]);

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  },[query]);

  const getRecipes = async () =>{
    const response = await fetch(
        `https://api.edamam.com/search?q=${query}&from=10&to=20&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
      setRecipe(data.hits);
      console.log(data);
  }

  function addName(e){
    e.preventDefault()
    let name = e.target.value;
    setName(name);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">

      <Header nome={name}/>
      <Input typeInput={'user'} onChange={addName}/>

    <form onSubmit={handleSubmit}>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <button type="submit">Search Recipes</button>
    </form>
    <Div>
      {recipe.map( recipe => (
          <Recipe title = {recipe.recipe.label} 
                  calories = {recipe.recipe.calories} 
                  ingredients = {recipe.recipe.ingredientLines} 
                  time={recipe.recipe.totalTime} 
                  image = {recipe.recipe.image}/>      
      ))}
    </Div>
    
    </div>

    
  );
}

export default App;
