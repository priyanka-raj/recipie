import React, { useEffect, useState } from 'react';
//import './style.css';
import axios from 'axios';
import Recipe1 from './Recipe1';
const Edamams = () => {
  const [recipes, setRecipies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const APP_ID = '6a273736';

  const APP_KEY = '865a60d828da3d2a692927e17a9b86e4';

  useEffect(() => {
    getRecipies();
  }, [query]);

  async function getRecipies() {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );

      console.log('Yay! Success!');

      setRecipies(response.data.hits);
      console.log(response.data.hits);
    } catch (error) {
      console.error(error);
    }
  }
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      {/* <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form> */}
      <div className="container justify-content-center">

                  <h2 >{query.toUpperCase()} RECIPES</h2>

        <form className="d-flex mt-5" onSubmit={getSearch}>
          <input
            className="form-control me-2 "
            style={{ width: '45%'}}
            type="search"
            autoCapitalize="characters"
            value={search}
            placeholder="Search here for the recipes you want.."
            aria-label="Search"
            onChange={updateSearch}
          />
          <button className="button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="container">
        <div className="row g-4 mt-5">
          {recipes.map((recipe) => (
            <Recipe1
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              url={recipe.recipe.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Edamams;
