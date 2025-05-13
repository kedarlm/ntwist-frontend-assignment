function sortList() {
  const ul = document.getElementById("nameList");
  const items = Array.from(ul.querySelectorAll("li"));
  items.sort((a, b) => a.textContent.localeCompare(b.textContent));
  ul.innerHTML = "";
  items.forEach(item => ul.appendChild(item));
}
