let principal = document.getElementsByTagName("main")[0];

let titulo = document.createElement("h1");
titulo.innerHTML = "PRE ENTREGA N3 DE JAVASCRIPT"
principal.append(titulo);


const cuerpo = document.body;
const header = document.querySelector('#header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

const enlaces = [
    {
        link: "index",
        nombre: "Inicio"
    },
    {
        link: "productos",
        nombre: "Productos"
    },
    {
        link: "contact",
        nombre: "Contacto"
    }
]

header.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = "navbar";

for (const link of enlaces) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.link}.html">${link.nombre}</a>`;
    ul.appendChild(li);
}

