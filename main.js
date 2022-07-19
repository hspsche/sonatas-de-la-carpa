const container = document.getElementById('container');
const firma = document.getElementById('firma');
const elementoAnimar = document.getElementById('mensaje');
firma.addEventListener("mouseover", animacionIn, true);
firma.addEventListener("mouseout", animacionOut, true);
estado = 0; 

const dataBase = [
    {
        nombre: 'martes',
        img: 'img1.jpg',
        audio: 'martes.wav'
    },
    {
        nombre: 'más de 140 caracteres',
        img: 'img2.svg',
        audio: 'masde140caracteres.m4a'
    },
    {
        nombre: 'los que ya fueron',
        img: 'img3.jpg',
        audio: 'losqueyafueron.m4a'
    }
];

agregarDatos();

function agregarDatos() {
    for (i=0; i<dataBase.length; i++) {

        const cardContainer = document.createElement('div');
        audio = document.createElement('audio');
        const portada = document.createElement('img');
        const titulo = document.createElement('h2');
        btnplayPause = document.createElement('div');

        aA(cardContainer, '', 'card-container');
        aA(audio, '', '', `audio${i + 1}`, '', `/audio/${dataBase[i].audio}`);
        aA(portada, '', 'portada', '', '', `/img/${dataBase[i].img}`);
        aA(titulo, dataBase[i].nombre, 'titulo')
        aA(btnplayPause, 'Play', 'playPause-container', `play${i + 1}`, `playPause(${i + 1})`);

        aAc(container, cardContainer);
        aAc(cardContainer, audio, portada, titulo, btnplayPause);
    }
};

function playPause(i) {
    if (estado == 0) {
        estado = 1;
        document.getElementById(`audio${i}`).play();
        document.getElementById(`play${i}`).textContent = 'Pausa';
    } else {
        estado = 0;
        document.getElementById(`audio${i}`).pause();
        document.getElementById(`play${i}`).textContent = 'Play';
    }
};


function aA(elemento, texto, clase, identificador, onclick, src) { //AGREGAR ATRIBUTOS
    elemento.textContent = texto;
    elemento.setAttribute('class', clase);
    elemento.setAttribute('id', identificador);
    elemento.setAttribute('onclick', onclick);
    elemento.setAttribute('src', `./src/assets/${src}`);
} 

function aAc(elementoPadre, ...elementoHijo) { //FUNCION appendChild global
    let elemento = '';
	for (let i = 0; i < elementoHijo.length; i++) {
		elemento = elementoHijo[i];
		elementoPadre.appendChild(elemento);
	}
}

function animacionIn() {
    elementoAnimar.classList.remove('mensaje');
    elementoAnimar.classList.add('mensaje-transition');
}

function animacionOut() {
    elementoAnimar.classList.remove('mensaje-transition');
    elementoAnimar.classList.add('mensaje');
}