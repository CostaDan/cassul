// =================================================================
// PWA INSTALLER ENGINE - CONTROLE DAS GUIAS
// Realiza transição entre sistemas sem reload visual
// =================================================================

function openTab(tabId, btnElement) {
  // 1. Remover classes 'active' de todos os botões e conteúdos
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  contents.forEach(content => {
      content.classList.remove('active');
  });

  buttons.forEach(btn => {
      btn.classList.remove('active');
  });

  // 2. Adicionar 'active' na nova combinação escolhida
  document.getElementById(`tab-${tabId}`).classList.add('active');
  btnElement.classList.add('active');
}

// Inicializar pre-seleção dinâmica caso esteja acessível via User-Agent futuramente
document.addEventListener('DOMContentLoaded', () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
  // Se for detectado um iPhone puro pelo navegador nativo, ele abre a aba do iOS no carregamento da tela
  if (isIOS) {
      const iosBtn = document.querySelector("button[onclick=\"openTab('ios', this)\"]");
      if(iosBtn) iosBtn.click();
  }
});
