const guardarEnElLocalStorage = (key, value) =>  localStorage.setItem(key, value);
guardarEnElLocalStorage("carrito", JSON.stringify(carrito));

const borrarProducto = document.getElementById("borrarProducto");

borrarProducto.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
})