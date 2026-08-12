(function () {
  "use strict";
  const FRAGMENTOS = [
    {
      id: 1,
      titulo: "FRAGMENTO 01",
      quote: "\u201cEnquanto outras crianças abraçavam seus brinquedos, eu carregava sacos de carvão\u2019",
      stat: "Mais de 1,8 milhão de crianças e adolescentes estão expostas às piores formas de exploração infantil no Brasil (IBGE/PNAD 2022).",
      foto: "../assents/img/0X.png", 
      fotoPronta: true,
      objeto: "../assents/img/1.1.png",
      objetoNome: "Urso de pelúcia",
      hotspot: { top: "63%", left: "62%" }
    },
    {
      id: 2,
      titulo: "FRAGMENTO 02",
      quote: "\u201cA mochila ficou pendurada. Eu fui pra roça\u201d",
      stat: "1 em cada 4 crianças que trabalham abandona a escola antes dos 14 anos.",
      foto: "../assents/img/2.2.png", 
      objeto: "../assents/img/02.png",
      objetoNome: "Mochila",
      hotspot: { top: "68%", left: "30%" }
    },
    {
      id: 3,
      titulo: "FRAGMENTO 03",
      quote: "\u201cMinha professora pediu pra desenhar minha casa. Eu desenhei o canavial.\u201d",
      stat: "A evasão escolar entre trabalhadores infantis chega a 34% (UNICEF).",
      foto: "../assents/img/03.png", 
      objeto: "../assents/img/3.3.png",
      objetoNome: "Desenho na parede",
      hotspot: { top: "30%", left: "48%" }
    },
    {
      id: 4,
      titulo: "FRAGMENTO 04",
      quote: "\u201cNunca joguei com meus brinquedos. Minhas mãos sempre estavam ocupadas.\u201d",
      stat: "Crianças no trabalho infantil têm 3x mais chance de sofrer lesões permanentes.",
      foto: "../assents/img/04.png", 
      objeto: "../assents/img/4.4.png", 
      objetoNome: "Cesto de brinquedos",
      hotspot: { top: "72%", left: "10%" }
    },
    {
      id: 5,
      titulo: "FRAGMENTO 05",
      quote: "\"Eu via outras crianças brincando lá fora. Eu olhava de dentro do depósito.\"",
      stat: "Entre jovens de 16 e 17 anos, a informalidade chega a 69,4%, o que classifica a situação automaticamente como trabalho infantil, independentemente da atividade.",
      foto: "../assents/img/05.png", 
      objeto: "../assents/img/5.5.png",
      objetoNome: "Janela",
      hotspot: { top: "15%", left: "12%" }
    },
    {
      id: 6,
      titulo: "FRAGMENTO 06",
      quote: "\u201cEu contei tudo o que acontecia, achei que alguém ia abrir o portão. Ninguém veio me buscar.\u201d",
      stat: "Apenas uma fração diminuta dos casos é alcançada pelos órgãos competentes. Em 2024, por exemplo, o Ministério do Trabalho e Emprego afastou 2.745 crianças e adolescentes dessa condição.",
      foto: "../assents/img/06.png",
      objeto: "../assents/img/6.6.png", 
      objetoNome: "Cesto de roupas",
      hotspot: { top: "62%", left: "88%" }
    },
    {
      id: 7,
      titulo: "FRAGMENTO 07",
      quote: "\u201cTrabalhamos as mesmas horas sob o mesmo sol. Mas na hora de receber, eu recebia bem menos.\u201d",
      stat: "Meninos brancos que trabalham ganham, em média, R$ 943 por mês. O rendimento cai para R$ 789 entre pretos e pardos, e atinge o menor patamar entre meninas pretas ou pardas (R$ 693).",
      foto: "../assents/img/07.png", 
      objeto: "../assents/img//7.7.png", 
      objetoNome: "Estante de livros",
      hotspot: { top: "18%", left: "85%" }
    },
    {
      id: 8,
      titulo: "FRAGMENTO 08",
      quote: "\u201cEu acordava às 4h para ir à feira. À noite, ainda tinha lição.\u201d",
      stat: "45% das crianças trabalhadoras dormem menos de 7 horas por noite.",
      foto: "../assents/img/08.png", 
      objeto: "../assents/img/8.8.png", 
      objetoNome: "Cama",
      hotspot: { top: "50%", left: "50%" }
    }
  ];

  const TOTAL_FRAGMENTOS = FRAGMENTOS.length;
  const coletados = new Set();

  function irPara(idTela) {
    document.querySelectorAll(".tela").forEach((tela) => tela.classList.remove("ativa"));
    const alvo = document.getElementById(idTela);
    if (alvo) alvo.classList.add("ativa");

    if (idTela === "tela-porta") iniciarEfeitoEscrita();
    if (idTela === "tela-mensagens") iniciarSequenciaMensagens();
    if (idTela === "tela-final") iniciarSequenciaFinal();
  }


  function escrever(elemento, texto, velocidade, aoTerminar) {
    elemento.textContent = "";
    elemento.classList.remove("escrita-completa");
    let i = 0;
    (function passo() {
      if (i <= texto.length) {
        elemento.textContent = texto.slice(0, i);
        i++;
        setTimeout(passo, velocidade);
      } else {
        elemento.classList.add("escrita-completa");
        if (aoTerminar) aoTerminar();
      }
    })();
  }

  let escritaJaFeita = false;
  function iniciarEfeitoEscrita() {
    if (escritaJaFeita) return;
    escritaJaFeita = true;

    const linha1 = document.getElementById("portaLinha1");
    const linha2 = document.getElementById("portaLinha2");
    const botao = document.getElementById("btnAbrirPorta");

    escrever(linha1, "Este quarto pertence a uma criança.", 45, function () {
      escrever(linha2, "Investigue os objetos e descubra sua história..", 35, function () {
        botao.hidden = false;
      });
    });
  }

  function montarHotspots() {
    const quarto = document.getElementById("tela-quarto");
    FRAGMENTOS.forEach((fragmento) => {
      const spot = document.createElement("button");
      spot.className = "hotspot";
      spot.type = "button";
      spot.style.top = fragmento.hotspot.top;
      spot.style.left = fragmento.hotspot.left;
      spot.dataset.id = fragmento.id;
      spot.setAttribute("aria-label", "Objeto " + fragmento.id);
      spot.addEventListener("click", function () {
        abrirFragmento(fragmento.id);
      });
      quarto.appendChild(spot);
    });
  }

  function atualizarContador() {
    const texto = document.getElementById("contadorTexto");
    texto.textContent = coletados.size + "/" + TOTAL_FRAGMENTOS;
    texto.classList.add("pulso");
    setTimeout(function () {
      texto.classList.remove("pulso");
    }, 300);
  }


  let fragmentoAtual = null;

  function abrirFragmento(id) {
    if (coletados.has(id)) return;
    fragmentoAtual = FRAGMENTOS.find((f) => f.id === id);
    if (!fragmentoAtual) return;

    document.getElementById("fragmentoTitulo").textContent = fragmentoAtual.titulo;
    document.getElementById("fragmentoQuote").textContent = fragmentoAtual.quote;
    document.getElementById("fragmentoStat").textContent = fragmentoAtual.stat;

    const fotoWrap = document.getElementById("fragmentoFoto");
    document.getElementById("fragmentoFotoImg").src = fragmentoAtual.foto;
    fotoWrap.classList.toggle("foto-pronta", !!fragmentoAtual.fotoPronta);

    document.getElementById("objetoFragmento").src = fragmentoAtual.objeto;
    document.getElementById("objetoFragmentoNome").textContent = fragmentoAtual.objetoNome;

    document.getElementById("overlayFragmento").hidden = false;
    document.getElementById("dicaQuarto").classList.add("escondida");
  }

  function fecharOverlay() {
    document.getElementById("overlayFragmento").hidden = true;
    fragmentoAtual = null;
  }

  function guardarFragmentoAtual() {
    if (!fragmentoAtual) return;
    coletados.add(fragmentoAtual.id);

    const spot = document.querySelector('.hotspot[data-id="' + fragmentoAtual.id + '"]');
    if (spot) spot.classList.add("coletado");

    atualizarContador();
    fecharOverlay();

    if (coletados.size === TOTAL_FRAGMENTOS) {
      finalizarQuarto();
    }
  }


  function finalizarQuarto() {
    const quarto = document.getElementById("tela-quarto");
    setTimeout(function () {
      quarto.classList.add("quarto-arruinado");
      setTimeout(function () {
        irPara("tela-estatisticas");
      }, 1800);
    }, 500);
  }

  function iniciarSequenciaMensagens() {
    const topo = document.querySelector("#tela-mensagens .card-titulo");
    const rodape = document.querySelector("#tela-mensagens .crde-azul");
    const cards = Array.from(document.querySelectorAll("#tela-mensagens .pilar .card"));

    [topo, ...cards, rodape].forEach((el) => el && el.classList.remove("visivel"));

    setTimeout(() => topo && topo.classList.add("visivel"), 200);
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add("visivel"), 700 + i * 350);
    });
    setTimeout(() => rodape && rodape.classList.add("visivel"), 700 + cards.length * 350 + 400);

    setTimeout(() => {
      irPara("tela-final");
    }, 700 + cards.length * 350 + 3200);
  }

  function iniciarSequenciaFinal() {
    const linhas = document.querySelectorAll("#tela-final .final-linha");
    linhas.forEach((l) => l.classList.remove("visivel"));
    linhas.forEach((linha, i) => {
      setTimeout(() => linha.classList.add("visivel"), 400 + i * 700);
    });
  }

  function compartilharLink() {
    const url = window.location.href;
    const toast = document.getElementById("toastCopiado");

    function mostrarToast() {
      toast.classList.add("visivel");
      setTimeout(() => toast.classList.remove("visivel"), 2200);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(mostrarToast).catch(mostrarToast);
    } else {
      const campo = document.createElement("textarea");
      campo.value = url;
      document.body.appendChild(campo);
      campo.select();
      document.execCommand("copy");
      document.body.removeChild(campo);
      mostrarToast();
    }
  }

  function reiniciarExperiencia() {
    coletados.clear();
    document.querySelectorAll(".hotspot").forEach((h) => h.classList.remove("coletado"));
    document.getElementById("tela-quarto").classList.remove("quarto-arruinado");
    document.getElementById("dicaQuarto").classList.remove("escondida");
    atualizarContador();
    irPara("tela-intro");
  }

  document.addEventListener("DOMContentLoaded", function () {
    montarHotspots();

    document.getElementById("btnEntrar").addEventListener("click", function () {
      irPara("tela-porta");
    });

    document.getElementById("btnAbrirPorta").addEventListener("click", function () {
      irPara("tela-quarto");
    });

    document.getElementById("btnGuardarFragmento").addEventListener("click", guardarFragmentoAtual);
    document.getElementById("btnFecharFragmento").addEventListener("click", fecharOverlay);
    document.getElementById("overlayFragmento").addEventListener("click", function (e) {
      if (e.target.id === "overlayFragmento") fecharOverlay();
    });

    document.getElementById("btnContinuarStats").addEventListener("click", function () {
      irPara("tela-mensagens");
    });

    document.getElementById("btnCompartilhar").addEventListener("click", compartilharLink);
    document.getElementById("btnVoltar").addEventListener("click", reiniciarExperiencia);
  });
})();
