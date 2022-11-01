document.addEventListener("DOMContentLoaded",function(){
    const resultado = document.querySelector("#resultado");
    const marca = document.querySelector("#marca");
    const year = document.querySelector("#year");
    const minimo = document.querySelector("#minimo");
    const maximo = document.querySelector("#maximo");
    const transmision = document.querySelector("#transmision");
    const puertas = document.querySelector("#puertas");
    const color = document.querySelector("#color");
    const condicion = document.querySelector("#condicion");

    marca.addEventListener("change",function() {

    })
    console.log(autos)
    autos.forEach(vehculo => {
        const auto = document.createElement("DIV");
        auto.innerHTML = `
        <div class="auto">
        <div class="img">
            <img id="img" src="${vehculo.img}">
        </div>
        <div class="info">
            <p class="marca">Marca: <span>${vehculo.marca}</span></p>
            <p class="year">Año: <span>${vehculo.year}</span></p>
            <p class="precio">Precio: <span>$${vehculo.precio}</span></p>
            <p class="transmision">Transmisión: <span>${vehculo.transmision}</span></p>
            <p class="puertas">Puertas: <span>${vehculo.puertas}</span></p>
            <p class="color">Color: <span>${vehculo.color}</span></p>
            <p class="condicion">Condición: <span>${vehculo.condicion}</span></p>
        </div>
    </div>
        `;

        resultado.appendChild(auto);


    });


});