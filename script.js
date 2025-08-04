// script.js

document.addEventListener('DOMContentLoaded', () => {
  const btnAumentar = document.getElementById('aumentar-fonte');
  const btnDiminuir = document.getElementById('diminuir-fonte');
  const btnContraste = document.getElementById('alterna-contraste');
  const btnMenu = document.getElementById('botao-acessibilidade');
  const opcoes = document.getElementById('opcoes-acessibilidade');
  const body = document.body;

  // Controle do menu acessibilidade (abrir/fechar)
  btnMenu.addEventListener('click', () => {
    const expanded = btnMenu.getAttribute('aria-expanded') === 'true';
    btnMenu.setAttribute('aria-expanded', String(!expanded));
    opcoes.classList.toggle('apresenta-lista');
    opcoes.setAttribute('aria-hidden', String(expanded));
  });

  // Tamanho da fonte base
  let fontSize = 16; // padrão 16px

  btnAumentar.addEventListener('click', () => {
    if (fontSize < 24) {
      fontSize += 2;
      document.documentElement.style.fontSize = fontSize + 'px';
    }
  });

  btnDiminuir.addEventListener('click', () => {
    if (fontSize > 12) {
      fontSize -= 2;
      document.documentElement.style.fontSize = fontSize + 'px';
    }
  });

  btnContraste.addEventListener('click', () => {
    body.classList.toggle('alto-contraste');
  });
});
