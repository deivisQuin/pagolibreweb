const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
/*inicio prueba*/
const historia = document.querySelector("#idHistoria");
const historiaRegresar = document.querySelector("#idHistoriaRegresar");
/*fin de prueba*/

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

/*eliminar inicio de prueba*/
historia.addEventListener("click", () => {
  container.classList.add("sign-on-mode");
});

historiaRegresar.addEventListener("click", () => {
  container.classList.remove("sign-on-mode");
});
/*Eliminar fin de prueba*/