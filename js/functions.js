// Área Restrita

// Logado

let areaAberta;

let meuDados = document.getElementById("meus-dados");
let btnArea = document.getElementById("area");
let iconArea = document.getElementById("icon-area");

function areaRestritaFechada() {
  meuDados.classList.toggle("alterado");
  btnArea.classList.toggle("alterado");
  iconArea.classList.toggle("alterado");

  if (meuDados.classList.contains("alterado")) {
    areaAberta = 1;
  } else {
    areaAberta = 0;
  }
}

window.addEventListener("click", function (evento) {
  let elemento = evento.target;

  if (!meuDados.contains(elemento) && !btnArea.contains(elemento)) {
    if (meuDados.classList.contains("alterado")) {
      meuDados.classList.toggle("alterado");
      btnArea.classList.toggle("alterado");
      iconArea.classList.toggle("alterado");
      areaAberta = 0;
    }
  }
});

// Deslogado

let areaAlterada = document.getElementById("modal-area");
let topAlterado = document.getElementById("top");
let areaContAlterada = document.getElementById("modal-conteudo");
let btnAreaMobile = document.getElementById("area-mobile");

function areaRestritaAberta() {
  areaAlterada.classList.toggle("alterado");
  topAlterado.classList.toggle("alterado");
  areaContAlterada.classList.toggle("alterado");
}

window.addEventListener("click", function (evento) {
  let elemento = evento.target;

  if (
    !areaContAlterada.contains(elemento) &&
    !btnArea.contains(elemento) &&
    !btnAreaMobile.contains(elemento)
  ) {
    if (areaContAlterada.classList.contains("alterado")) {
      areaAlterada.classList.toggle("alterado");
      topAlterado.classList.toggle("alterado");
      areaContAlterada.classList.toggle("alterado");
    }
  }
});

function modalRecurar() {
  let recurar = document.getElementById("modal-recuperar");
  let login = document.getElementById("modal-campos");

  recurar.classList.toggle("alterado");
  login.classList.toggle("alterado");
}

function modalPrimeiro() {
  let primeiro = document.getElementById("modal-primeiro");
  let login = document.getElementById("modal-campos");

  primeiro.classList.toggle("alterado");
  login.classList.toggle("alterado");
}

function mostrarMensagem(mensagem) {
  const mensagens = document.getElementById(mensagem);

  mensagens.style.opacity = 1;

  setTimeout(function () {
    mensagens.style.opacity = 0;
  }, 2000);
}

// Menu Hidden

var prevScrollpos = window.pageYOffset;
var hideHeight = 120;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top").style.top = "0";
  } else {
    if (currentScrollPos > hideHeight && areaAberta !== 1) {
      document.getElementById("top").style.top = "-1200px";
    }
  }

  prevScrollpos = currentScrollPos;
};

// Menu Mobile

let menuMobile = document.getElementById("menu-mobile");
let iconeMobile = document.querySelector("#mobile i");
let header = document.getElementById("top");
let modal = document.getElementById("modal-area");

function mobile() {
  menuMobile.classList.toggle("alterado");
}

window.addEventListener("click", function (evento) {
  let elemento = evento.target;

  if (
    !menuMobile.contains(elemento) &&
    !header.contains(elemento) &&
    !modal.contains(elemento)
  ) {
    if (menuMobile.classList.contains("alterado")) {
      menuMobile.classList.toggle("alterado");
    }
  }

  if (menuMobile.classList.contains("alterado")) {
    iconeMobile.classList.remove("fa-bars");
    iconeMobile.classList.add("fa-xmark");
  } else {
    iconeMobile.classList.remove("fa-xmark");
    iconeMobile.classList.add("fa-bars");
  }
});

// Menu lateral Dropdown

function dropdownMenuLateral(dropdownCont, dropdownArrow) {
  let alterarConteudo = document.getElementById(dropdownCont);
  let alterarArrow = document.getElementById(dropdownArrow);

  let conteudoAberto = document.querySelectorAll(".droped-cont");
  conteudoAberto.forEach(function (conteudo) {
    if (conteudo.id !== dropdownCont) {
      let conteudoObtido = document.getElementById(conteudo.id);
      conteudoObtido.classList.remove("droped-cont");
    }
  });

  let arrowAberta = document.querySelectorAll(".droped-arrow");
  arrowAberta.forEach(function (arrow) {
    if (arrow.id !== dropdownArrow) {
      let arrowObtida = document.getElementById(arrow.id);
      arrowObtida.classList.remove("droped-arrow");
    }
  });

  alterarConteudo.classList.toggle("droped-cont");
  alterarArrow.classList.toggle("droped-arrow");
}

// Dropdown ferramenta

function dropdown(dropdownCont, dropdownArrow) {
  let alterarConteudo = document.getElementById(dropdownCont);
  let alterarArrow = document.getElementById(dropdownArrow);

  let conteudoAberto = document.querySelectorAll(".droped-conteudo");
  conteudoAberto.forEach(function (conteudo) {
    if (conteudo.id !== dropdownCont) {
      let conteudoObtido = document.getElementById(conteudo.id);
      conteudoObtido.classList.remove("droped-conteudo");
    }
  });

  let arrowAberta = document.querySelectorAll(".droped-seta");
  arrowAberta.forEach(function (arrow) {
    if (arrow.id !== dropdownArrow) {
      let arrowObtida = document.getElementById(arrow.id);
      arrowObtida.classList.remove("droped-seta");
    }
  });

  alterarConteudo.classList.toggle("droped-conteudo");
  alterarArrow.classList.toggle("droped-seta");
}

// Rádio

let alterarRadio = document.getElementById("radio");
let alterarLogo = document.getElementById("radio-logo");
let alterarIconeRadio = document.getElementById("icone-radio");
let btnRadio = document.getElementById("btn-radio");

window.addEventListener("click", function (evento) {
  let elemento = evento.target;

  if (!alterarRadio.contains(elemento) && !btnRadio.contains(elemento)) {
    if (!alterarRadio.classList.contains("alterado")) {
      alterarRadio.classList.toggle("alterado");
      alterarLogo.classList.toggle("alterado");
      alterarIconeRadio.classList.toggle("alterado");
      btnRadio.classList.toggle("alterado");
    }
  }
});

function ocultarRadio() {
  alterarRadio.classList.toggle("alterado");
  alterarLogo.classList.toggle("alterado");
  alterarIconeRadio.classList.toggle("alterado");
  btnRadio.classList.toggle("alterado");
}

// BTN Home

window.addEventListener("scroll", function () {
  if (window.scrollY !== 0) {
    document.getElementById("home").style.marginBottom = "0px";
  } else {
    document.getElementById("home").style.marginBottom = "-70px";
  }
});

// Ex GM e GMA

function gmGma() {
  const btnGm = document.getElementById("btn-gm");
  const btnGma = document.getElementById("btn-gma");
  const gm = document.getElementById("gm");
  const gma = document.getElementById("gma");

  btnGm.classList.toggle("alterado");
  btnGma.classList.toggle("alterado");
  gm.classList.toggle("alterado");
  gma.classList.toggle("alterado");
}

function copySede1() {
  var text = "Rua Jerônimo Coelho, 116 - Centro";
  var copyArea = document.createElement("textarea");
  copyArea.value = text;
  document.body.appendChild(copyArea);
  copyArea.select();
  document.execCommand("copy");
  document.body.removeChild(copyArea);

  var elemento = document.getElementById("msg-copiado1");
  elemento.classList.add("alterado");

  setTimeout(function () {
    elemento.classList.remove("alterado");
  }, 2000);
}

function copySede2() {
  var text = "Rua Quatro Jacós, 75 - Menino Deus";
  var copyArea = document.createElement("textarea");
  copyArea.value = text;
  document.body.appendChild(copyArea);
  copyArea.select();
  document.execCommand("copy");
  document.body.removeChild(copyArea);

  var elemento = document.getElementById("msg-copiado2");
  elemento.classList.add("alterado");

  setTimeout(function () {
    elemento.classList.remove("alterado");
  }, 2000);
}

// Carrossel notícias

function habilitarBotao() {
  btnNext.disabled = false;
  btnPrev.disabled = false;
  btnBanner1Left.disabled = false;
  btnBanner1Right.disabled = false;
  btnBanner2Left.disabled = false;
  btnBanner2Right.disabled = false;
}

const btnNext = document.getElementById("btn-noticia-next");
const btnPrev = document.getElementById("btn-noticia-prev");

if (btnNext != null && btnPrev != null) {
  const card = document.getElementById("card");
  const card1 = document.getElementById("card-noticia");

  const scrollMaximo = card.scrollWidth - card.clientWidth;
  const limiteDiferenca = 0.01 * scrollMaximo;

  let delay;

  btnNext.addEventListener("click", function () {

    if (card.scrollLeft >= scrollMaximo - limiteDiferenca) {
      card.scrollLeft = 0;
      delay = 750;
    } else {
      card.scrollLeft += card.clientWidth;
      delay = 600;
    }

    btnNext.disabled = true;
    btnPrev.disabled = true;

    setTimeout(habilitarBotao, delay);
  });

  btnPrev.addEventListener("click", function () {
    if (card.scrollLeft <= 0) {
      card.scrollLeft = scrollMaximo;
      delay = 750;
    } else {
      card.scrollLeft -= card.clientWidth;
      delay = 600;
    }

    btnPrev.disabled = true;
    btnNext.disabled = true;

    setTimeout(habilitarBotao, delay);
  });
}

// Formulário notícia

function btnNoticia() {
  const btnNoticia = document.getElementById("btn-noticia");
  const areaNoticia = document.getElementById("enviar-noticia");
  const suaNoticia = document.getElementById("sua-noticia");

  btnNoticia.classList.toggle("alterado");
  areaNoticia.classList.toggle("alterado");
  suaNoticia.classList.toggle("alterado");

  if (btnNoticia.classList.contains("alterado")) {
    btnNoticia.textContent = "Fechar Formulário";
  } else {
    btnNoticia.textContent = "PUBLIQUE SUA NOTÍCIA";
  }
}

var fileInput = document.getElementById("file-input");

if (fileInput != null) {
  fileInput.addEventListener("change", function () {
    var selectedFiles = fileInput.files;

    if (selectedFiles.length > 5) {
      alert("Por favor, selecione no máximo 5 imagens.");

      fileInput.value = "";
    }
  });
}

// Formulario Contatos

let contatoInput = document.getElementById("celular");

if (contatoInput) {
  $(document).ready(function () {
    VMasker(contatoInput).maskPattern("(99) 99999-9999");
  });
}

// Carrossel banners

// Carrossel 1

const btnBanner1Left = document.getElementById("btn-banner1-left");
const btnBanner1Right = document.getElementById("btn-banner1-right");

document.addEventListener("DOMContentLoaded", function () {
  if (btnBanner1Right != null && btnBanner1Left != null) {
    const banner1 = document.getElementById("banner1");

    const scrollMaximo = banner1.scrollWidth - banner1.clientWidth;
    const limiteDiferenca = 0.01 * scrollMaximo;

    let delay;

    btnBanner1Right.addEventListener("click", function () {
      if (banner1.scrollLeft >= scrollMaximo - limiteDiferenca) {
        banner1.scrollLeft = 0;
        delay = 800;
      } else {
        banner1.scrollLeft += banner1.clientWidth;
        delay = 450;
      }

      btnBanner1Right.disabled = true;
      btnBanner1Left.disabled = true;

      setTimeout(habilitarBotao, delay);
    });

    btnBanner1Left.addEventListener("click", function () {
      if (banner1.scrollLeft <= 0) {
        banner1.scrollLeft = scrollMaximo;
        delay = 800;
      } else {
        banner1.scrollLeft -= banner1.clientWidth;
        delay = 450;
      }

      btnBanner1Left.disabled = true;
      btnBanner1Right.disabled = true;

      setTimeout(habilitarBotao, delay);
    });
  }
});

// Carrossel 2

const btnBanner2Left = document.getElementById("btn-banner2-left");
const btnBanner2Right = document.getElementById("btn-banner2-right");

document.addEventListener("DOMContentLoaded", function () {
  if (btnBanner2Right != null && btnBanner2Left != null) {
    const banner2 = document.getElementById("banner2");

    const scrollMaximo = banner2.scrollWidth - banner2.clientWidth;
    const limiteDiferenca = 0.01 * scrollMaximo;

    let delay;

    btnBanner2Right.addEventListener("click", function () {
      if (banner2.scrollLeft >= scrollMaximo - limiteDiferenca) {
        banner2.scrollLeft = 0;
        delay = 800;
      } else {
        banner2.scrollLeft += banner2.clientWidth;
        delay = 450;
      }

      btnBanner2Right.disabled = true;
      btnBanner2Left.disabled = true;

      setTimeout(habilitarBotao, delay);
    });

    btnBanner2Left.addEventListener("click", function () {
      if (banner2.scrollLeft <= 0) {
        banner2.scrollLeft = scrollMaximo;
        delay = 800;
      } else {
        banner2.scrollLeft -= banner2.clientWidth;
        delay = 450;
      }

      btnBanner2Left.disabled = true;
      btnBanner2Right.disabled = true;

      setTimeout(habilitarBotao, delay);
    });
  }
});
