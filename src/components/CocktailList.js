import { component } from "haunted";
import { html } from "lit";

const CocktailList = ({ results, onAddToShoppingList }) => {
  // add item to shopping list
  const onAddHandler = (value) => {
    onAddToShoppingList(value);
  };

  if (results.length === 0) {
    return html` <div style="padding : 1.6rem;">
      <h2>no resualt</h2>
    </div>`;
  }
  return html`
    <div style="width :100% ;padding : 1.6rem;">
      <div>
        <h2>number of result : ${results.length}</h2>
      </div>
      <div>
        <ul style=" display:flex ; flex-direction :column ; gap: .8rem ;justify-content: flex-start; ">
          ${results.map(
            (cocktail) => html`
              <li
                style="width: 100% ; display : flex ; padding : .8rem ; border : 1px solid #21212150 ; justify-content: space-between; border-radius : .8rem ;  background-color:white  "
              >
                <h2 style="width : 8rem ;  text-wrap: nowrap;">${cocktail.strDrink}</h2>
                <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" style="width:12.8rem ; border-radius: 1.6rem ; " />
                <p style="padding: .8rem ; width : 50% ;">${cocktail.strInstructions}</p>
                <button @click=${() => onAddHandler(cocktail)}>Add</button>
              </li>
            `
          )}
        </ul>
      </div>
    </div>
  `;
};

customElements.define("cocktail-list", component(CocktailList, { useShadowDOM: false }));
