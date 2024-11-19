import { component } from "haunted";
import { html } from "lit";

const ShoppingList = ({ shoppingList, onRemoveFromShoppingList }) => {
  console.log(shoppingList);
  const onRemoveHandler = (value) => {
    onRemoveFromShoppingList(value);
  };

  return html`
    <div style="width: 100%; min-width: 25rem;  flex:1; padding : 1.6rem; ">
      <div>
        <h2>shopping list</h2>
        <span>Number of items : ${shoppingList.length}</span>
      </div>
      <ul style="width : 100%">
        ${shoppingList.map(
          (item) => html`
            <li
              style="display:flex ; justify-content: space-between ; padding : .8rem ; border : 1px solid #21212125 ; border-radius : .8rem ; margin-bottom: 1rem;  "
            >
              <h2>${item.strDrink}</h2>
              <button @click=${() => onRemoveHandler(item)}>Remove</button>
            </li>
          `
        )}
      </ul>
    </div>
  `;
};

customElements.define("shopping-list", component(ShoppingList, { useShadowDOM: false }));
