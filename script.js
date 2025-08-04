// Acessibilidade: toggle menu
const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

botaoAcessibilidade.addEventListener('click', () => {
  const expanded = botaoAcessibilidade.getAttribute('aria-expanded') === 'true';
  botaoAcessibilidade.setAttribute('aria-expanded', !expanded);
  if (opcoesAcessibilidade.hasAttribute('hidden')) {
    opcoesAcessibilidade.removeAttribute('hidden');
  } else {
    opcoesAcessibilidade.setAttribute('hidden', '');
  }
});

// Fonte
const aumentarFonte = document.getElementById('aumentar-fonte');
const diminuirFonte = document.getElementById('diminuir-fonte');
const body = document.body;
let fontSize = parseFloat(getComputedStyle(body).fontSize);

aumentarFonte.addEventListener('click', () => {
  if (fontSize < 22) {
    fontSize += 1;
    body.style.fontSize = fontSize + 'px';
  }
});

diminuirFonte.addEventListener('click', () => {
  if (fontSize > 12) {
    fontSize -= 1;
    body.style.fontSize = fontSize + 'px';
  }
});

// Contraste
const alternaContraste = document.getElementById('alterna-contraste');
alternaContraste.addEventListener('click', () => {
  body.classList.toggle('alto-contraste');
});
