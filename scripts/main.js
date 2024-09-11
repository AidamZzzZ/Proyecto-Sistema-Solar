// formula, peso de la luna
const input = document.querySelector("input");
const select = document.querySelector("select");
const button = document.querySelector("button");
const planet = document.querySelector(".planet");
const result = document.querySelector(".result");
const message = document.querySelector(".text");
const warning = document.querySelector(".warning-style");
const divImage = document.querySelector(".img-planet");

button.addEventListener("click", (e) => {
  let valor = input.value;
  let resultado;
  if (input.value === "") {
    warning.textContent = "Ingrese una masa";
  } else if (select.value === "") {
    warning.textContent = "Aún no elegiste un planeta";
  } else if (select.value === "1") {
    resultado = Math.floor(valor * 3.7);
    planet.textContent = "MERCURIO";
    warning.style.visibility = "hidden";
    message.style.visibility = "visible";
    result.textContent = resultado + ".00 N";
    divImage.setAttribute("src", "/images/mercury.png");
  } else if (select.value === "2") {
    resultado = Math.floor(valor * 8.87);
    planet.textContent = "VENUS";
    warning.style.visibility = "hidden";
    message.style.visibility = "visible";
    result.textContent = resultado + ".00 N";
    divImage.setAttribute("src", "/images/venus.png");
  } else if (select.value === "3") {
    resultado = Math.floor(valor * 9.807);
    planet.textContent = "TIERRA";
    warning.style.visibility = "hidden";
    message.style.visibility = "visible";
    result.textContent = resultado + ".00 N";
    divImage.setAttribute("src", "/images/earth.png");
  } else if (select.value === "4") {
    resultado = Math.floor(valor * 1.622);
    planet.textContent = "LUNA";
    warning.style.visibility = "hidden";
    message.style.visibility = "visible";
    result.textContent = resultado + ".00 N";
    divImage.setAttribute("src", "/images/moon.png");
  } else if (select.value === "5") {
    resultado = Math.floor(valor * 3.711);
    planet.textContent = "MARTE";
    warning.style.visibility = "hidden";
    message.style.visibility = "visible";
    result.textContent = resultado + ".00 N";
    divImage.setAttribute("src", "/images/mars.png");
  } else if (select.value === "6") {
    resultado = Math.floor(valor * 24.79);
    planet.textContent = "JUPITER";
    warning.style.visibility = "hidden";
    message.style.visibility = "visible";
    result.textContent = resultado + ".00 N";
    divImage.setAttribute("src", "/images/jupiter.png");
  } else if (select.value === "7") {
    resultado = Math.floor(valor * 10.44);
    planet.textContent = "SATURNO";
    warning.style.visibility = "hidden";
    message.style.visibility = "visible";
    result.textContent = resultado + ".00 N";
    divImage.setAttribute("src", "/images/saturn.png");
  } else if (select.value === "8") {
    resultado = Math.floor(valor * 8.69);
    planet.textContent = "URANO";
    warning.style.visibility = "hidden";
    message.style.visibility = "visible";
    result.textContent = resultado + ".00 N";
    divImage.setAttribute("src", "/images/uranus.png");
  } else if (select.value === "9") {
    resultado = Math.floor(valor * 11.15);
    planet.textContent = "NEPTUNO";
    warning.style.visibility = "hidden";
    message.style.visibility = "visible";
    result.textContent = resultado + ".00 N";
    divImage.setAttribute("src", "/images/neptune.png");
  } else if (select.value === "10") {
    resultado = Math.floor(valor * 0.62);
    planet.textContent = "PLUTON";
    warning.style.visibility = "hidden";
    message.style.visibility = "visible";
    result.textContent = resultado + ".00 N";
    divImage.setAttribute("src", "/images/pluto.png");
  }
});
