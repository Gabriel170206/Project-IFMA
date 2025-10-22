// Sidebar esquerda
const leftSidebar = document.getElementById('leftSidebar');
const toggleInternal = document.getElementById('toggleSidebarInternal');
const toggleExternal = document.getElementById('toggleSidebarExternal');

toggleInternal.addEventListener('click', () => {
  leftSidebar.classList.add('hidden');
  toggleExternal.style.display = 'block';
});

toggleExternal.addEventListener('click', () => {
  leftSidebar.classList.remove('hidden');
  toggleExternal.style.display = 'none';
});

// Sidebar direita
const rightSidebar = document.getElementById('rightSidebar');
const toggleRightInternal = document.getElementById('toggleSidebarRightInternal');
const toggleRightExternal = document.getElementById('toggleSidebarRightExternal');

toggleRightInternal.addEventListener('click', () => {
  rightSidebar.classList.add('hidden');
  toggleRightExternal.style.display = 'block';
});

toggleRightExternal.addEventListener('click', () => {
  rightSidebar.classList.remove('hidden');
  toggleRightExternal.style.display = 'none';
});

// Texto expandível
document.querySelectorAll('.toggle-text').forEach(button => {
  button.addEventListener('click', () => {
    const article = button.closest('.texto-expandivel');
    article.classList.toggle('expanded');
    const preview = article.querySelector('.preview');
    const fullText = article.querySelector('.full-text');
    if (article.classList.contains('expanded')) {
      preview.style.display = 'none';
      fullText.style.display = 'block';
      button.textContent = 'Leia menos';
    } else {
      preview.style.display = 'block';
      fullText.style.display = 'none';
      button.textContent = 'Leia mais';
    }
  });
});

// Cronômetro
let tempo = 0;
let cronometroAtivo = false;
let ultimaAtualizacao = null;
let primeiroTextoIniciado = false;

const cronometro = document.getElementById('cronometro');
const btnToggle = document.getElementById('btnToggle');
const btnReset = document.getElementById('btnReset');
const playIcon = document.getElementById('playIcon');

function atualizarCronometro() {
  const agora = performance.now();
  if (cronometroAtivo && ultimaAtualizacao !== null) {
    tempo += agora - ultimaAtualizacao;
  }
  ultimaAtualizacao = agora;
  cronometro.textContent = `${(tempo / 1000).toFixed(3)}s`;
  requestAnimationFrame(atualizarCronometro);
}

// Função para iniciar o cronômetro
function iniciarCronometro() {
  if (!cronometroAtivo) {
    cronometroAtivo = true;
    ultimaAtualizacao = performance.now();
    btnToggle.classList.remove('btn-success');
    btnToggle.classList.add('btn-toggle');
    playIcon.innerHTML = '❚❚';
  }
}

// Função para pausar o cronômetro
function pausarCronometro() {
  if (cronometroAtivo) {
    cronometroAtivo = false;
    btnToggle.classList.remove('btn-toggle');
    btnToggle.classList.add('btn-success');
    playIcon.innerHTML = '▶';
  }
}

// Função para resetar o cronômetro
function resetarCronometro() {
  tempo = 0;
  cronometroAtivo = false;
  ultimaAtualizacao = null;
  cronometro.textContent = '0.000s';
  btnToggle.classList.remove('btn-toggle');
  btnToggle.classList.add('btn-success');
  playIcon.innerHTML = '▶';
  primeiroTextoIniciado = false;
}

btnToggle.addEventListener('click', () => {
  if (cronometroAtivo) {
    pausarCronometro();
  } else {
    iniciarCronometro();
  }
});

btnReset.addEventListener('click', () => {
  resetarCronometro();
});

requestAnimationFrame(atualizarCronometro);

// Textos de leitura
const textosLeitura = [
  {
    titulo: "Feijoada à minha moda",
    conteudo: `"Amiga Helena Sangirardi<br>
      Conforme um dia prometi<br>
      Onde, confesso que esqueci<br>
      E embora — perdoe — tão tarde<br>
      (Melhor do que nunca!) este poeta<br>
      Segundo manda a boa ética<br>
      Envia-lhe a receita (poética)<br>
      De sua feijoada completa.<br>
      Em atenção ao adiantado<br>
      Da hora em que abrimos o olho<br>
      O feijão deve, já catado<br>
      Nos esperar, feliz, de molho.<br>
      Uma vez cozido o feijão<br>
      (Umas quatro horas, fogo médio)<br>
      Nós, bocejando o nosso tédio<br>
      Nos chegaremos ao fogão<br>
      [...]<br>
      De carne-seca suculenta<br>
      Gordos paios, nédio toucinho<br>
      (Nunca orelhas de bacorinho<br>
      Que a tornam em excesso opulenta!)<br>
      [...]<br>
      Enquanto ao lado, em fogo brando<br>
      Desmilinguindo-se de gozo<br>
      Deve também se estar fritando<br>
      O torresminho delicioso<br>
      Em cuja gordura, de resto<br>
      (Melhor gordura nunca houve!)<br>
      Deve depois frigir a couve<br>
      Picada, em fogo alegre e presto.<br>
      [...]<br>
      Dever cumprido. Nunca é vã<br>
      A palavra de um poeta... — jamais!<br>
      Abraça-a, em Brillat-Savarin,<br>
      O seu Vinicius de Moraes."`,
    referencia: `Autor desconhecido. Texto fictício para fins didáticos.`
  },
  {
    titulo: "A Cidade",
    conteudo: `A cidade acorda em silêncio<br>Enquanto o sol pinta os telhados<br>Com promessas de um novo dia<br>Que ainda não sabe o que será. </br>`,
    referencia: `Inspirado em crônicas urbanas contemporâneas.`
  },
  {
    titulo: "Saudade",
    conteudo: `Na esquina da saudade<br>O vento sopra lembranças<br>De um tempo que não volta<br>Mas insiste em permanecer.`,
    referencia: `Fragmento poético baseado em temas de memória e tempo.`
  },
  {
    titulo: "O Livro Esquecido",
    conteudo: `Nas prateleiras empoeiradas<br>Um livro espera por mãos<br>Que desvendem seus segredos<br>E libertem suas palavras.`,
    referencia: `Texto sobre o poder da leitura.`
  },
  {
    titulo: "Noite Estrelada",
    conteudo: `A lua ilumina a escuridão<br>Enquanto estrelas contam histórias<br>No silêncio da madrugada<br>O universo sussurra mistérios.`,
    referencia: `Poema noturno inspirado na natureza.`
  },
  {
    titulo: "Rio da Memória",
    conteudo: `As águas correm constantes<br>Carregando lembranças ao mar<br>Cada onda um momento vivido<br>Que nunca mais voltará.`,
    referencia: `Reflexão sobre o tempo e a memória.`
  },
  {
    titulo: "Primeiro Amor",
    conteudo: `No jardim dos sentimentos<br>Desabrochou a primeira flor<br>Com pétalas de esperança<br>E espinhos de dor.`,
    referencia: `Poema sobre experiências amorosas.`
  }
];

// Sistema de histórico de textos
let historicoTextos = [];
let indiceAtual = -1;

// Elementos da página
const btnProximo = document.querySelector('.btn-proximo');
const btnVoltar = document.querySelector('.btn-voltar');
const preview = document.querySelector('.preview');
const fullText = document.querySelector('.full-text');
const toggleTextBtn = document.querySelector('.toggle-text');
const tituloQuestao = document.querySelector('article h2');
const referenciaAtual = document.getElementById('referenciaAtual');
const referenciaAtualFull = document.getElementById('referenciaAtualFull');

// Sistema de Marcador de Texto
const btnMarcador = document.getElementById('btnMarcador');
let marcadorAtivo = false;
let modoDesmarcar = false;

// Texto de aviso inicial
const textoAvisoInicial = {
  titulo: "Bem-vindo ao Facilita",
  conteudo: `Leia o texto de forma legítima, além disso,<br>
    poderá usar recursos que auxiliam seu aprendizado.<br><br>
    <i>Boa leitura!</i>`,
  referencia: "Clique em 'Começar a ler' para iniciar"
};

// Função para mudar o texto do botão
function atualizarTextoBotao() {
  if (indiceAtual === -1) {
    // Estado inicial - mostrar "Começar a ler"
    btnProximo.textContent = 'Começar a ler →';
    btnProximo.classList.add('btn-comecar');
    btnProximo.classList.remove('btn-proximo-estilo');
  } else {
    // Depois do primeiro texto - mostrar "Próximo texto"
    btnProximo.textContent = 'Próximo texto →';
    btnProximo.classList.remove('btn-comecar');
    btnProximo.classList.add('btn-proximo-estilo');
  }
}

// Função para verificar se o texto selecionado já está marcado
function textoJaEstaMarcado(range) {
  const textoSelecionado = range.toString().trim();
  if (!textoSelecionado) return false;
  
  // Verificar se a seleção está dentro de um span com classe texto-marcado
  let node = range.startContainer;
  while (node && node.nodeType !== Node.ELEMENT_NODE) {
    node = node.parentNode;
  }
  
  if (node && node.classList && node.classList.contains('texto-marcado')) {
    return true;
  }
  
  // Verificar se algum elemento marcado está dentro da seleção
  const elementosMarcados = document.querySelectorAll('.texto-marcado');
  for (const elemento of elementosMarcados) {
    const rangeElemento = document.createRange();
    rangeElemento.selectNodeContents(elemento);
    
    // Verificar se há sobreposição entre os ranges
    if (range.compareBoundaryPoints(Range.END_TO_START, rangeElemento) < 1 && 
        range.compareBoundaryPoints(Range.START_TO_END, rangeElemento) > -1) {
      return true;
    }
  }
  
  return false;
}

// Função para desmarcar texto selecionado
function desmarcarTextoSelecionado(range) {
  const textoSelecionado = range.toString().trim();
  if (!textoSelecionado) return;
  
  // Encontrar todos os elementos marcados dentro da seleção
  const elementosMarcados = document.querySelectorAll('.texto-marcado');
  
  elementosMarcados.forEach(elemento => {
    const rangeElemento = document.createRange();
    rangeElemento.selectNodeContents(elemento);
    
    // Verificar se o elemento marcado está dentro da seleção
    if (range.compareBoundaryPoints(Range.END_TO_START, rangeElemento) < 1 && 
        range.compareBoundaryPoints(Range.START_TO_END, rangeElemento) > -1) {
      
      // Substituir o span marcado pelo texto normal
      const texto = elemento.textContent;
      const textNode = document.createTextNode(texto);
      elemento.parentNode.replaceChild(textNode, elemento);
    }
  });
}

// Função para marcar texto sem quebrar a estrutura
function marcarTextoSelecionado(range) {
  const textoSelecionado = range.toString();
  
  // Se a seleção está dentro de um único nó de texto
  if (range.startContainer === range.endContainer && range.startContainer.nodeType === Node.TEXT_NODE) {
    const textoCompleto = range.startContainer.textContent;
    const antes = textoCompleto.substring(0, range.startOffset);
    const selecionado = textoCompleto.substring(range.startOffset, range.endOffset);
    const depois = textoCompleto.substring(range.endOffset);
    
    // Criar novo conteúdo com a parte selecionada marcada
    const novoConteudo = document.createDocumentFragment();
    
    if (antes) {
      novoConteudo.appendChild(document.createTextNode(antes));
    }
    
    const spanMarcado = document.createElement('span');
    spanMarcado.className = 'texto-marcado';
    spanMarcado.textContent = selecionado;
    novoConteudo.appendChild(spanMarcado);
    
    if (depois) {
      novoConteudo.appendChild(document.createTextNode(depois));
    }
    
    // Substituir o conteúdo original
    range.startContainer.parentNode.replaceChild(novoConteudo, range.startContainer);
    
  } else {
    // Para seleções mais complexas que cruzam múltiplos nós
    try {
      const spanMarcado = document.createElement('span');
      spanMarcado.className = 'texto-marcado';
      range.surroundContents(spanMarcado);
    } catch (e) {
      // Fallback: extrair conteúdo e inserir com marcação
      const conteudo = range.extractContents();
      const spanMarcado = document.createElement('span');
      spanMarcado.className = 'texto-marcado';
      spanMarcado.appendChild(conteudo);
      range.insertNode(spanMarcado);
    }
  }
}

// Função para lidar com seleção de texto
function lidarComSelecaoTexto() {
  if (!marcadorAtivo) return;
  
  const selecao = window.getSelection();
  const textoSelecionado = selecao.toString().trim();
  
  if (textoSelecionado.length > 0) {
    const range = selecao.getRangeAt(0);
    
    // Verificar se a seleção está dentro do texto do artigo
    const textoContainer = document.querySelector('.texto');
    if (!textoContainer.contains(range.commonAncestorContainer)) {
      return; // Não marcar texto fora do artigo
    }
    
    if (modoDesmarcar && textoJaEstaMarcado(range)) {
      // Modo desmarcar: remover a marcação
      desmarcarTextoSelecionado(range);
    } else if (!modoDesmarcar && !textoJaEstaMarcado(range)) {
      // Modo marcar: aplicar marcação
      marcarTextoSelecionado(range);
    }
    
    // Limpar seleção
    selecao.removeAllRanges();
    
    // Salvar marcações no histórico
    salvarMarcacoes();
    
    // Feedback visual
    const corFeedback = modoDesmarcar ? 
      'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' : 
      'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    
    btnMarcador.style.background = corFeedback;
    setTimeout(() => {
      if (marcadorAtivo) {
        const corAtiva = modoDesmarcar ?
          'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)' :
          'linear-gradient(135deg, #b45309 0%, #92400e 100%)';
        btnMarcador.style.background = corAtiva;
      }
    }, 300);
  }
}

// Função para salvar marcações no histórico
function salvarMarcacoes() {
  if (historicoTextos[indiceAtual]) {
    const textoElement = document.querySelector('.texto');
    historicoTextos[indiceAtual].htmlComMarcacoes = textoElement.innerHTML;
  }
}

// Função para restaurar marcações do histórico
function restaurarMarcacoes() {
  if (historicoTextos[indiceAtual] && historicoTextos[indiceAtual].htmlComMarcacoes) {
    const textoElement = document.querySelector('.texto');
    textoElement.innerHTML = historicoTextos[indiceAtual].htmlComMarcacoes;
  }
}

// Função para carregar um texto na tela
function carregarTexto(texto) {
  tituloQuestao.innerHTML = texto.titulo;
  referenciaAtual.innerHTML = texto.referencia;
  referenciaAtualFull.innerHTML = texto.referencia;

  // Verificar se há marcações salvas
  if (texto.htmlComMarcacoes) {
    // Usar HTML com marcações salvas
    const textoElement = document.querySelector('.texto');
    textoElement.innerHTML = texto.htmlComMarcacoes;
  } else {
    // Carregar texto normal
    const linhas = texto.conteudo.split('<br>');
    const previewLinhas = linhas.slice(0, 3);
    preview.innerHTML = previewLinhas.join('<br>') + '<br>...<div class="referencia-texto"><small>' + texto.referencia + '</small></div>';
    fullText.innerHTML = texto.conteudo + '<div class="referencia-texto"><small>' + texto.referencia + '</small></div>';
  }

  // Resetar estado do texto expandível
  const article = toggleTextBtn.closest('.texto-expandivel');
  article.classList.remove('expanded');
  preview.style.display = 'block';
  fullText.style.display = 'none';
  toggleTextBtn.textContent = 'Leia mais';
}

// Função para carregar texto de aviso inicial
function carregarAvisoInicial() {
  tituloQuestao.innerHTML = textoAvisoInicial.titulo;
  referenciaAtual.innerHTML = textoAvisoInicial.referencia;
  referenciaAtualFull.innerHTML = textoAvisoInicial.referencia;

  // Carregar texto de aviso
  const linhas = textoAvisoInicial.conteudo.split('<br>');
  const previewLinhas = linhas.slice(0, 3);
  preview.innerHTML = previewLinhas.join('<br>') + '<br>...<div class="referencia-texto"><small>' + textoAvisoInicial.referencia + '</small></div>';
  fullText.innerHTML = textoAvisoInicial.conteudo + '<div class="referencia-texto"><small>' + textoAvisoInicial.referencia + '</small></div>';

  // Resetar estado do texto expandível
  const article = toggleTextBtn.closest('.texto-expandivel');
  article.classList.remove('expanded');
  preview.style.display = 'block';
  fullText.style.display = 'none';
  toggleTextBtn.textContent = 'Leia mais';

  // Desabilitar botão voltar no início
  btnVoltar.disabled = true;
}

// Função para atualizar estado dos botões de navegação
function atualizarBotoesNavegacao() {
  // Desabilita voltar se não há textos anteriores
  btnVoltar.disabled = indiceAtual <= 0;
}

// Botão Próximo texto - adiciona novo texto ao histórico
btnProximo.addEventListener('click', () => {
  // Se estiver no aviso inicial, limpar e começar o histórico
  if (indiceAtual === -1) {
    historicoTextos = [];
    // Iniciar cronômetro automaticamente no primeiro texto
    if (!primeiroTextoIniciado) {
      iniciarCronometro();
      primeiroTextoIniciado = true;
    }
  } else {
    // Salvar marcações atuais antes de mudar de texto
    salvarMarcacoes();
  }
  
  const textoAleatorio = textosLeitura[Math.floor(Math.random() * textosLeitura.length)];
  
  // Adicionar ao histórico (remove textos "futuros" se existirem)
  historicoTextos = historicoTextos.slice(0, indiceAtual + 1);
  historicoTextos.push(textoAleatorio);
  indiceAtual = historicoTextos.length - 1;
  
  carregarTexto(textoAleatorio);
  atualizarBotoesNavegacao();
  atualizarTextoBotao(); // Atualizar texto do botão
});

// Botão Voltar texto - navega para texto anterior no histórico
btnVoltar.addEventListener('click', () => {
  if (indiceAtual > 0) {
    // Salvar marcações do texto atual
    salvarMarcacoes();
    
    indiceAtual--;
    const textoAnterior = historicoTextos[indiceAtual];
    carregarTexto(textoAnterior);
    atualizarBotoesNavegacao();
    atualizarTextoBotao(); // Atualizar texto do botão
  } else if (indiceAtual === 0) {
    // Se voltar para o primeiro texto, ainda mostrar o texto normal
    const textoAnterior = historicoTextos[indiceAtual];
    carregarTexto(textoAnterior);
    atualizarBotoesNavegacao();
    atualizarTextoBotao(); // Atualizar texto do botão
  }
});

// Ativar/desativar marcador
btnMarcador.addEventListener('click', () => {
  marcadorAtivo = !marcadorAtivo;
  
  if (marcadorAtivo) {
    // Alternar entre modo marcar e desmarcar
    modoDesmarcar = !modoDesmarcar;
    
    if (modoDesmarcar) {
      btnMarcador.classList.add('ativo');
      btnMarcador.innerHTML = '<span class="icon-marcador">✏️</span><span class="label">Desmarcar Texto</span>';
      document.body.style.cursor = 'pointer';
    } else {
      btnMarcador.classList.add('ativo');
      btnMarcador.innerHTML = '<span class="icon-marcador">🔖</span><span class="label">Marcar Texto</span>';
      document.body.style.cursor = 'text';
    }
    
    // Adicionar evento de seleção de texto
    document.addEventListener('mouseup', lidarComSelecaoTexto);
    
    // Mensagem de instrução
    const mensagem = modoDesmarcar ? 
      'Modo desmarcar ativado! Selecione texto marcado para remover a marcação.' :
      'Modo marcar ativado! Selecione qualquer texto para marcá-lo em amarelo.';
    console.log(mensagem);
    
  } else {
    btnMarcador.classList.remove('ativo');
    btnMarcador.innerHTML = '<span class="icon-marcador">🔖</span><span class="label">Marcador</span>';
    document.body.style.cursor = 'default';
    modoDesmarcar = false;
    
    // Remover evento de seleção de texto
    document.removeEventListener('mouseup', lidarComSelecaoTexto);
  }
});

// Prevenir marcação acidental ao clicar no botão
btnMarcador.addEventListener('mousedown', (e) => {
  e.preventDefault();
});

// Salvar marcações quando o texto for expandido/recolhido
toggleTextBtn.addEventListener('click', () => {
  setTimeout(salvarMarcacoes, 100);
});

// Inicializar a página com o texto de aviso
window.addEventListener('DOMContentLoaded', () => {
  // Carregar o texto de aviso inicial
  carregarAvisoInicial();
  // Resetar cronômetro no início
  resetarCronometro();
  // Atualizar texto do botão para "Começar a ler"
  atualizarTextoBotao();
});