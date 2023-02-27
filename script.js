var carta1 = {
    nome: "",
    imagem:
        "images/ComandanteAbissal.png",
    atributos: {
        Ataque: 7,
        Defesa: 9,
        Mana: 9
    }
};

var carta2 = {
    nome: "",
    imagem:
        "images/YsielCantavento.png",
    atributos: {
        Ataque: 5,
        Defesa: 5,
        Mana: 9
    }
};

var carta3 = {
    nome: "",
    imagem:
        "images/ReiMó.png",
    atributos: {
        Ataque: 8,
        Defesa: 8,
        Mana: 9
    }
};

var carta4 = {
    nome: "",
    imagem:
        "images/Grão-MagoAntonidas.png",
    atributos: {
        Ataque: 6,
        Defesa: 6,
        Mana: 8
    }
};

var carta5 = {
    nome: "",
    imagem:
        "images/Turalyon.png",
    atributos: {
        Ataque: 3,
        Defesa: 12,
        Mana: 8
    }
};

var carta6 = {
    nome: "",
    imagem:
        "images/SangueDeGhuun.png",
    atributos: {
        Ataque: 8,
        Defesa: 8,
        Mana: 9
    }
};

var carta7 = {
    nome: "",
    imagem:
        "images/ErranteAmalicoado.png",
    atributos: {
        Ataque: 7,
        Defesa: 5,
        Mana: 7
    }
};

var carta8 = {
    nome: "",
    imagem:
        "images/UrseonGlaspinhal.png",
    atributos: {
        Ataque: 6,
        Defesa: 6,
        Mana: 7
    }
};

var carta9 = {
    nome: "",
    imagem:
        "images/SenhoraDoMedo.png",
    atributos: {
        Ataque: 5,
        Defesa: 7,
        Mana: 8
    }
};

var carta10 = {
    nome: "",
    imagem:
        "images/Grommash.png",
    atributos: {
        Ataque: 4,
        Defesa: 9,
        Mana: 8
    }
};

var cartas = [
    carta1,
    carta2,
    carta3,
    carta4,
    carta5,
    carta6,
    carta7,
    carta8,
    carta9,
    carta10
];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 10); 
    cartaMaquina = cartas[numeroCartaMaquina];

var numeroCartaJogador = parseInt(Math.random() * 10);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 10);
}

cartaJogador = cartas[numeroCartaJogador];

document.getElementById("btnSortear").disabled = true;
document.getElementById("btnJogar").disabled = false;
exibirCartaJogador();
}

function obterAtributoSelecionado() {
var radioAtributos = document.getElementsByName("atributo");

for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
    return radioAtributos[i].value;
    }
}
}

function jogar() {
    var atributoSelecionado = obterAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
) {
    htmlResultado = "<p class='resultado-final'>Você Venceu!</p>";
} else if (
    cartaMaquina.atributos[atributoSelecionado] >
    cartaJogador.atributos[atributoSelecionado]
) {
    htmlResultado = "<p class='resultado-final'>Você Perdeu</p>";
} else {
    htmlResultado = "<p class='resultado-final'>Empate</p>";
}

elementoResultado.innerHTML = htmlResultado;
document.getElementById("btnJogar").disabled = true;
document.getElementById("btnSortear").disabled = false;

exibirCartaMaquina();
}

function exibirCartaJogador() {
var divCartaJogador = document.getElementById("carta-jogador");
divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

var moldura =
    '<https://lh3.googleusercontent.com/BypD0-Y6uruBSK-ntk4g15ucZDuFK_ecx1RMcD5kbDWD5P5Qb6_I00aV7j-RzRUt9LpLDvK8l_0TPaW_bNpEg-RwjEQg4ztH60Gjt5h_6GFXcrthMKDPpLAmgnbuRWQIe8d8g_WuVCihNCwNJJYiJq0-xpzkTEgNBGxvO1zPhbElaanMJutQLoM5BfJlNH9NbdYky7VCZqbmjKQLJEyX2kBk0ZQiumeFcqtssFBLkR0Hbq5OapMHW7SdgN0cgtREcQvoVJUkHTS3E6itOs1vUPU0FPkOCkwfIkrs2TbPOklaGjfGtO4ITqYi8at8carqXSbbcCX81BF0O26fUY7NJPkI2MGY6uCsxZD31ol3AkMadvkegRErnsA7lvwjfcJIgiUNv-vOtIdRe-O59TfigI8pqe3GeFsDQo8R2lNfzjR0dDxmqwsrVeOIS01G8wC9uCaMf8BsKyn7RxJ5ogl0Dd-KsdJlK2VP4Ogk1k0982JEsqKP_BtteIqdVIL3DZ0cWutCez8tIPG2nurcWLv6wdbS_MjujnVxA2KZe9ZvIu80bVB6kf8f0cMZj5ljyQLfkGBgbJ3w8KQhKy5IDd_RNjPJa_M_GmkNnuwCcxNCwHwyvmw4jbKHjOTzNw7yPBGQ67sMtXED-rplaZ5EHhTzQW5W0jP7TlYAtbdQ1wlTAg7_XASIz7NKA0PUCy8VcvVFJygAeXGFT3dnm_XyWANOX_U=w208-h288-no?authuser=0" style=" width: inherit; height: inherit; position: absolute;">';
var tagHTML = "<div id='opcoes' class='carta-status'>";

var opcoesTexto = "";
for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
    "<input type='radio' name='atributo' value=" +
    atributo +
    ">" +
    atributo +
    " " +
    "=" +
    " " +
    cartaJogador.atributos[atributo] +
    "<br>";
}

var nomeCarta = `<p class="carta-subtitle"> ${cartaJogador.nome}</p>`;

divCartaJogador.innerHTML = nomeCarta + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

var moldura =
    '<https://lh3.googleusercontent.com/BypD0-Y6uruBSK-ntk4g15ucZDuFK_ecx1RMcD5kbDWD5P5Qb6_I00aV7j-RzRUt9LpLDvK8l_0TPaW_bNpEg-RwjEQg4ztH60Gjt5h_6GFXcrthMKDPpLAmgnbuRWQIe8d8g_WuVCihNCwNJJYiJq0-xpzkTEgNBGxvO1zPhbElaanMJutQLoM5BfJlNH9NbdYky7VCZqbmjKQLJEyX2kBk0ZQiumeFcqtssFBLkR0Hbq5OapMHW7SdgN0cgtREcQvoVJUkHTS3E6itOs1vUPU0FPkOCkwfIkrs2TbPOklaGjfGtO4ITqYi8at8carqXSbbcCX81BF0O26fUY7NJPkI2MGY6uCsxZD31ol3AkMadvkegRErnsA7lvwjfcJIgiUNv-vOtIdRe-O59TfigI8pqe3GeFsDQo8R2lNfzjR0dDxmqwsrVeOIS01G8wC9uCaMf8BsKyn7RxJ5ogl0Dd-KsdJlK2VP4Ogk1k0982JEsqKP_BtteIqdVIL3DZ0cWutCez8tIPG2nurcWLv6wdbS_MjujnVxA2KZe9ZvIu80bVB6kf8f0cMZj5ljyQLfkGBgbJ3w8KQhKy5IDd_RNjPJa_M_GmkNnuwCcxNCwHwyvmw4jbKHjOTzNw7yPBGQ67sMtXED-rplaZ5EHhTzQW5W0jP7TlYAtbdQ1wlTAg7_XASIz7NKA0PUCy8VcvVFJygAeXGFT3dnm_XyWANOX_U=w208-h288-no?authuser=0" style=" width: inherit; height: inherit; position: absolute;">';
var tagHTML = "<div id='opcoes' class='carta-status'>";

var opcoesTexto = "";
for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
    "<input type='radio' name='atributo' value=" +
    atributo +
    ">" +
    atributo +
    " " +
    "=" +
    " " +
    cartaMaquina.atributos[atributo] +
    "<br>";
}

var nomeCarta = `<p class="carta-subtitle"> ${cartaMaquina.nome}</p>`;

divCartaMaquina.innerHTML = nomeCarta + tagHTML + opcoesTexto + "</div>";
}
