const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
if (totalDeRendimentos >= 28559.7) {
    if (aposentada == false) {
        if (portadoraDeDoenca == false) {
            console.log("PEGA LEAO")
        } else {
            console.log("ISENTA")
        }
    } else {
        console.log("ISENTA")
    }
} else {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
}