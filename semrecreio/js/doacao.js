const step1 = document.getElementById("step1");
const success = document.getElementById("success");
const avancar = document.getElementById("avancar");
const voltar = document.querySelector(".voltar");
const inicio = document.getElementById("inicio");
const copiarPix = document.getElementById("copiarPix");

function mostrarEtapa(etapa) {
    step1.classList.remove("active");
    success.classList.remove("active");
    etapa.classList.add("active");
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

avancar.addEventListener("click", () => {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    if (nome.value.trim() === "") {
        alert("Informe seu nome.");
        nome.focus();
        return;
    }
    if (email.value.trim() === "") {
        alert("Informe seu e-mail.");
        email.focus();
        return;
    }
    mostrarEtapa(success);
});

copiarPix.addEventListener("click", (e) => {
    e.preventDefault();
    const chavePix = "pix@semrecreio.org";
    navigator.clipboard.writeText(chavePix);
    alert("Chave PIX copiada!");
});

if (voltar) {
    voltar.addEventListener("click", () => {
        history.back();
    });
}

inicio.addEventListener("click", () => {
    window.location.href = "./inicio.html";
});
