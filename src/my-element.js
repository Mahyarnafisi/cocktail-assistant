import { component, useState } from "haunted";
import { html } from "lit";
import "./components/CocktailList.js";
import "./components/SearchBar.js";
import "./components/ShoppingList.js";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  // fetching data from data base
  const fetchCocktails = async (query) => {
    setIsLoading(true);
    if (!query) {
      alert("Please enter a search term");
      return;
    }
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      setSearchResults(data.drinks);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  // add item to shopping list
  const onAddToShoppingList = (item) => {
    setShoppingList([...shoppingList, item]);
  };

  // remove item from shopping list
  const onRemoveFromShoppingList = (value) => {
    setShoppingList(shoppingList.filter((item) => item !== value));
  };

  return html`
    <div
      style="background-color:#21212105 ; width : 100% ; padding : 1.6rem ; border-radius: 1.6rem ; box-shadow: 0 2rem 4rem #21212125 ; display :flex , flex-direction : column  "
    >
      <search-bar .onSearch=${fetchCocktails} .isLoading=${isLoading}></search-bar>
      <div style="display: flex ; width :100%">
        <cocktail-list .results=${searchResults} .onAddToShoppingList=${onAddToShoppingList}></cocktail-list>
        <shopping-list .shoppingList=${shoppingList} .onRemoveFromShoppingList=${onRemoveFromShoppingList}></shopping-list>
      </div>
    </div>
  `;
}

customElements.define("my-element", component(App, { useShadowDOM: false }));
