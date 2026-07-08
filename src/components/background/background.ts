import "./background.css"

interface CodeSymbol {
  text: string;
  x: string;
  y: string;
  fontSize: string;
  opacity: string;
  rotate: string;
}

const symbols: CodeSymbol[] = [
  { text: "</>", x: "5%", y: "12%", fontSize: "4.5rem", opacity: "0.3", rotate: "-10deg" },
  { text: "{}", x: "82%", y: "8%", fontSize: "6rem", opacity: "0.3", rotate: "8deg" },
  { text: "[]", x: "72%", y: "55%", fontSize: "4.5rem", opacity: "0.2", rotate: "-6deg" },
  { text: "=>", x: "12%", y: "65%", fontSize: "3rem", opacity: "0.1", rotate: "14deg" },
  { text: "//", x: "48%", y: "82%", fontSize: "3.75rem", opacity: "0.1", rotate: "-8deg" },
  { text: "&&", x: "88%", y: "38%", fontSize: "3rem", opacity: "0.1", rotate: "5deg" },
  { text: "()", x: "3%", y: "42%", fontSize: "3.75rem", opacity: "0.2", rotate: "20deg" },
  { text: ";", x: "62%", y: "18%", fontSize: "8rem", opacity: "0.2", rotate: "0deg" },
  { text: "!=", x: "30%", y: "90%", fontSize: "3rem", opacity: "0.1", rotate: "-15deg" },
  { text: "??", x: "93%", y: "72%", fontSize: "3.75rem", opacity: "0.1", rotate: "10deg" },
];

export function initBackground(): void {
  const container = document.getElementById("page-background");
  if (!container) return;

  const symbolsContainer = document.createElement("div");
  symbolsContainer.className = "background-container";

  symbols.forEach((symbol) => {
    const symbolElement = document.createElement("div");
    symbolElement.className = "background-symbol";
    symbolElement.innerText = symbol.text;
    symbolElement.style.left = symbol.x;
    symbolElement.style.top = symbol.y;
    symbolElement.style.fontSize = symbol.fontSize;
    symbolElement.style.opacity = symbol.opacity;
    symbolElement.style.transform = `rotate(${symbol.rotate})`;
    
    symbolsContainer.appendChild(symbolElement);
  });

  const glowContainer = document.createElement("div");
  glowContainer.className = "background-container";

  const orb1 = document.createElement("div");
  orb1.className = "glow-orb glow-orb-1";

  const orb2 = document.createElement("div");
  orb2.className = "glow-orb glow-orb-2";

  glowContainer.appendChild(orb1);
  glowContainer.appendChild(orb2);
  
  container.appendChild(symbolsContainer);
  container.appendChild(glowContainer);
}

document.addEventListener("DOMContentLoaded", initBackground);