const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const historia = document.querySelector("#idHistoria");
const historiaRegresar = document.querySelector("#idHistoriaRegresar");

const uso = document.querySelector("#idUso");
const usoRegresar = document.querySelector("#idUsoRegresar");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

/*Botón de la historia*/
historia.addEventListener("click", () => {
  container.classList.add("sign-on-mode");
});

historiaRegresar.addEventListener("click", () => {
  container.classList.remove("sign-on-mode");
});
/*Fín del botón de la historia*/

/*Botón de Uso*/
uso.addEventListener("click", () => {
  container.classList.add("sign-down-mode");
});

usoRegresar.addEventListener("click", () => {
  container.classList.remove("sign-down-mode");
});
/*Fín del botón de Uso*/