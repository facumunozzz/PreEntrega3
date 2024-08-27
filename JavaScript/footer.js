const footer = document.getElementById("footer");
const descripcionFooter = document.createElement("p");
const fechaActual = new Date().getFullYear();

descripcionFooter.innerHTML = "PreEntrega 3 | Facundo Figueroa Muñoz " + fechaActual;
footer.appendChild(descripcionFooter);
