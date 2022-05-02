import React from 'react';

const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className="col-sm-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src={image} class="card-img-top image-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
            <div class="dropdown">
              <p class="dropdown-toggle" data-bs-toggle="dropdown">
                Ingredients
              </p>
              <div class="dropdown-menu">
                {ingredients.map((ingredient) => (
                  <ol>{ingredient.text}</ol>
                ))}
              </div>
            </div>
          </p>
          <a href={url} class="btn btn-outline-success">
            View full Recipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
