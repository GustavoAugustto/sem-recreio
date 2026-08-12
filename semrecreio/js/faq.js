const perguntas = document.querySelectorAll(".faq-question");

perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", () => {
        const item = pergunta.parentElement;
        const aberta = item.classList.contains("active");
        document.querySelectorAll(".faq-item").forEach((faq) => {
            faq.classList.remove("active");
            faq.querySelector("span").textContent = "+";
        });
        if (!aberta) {
            item.classList.add("active");
            pergunta.querySelector("span").textContent = "−";
        }
    });
});
