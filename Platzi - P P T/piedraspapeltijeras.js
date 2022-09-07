let piedra = "piedra";
let tijera = "tijera";
let papel = "papel";

const game = (pick1,pick2)=> {
    if (pick1 === pick2) {
        console.log("Hay un empate");
    } else if (pick1 == piedra) {
        if(pick2 == tijera) {
            console.log("Gano piedra");
        } else {
            console.log("Gano papel");
        }
    } else if (pick1 == tijera) {
        if(pick2 == papel) {
            console.log("Gano tijera");
        } else {
            console.log("Gano piedra");
        }
    } else if (pick1 == papel) {
        if(pick2 == piedra) {
            console.log("Gano papel");
        } else {
            console.log("Gano tijera");
        }
    }
}