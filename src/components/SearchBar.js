import { component, useState } from "haunted";
import { html } from "lit";

function SearchBar({ onSearch, isLoading }) {
  const [query, setQuery] = useState("");

  // press key enter to search
  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  // search for the query
  const searchHandler = () => {
    if (!query) {
      alert("Please enter a search term");
      return;
    }

    onSearch(query);
    setQuery("");
  };

  return html`
    <div style="display:flex ; width : 100% ; gap: .8rem">
      <input
        @keypress=${keyPressHandler}
        .value=${query}
        @input=${(e) => setQuery(e.target.value)}
        type="search"
        id="search"
        name="search"
        placeholder="Search.."
        style="width:100%"
      />
      <button type="submit" style="${isLoading ? "background-color: red;" : "color: white;"}" @click=${searchHandler}>
        ${isLoading ? "loading..." : "Search"}
      </button>
    </div>
  `;
}

customElements.define("search-bar", component(SearchBar, { useShadowDOM: false }));
