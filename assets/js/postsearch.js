import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", function () {
  const filterItems = (searchTerm) => {
  const items = document.querySelectorAll(".post-list > li");

  items.forEach((li) => {
    li.classList.remove("unloaded");
  });

  if (CSS.highlights) {
    const nonMatchingElements = highlightSearchTerm({
      search: searchTerm,
      selector: ".post-list > li"
    });

    if (nonMatchingElements == null) return;

    nonMatchingElements.forEach((li) => {
      li.classList.add("unloaded");
    });
  } else {
    items.forEach((li) => {
      const text = li.innerText.toLowerCase();
      if (!text.includes(searchTerm)) {
        li.classList.add("unloaded");
      }
    });
  }
};


  const updateInputField = () => {
    const hashValue = decodeURIComponent(window.location.hash.substring(1)); // Remove the '#' character
    document.getElementById("bibsearch").value = hashValue;
    filterItems(hashValue);
  };

  // Sensitive search. Only start searching if there's been no input for 300 ms
  let timeoutId;
  document.getElementById("bibsearch").addEventListener("input", function () {
    clearTimeout(timeoutId); // Clear the previous timeout
    const searchTerm = this.value.toLowerCase();
    timeoutId = setTimeout(filterItems(searchTerm), 300);
  });

  window.addEventListener("hashchange", updateInputField); // Update the filter when the hash changes

  updateInputField(); // Update filter when page loads
});