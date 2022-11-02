const autos = [
	{
		img: "/img/bmwS3.jpg",
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2020,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		estado: 'Nuevo'
	},
	{
		img: "/img/crv2015.jpg",
		marca: 'Honda',
		modelo: 'CR-V',
		year: 2015,
		precio: 30000,
		puertas: 4,
		color: 'Roja',
		transmision: 'automatico',
		estado: 'Nuevo'
	},
	{
		img: "/img/crv2022b.jpeg",
		marca: 'Honda',
		modelo: 'CR-V',
		year: 2022,
		precio: 70000,
		puertas: 4,
		color: 'Blanca',
		transmision: 'automatico',
		estado: 'Nuevo'
	},
	{
		img: "/img/crv2018a.jpg",
		marca: 'Honda',
		modelo: 'CR-V',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico',
		estado: 'Nuevo'
	},
	
	{ 
		img: "/img/AudiA4.jpg",
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2020, 
        precio: 40000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico', 
		estado: 'Usado'
    },
	{
		img: "/img/Ford2015.jpg",
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico',
		estado: 'Usado'
	},
	{ 
		img: "/img/AudiA6.jpg",
        marca: 'Audi', 
        modelo: 'A6', 
        year: 2020, 
        precio: 35000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico', 
		estado: 'Nuevo'
    },
	{
		img: "/img/bmwS5.jpg",
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico',
		estado: 'Usado'
	},
	{
		img: "/img/mercedesC.jpg",
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		estado: 'Nuevo'
	},
	{
		img: "/img/chebro.jpg",
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual',
		estado: 'Nuevo'
	},
	{ 
		img: "/img/Ford2019.jpg",
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2019, 
        precio: 80000, 
        puertas: 2, 
        color: 'Rojo', 
        transmision: 'manual' 
		,estado: 'Usado'
    },
	{
		img: "/img/dodgeb.jpg",
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		estado: 'Nuevo'
	},
	{ 
		img: "/img/AudiA3.jpg",
        marca: 'Audi', 
        modelo: 'A3', 
        year: 2017, 
        precio: 55000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 'manual', 
		estado: 'Nuevo'
    },
	{
		img: "/img/dodger.jpg",
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual',
		estado: 'Usado'
	},
	{
		img: "/img/mercedesC2018.jpg",
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico',
		estado: 'Nuevo'
	},
	{
		img: "/img/bmwS5.jpg",
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		estado: 'Nuevo'
	},
	{ 
		img: "/img/ford2017.jpeg",
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2017, 
        precio: 60000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 'manual' 
		,estado: 'Usado'
    },
	{
		img: "/img/dodgea.jpg",
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico',
		estado: 'Usado'
	},
	{
		img: "/img/bmwS32018.jpg",
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		estado: 'Usado'
	},
	{
		img: "/img/bmwS52017.jpg",
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico',
		estado: 'Nuevo'
	},
	{
		img: "/img/mercedesC2018.jpg",
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		estado: 'Nuevo'
	},
	{ 
		img: "/img/AudiA4Azul.jpg",
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2016, 
        precio: 30000, 
        puertas: 4, 
        color: 'Azul', 
        transmision: 'automatico', 
		estado: 'Nuevo'
    }
];
