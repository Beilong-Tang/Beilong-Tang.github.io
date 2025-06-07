import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", function () {
  const filterItems = (searchTerm) => {
  const table = document.querySelector("table");
  if (!table) return;

  // Remove previously hidden rows
  table.querySelectorAll("tr").forEach((row) => {
    row.classList.remove("unloaded");
  });

  const cellSelector = "td, th";

  if (CSS.highlights) {
    const nonMatchingElements = highlightSearchTerm({
      search: searchTerm,
      selector: cellSelector
    });

    if (nonMatchingElements == null) return;

    const allRows = table.querySelectorAll("tr");
    allRows.forEach((row) => {
      const cells = row.querySelectorAll(cellSelector);
      const allCellsUnmatched = Array.from(cells).every((cell) => nonMatchingElements.includes(cell));
      if (allCellsUnmatched) {
        row.classList.add("unloaded");
      }
    });
  } else {
    // Fallback for browsers without CSS.highlights
    table.querySelectorAll("tr").forEach((row) => {
      const cells = row.querySelectorAll(cellSelector);
      const combinedText = Array.from(cells).map(cell => cell.innerText.toLowerCase()).join(" ");
      if (!combinedText.includes(searchTerm)) {
        row.classList.add("unloaded");
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
