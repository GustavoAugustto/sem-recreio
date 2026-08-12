const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const success = document.getElementById("success");
const nextButton = document.getElementById("next1");
const sendButton = document.getElementById("send");
const backButton = document.getElementById("back2");
const voltarPagina = document.querySelector(".voltar");
const inicioButton = document.getElementById("inicio");

function mostrarEtapa(etapa) {
    step1.classList.remove("active");
    step2.classList.remove("active");
    success.classList.remove("active");
    etapa.classList.add("active");
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

nextButton.addEventListener("click", () => {
    const nome = document.querySelector("#step1 input[type='text']");
    if (nome.value.trim() === "") {
        alert("Informe pelo menos o nome do denunciante.");
        nome.focus();
        return;
    }
    mostrarEtapa(step2);
});

sendButton.addEventListener("click", () => {
    const confirmou = document.querySelector("#step2 input[type='checkbox']");
    if (!confirmou.checked) {
        alert("Você precisa confirmar que as informações são verdadeiras.");
        return;
    }
    mostrarEtapa(success);
});

backButton.addEventListener("click", () => {
    mostrarEtapa(step1);
});

if (voltarPagina) {
    voltarPagina.addEventListener("click", () => {
        history.back();
    });
}

inicioButton.addEventListener("click", () => {
    window.location.href = "Sem Recreio/index.html";
});
