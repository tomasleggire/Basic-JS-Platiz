function auto (marca,modelo,annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let autos = [];

for (let i = 0; i <= 30; i++) {
    let marca = prompt("Marca del auto");
    let modelo = prompt("Modelo del auto");
    let annio = prompt("Año del auto");
    autos.push(new auto(marca,modelo,annio))
}

console.log(autos);
