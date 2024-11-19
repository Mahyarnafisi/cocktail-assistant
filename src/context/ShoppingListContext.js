import { createContext } from "haunted";
import { html } from "lit";
import { useState } from "haunted";

// Create the context
export const ShoppingListContext = createContext();

// Provider Component
export const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([]);

  return html` <shopping-list-context-provider .value=${{ shoppingList, setShoppingList }}> ${children} </shopping-list-context-provider> `;
};
