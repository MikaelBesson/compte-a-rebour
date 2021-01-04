//compte a rebour

// mes variables

let button  = document.getElementById("button-start");


button.addEventListener("click", function () {
    // En lui passant la valeur actuelle des l'input de choix des secondes en paramètre.
    createTimer(document.getElementById("input").value);
})


/**
 * Crée un div qui contiendra le décompte.
 * @param secs
 */
function createTimer(secs){
    let result = document.createElement('div');
    document.body.append(result);

    let idInterval = setInterval(() => {
        result.innerHTML = secs;
        if(secs === 0) {
            // Alors tu quitte !!
            clearInterval(idInterval);
        }
        secs--;
    }, 1000);
}




