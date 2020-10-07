import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Recipe  from '../components/Recipe';

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FormField = styled.form`
  width: 500px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  width: 70%;
  height: 31px;
  padding-left: 20px;
`

const Button = styled.button`
  box-sizing: border-box;
  padding: 0;
  width: 30%;
  height: 36px;
`

function App() {
  const APP_ID = "dcaf6da3";
  const APP_KEY = "4e2b1c160e50682a0e8d9bc5119c3d1f";

  const [recipe, setRecipe] = useState([]);

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  },[query]);

  const getRecipes = async () =>{
    const response = await fetch(
        `https://api.edamam.com/search?q=${query}&from=40&to=50&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
      setRecipe(data.hits);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">

    <Header/>

    <FormField onSubmit={handleSubmit}>
      <Input value={search} onChange={e => setSearch(e.target.value)} />
      <Button type="submit">Search Recipes</Button>
    </FormField>

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
