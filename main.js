async function loadElements() {
  const response = await fetch("data/elements.json");
  const elements = await response.json();

  const container = document.getElementById("elements");

  elements.forEach(el => {
    const card = document.createElement("div");
    card.className = "element-card";
    card.innerHTML = `
      <strong>${el.symbol}</strong><br/>
      ${el.name}
    `;
    card.onclick = () => alert(`${el.name} (#${el.atomicNumber})\nCategory: ${el.category}`);
    container.appendChild(card);
  });
}

loadElements();
