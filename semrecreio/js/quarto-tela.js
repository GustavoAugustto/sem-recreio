(function () {
  "use strict";
  const OBJETOS = [
    { id: 1, nome: "Urso de pelúcia", top: "63%", left: "62%" },
    { id: 2, nome: "Mochila", top: "68%", left: "30%" },
    { id: 3, nome: "Desenho na parede", top: "30%", left: "48%" },
    { id: 4, nome: "Cesto de brinquedos", top: "72%", left: "10%" },
    { id: 5, nome: "Janela", top: "15%", left: "12%" },
    { id: 6, nome: "Cesto de roupas", top: "62%", left: "88%" },
    { id: 7, nome: "Estante de livros", top: "18%", left: "85%" },
    { id: 8, nome: "Cama", top: "50%", left: "50%" }
  ];

  const TOTAL = OBJETOS.length;
  const coletados = new Set();

  function montarHotspots() {
    const quarto = document.getElementById("quarto");
    OBJETOS.forEach((objeto) => {
      const spot = document.createElement("button");
      spot.className = "hotspot";
      spot.type = "button";
      spot.style.top = objeto.top;
      spot.style.left = objeto.left;
      spot.dataset.id = objeto.id;
      spot.setAttribute("aria-label", objeto.nome);
      spot.title = objeto.nome;
      spot.addEventListener("click", function () {
        coletarObjeto(objeto.id, spot);
      });
      quarto.appendChild(spot);
    });
  }

  function atualizarContador() {
    const texto = document.getElementById("contadorTexto");
    texto.textContent = coletados.size + "/" + TOTAL;
    texto.classList.add("pulso");
    setTimeout(function () {
      texto.classList.remove("pulso");
    }, 300);
  }

  function coletarObjeto(id, spotEl) {
    if (coletados.has(id)) return;

    coletados.add(id);
    spotEl.classList.add("coletado");
    atualizarContador();
    document.getElementById("dicaQuarto").classList.add("escondida");
    if (coletados.size === TOTAL) {
      setTimeout(function () {
        document.getElementById("quarto").classList.add("quarto-arruinado");
      }, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", montarHotspots);
})();
