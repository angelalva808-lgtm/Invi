
function abrirInvitacion() {
    const sobre = document.querySelector(".sobre");
    const pantalla = document.getElementById("pantalla-sobre");
    const invitacion = document.getElementById("invitacion");

    sobre.classList.add("abierto");

    setTimeout(() => {
        pantalla.classList.add("oculto");

        setTimeout(() => {
            pantalla.style.display = "none";
            invitacion.style.display = "block";
        }, 1000);

    }, 1200);
}
