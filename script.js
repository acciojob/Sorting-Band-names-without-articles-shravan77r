//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArticles(name) {
  return name.replace(/^(the|a|an)\s+/i, "").trim();
}

touristSpots.sort((a, b) => {
  const nameA = removeArticles(a.toLowerCase());
  const nameB = removeArticles(b.toLowerCase());
  return nameA.localeCompare(nameB);
});

function displayBands(bands) {
  const ul = document.getElementById("band");
  ul.innerHTML = ''; // Clear existing content

  for (const band of bands) {
    const li = document.createElement("li");
    li.textContent = band;
    ul.appendChild(li);
  }
}
displayBands(touristSpots);