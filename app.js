    const resultado = document.querySelector("#resultado");
    const marca = document.querySelector("#marca");
    const year = document.querySelector("#year");
    const minimo = document.querySelector("#minimo");
    const maximo = document.querySelector("#maximo");
    const transmision = document.querySelector("#transmision");
    const puertas = document.querySelector("#puertas");
    const color = document.querySelector("#color");
    const estado = document.querySelector("#estado");
    const years = document.createElement("option");
    const maxYear = new Date().getFullYear();
    const minYear = maxYear - 10;

    for (let i = maxYear; i > minYear; i--) {
        const option = document.createElement("option");
        option.textContent = i;
        option.value = i;
        year.appendChild(option);
    }


    const datos = {
        marca: "",
        year: "",
        min: "",
        max: "",
        transmision: "",
        puertas: "",
        color: "",
        estado: "",
    }

    document.addEventListener("DOMContentLoaded", () => {
        mostrarAutos(autos);
    })



    marca.addEventListener("change", e => {
        datos.marca = e.target.value;
        filtrarAutos();
    });
    year.addEventListener("change", e => {
        datos.year = e.target.value;
        filtrarAutos();
    });
    minimo.addEventListener("change", e => {
        datos.min = e.target.value;
        filtrarAutos();
    });
    maximo.addEventListener("change", e => {
        datos.max = e.target.value;
        filtrarAutos();
    });
    transmision.addEventListener("change", e => {
        datos.transmision = e.target.value;
        filtrarAutos();
    });
    color.addEventListener("change", e => {
        datos.color = e.target.value;
        filtrarAutos();
    });
    puertas.addEventListener("change", e => {
        datos.puertas = e.target.value;
        filtrarAutos();
    });
    estado.addEventListener("change", e => {
        datos.estado = e.target.value;
        filtrarAutos();
    });


    function mostrarAutos(autos) {
        limpiarHTML();
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
                    <p class="estado">Condición: <span>${vehculo.estado}</span></p>
                </div>
            </div>
            `;
            resultado.appendChild(auto);
        });
    }

    function limpiarHTML(){
        while(resultado.firstChild){
            resultado.removeChild(resultado.firstChild);
        }
    }

    function filtrarAutos() {
        const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMin).filter(filtrarMax).filter(filtrarTra).filter(filtrarColor).filter(filtrarPuertas).filter(cond);
        mostrarAutos(resultado);
    }

    function filtrarMarca(auto) {
        if(datos.marca) {
            return auto.marca === datos.marca;
        }
        return auto;
    }

    function filtrarYear(auto) {
        if(datos.year) {
            return auto.year === parseInt(datos.year);
        }
        return auto;
    }

    function filtrarMin(auto) {
        if(datos.min) {
            return auto.precio >= datos.min;
        }
        return auto;
    }

    function filtrarMax(auto) {
        if(datos.max) {
            return auto.precio <= datos.max;
        }
        return auto;
    }

    function filtrarTra(auto) {
        if(datos.transmision) {
            return auto.transmision === datos.transmision;
        }
        return auto;
    }
    
    function filtrarColor(auto) {
        if(datos.color) {
            return auto.color === datos.color;
        }
        return auto;
    }

    function cond(auto) {
        if(datos.estado) {
            return auto.estado === datos.estado;
        }
        return auto;
    }

    function filtrarPuertas(auto) {
        if(datos.puertas) {
            return auto.puertas === parseInt(datos.puertas);
        }
        return auto;
    }



