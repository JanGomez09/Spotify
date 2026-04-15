const btn = document.querySelector(".install");

btn.addEventListener("click", () => {
  btn.textContent = "Instalando...";
  btn.style.background = "#aaa";

  setTimeout(() => {
    btn.textContent = "Abrir";
    btn.style.background = "#1a73e8";
  }, 2000);
});