// =================================================================
// UNIDADES ENGINE - GOOGLE GEOCHART MAP
// Permite mapeamento de poligonos do Brasil e clicks interativos
// =================================================================

// 1. DADOS DE ORIGEM - BASE (ACESSOSAUDE.COM.BR)
const unitsByState = {
  "BR-GO": {
    nome: "Goiás",
    cidades: [
      { name: "Aparecida de Goiânia", link: "https://acessosaude.com.br/aparecida-de-goiania-go/" },
      { name: "Catalão", link: "https://acessosaude.com.br/catalao-go/" },
      { name: "Goiânia", link: "https://acessosaude.com.br/goiania/" },
      { name: "Valparaíso de Goiás", link: "https://acessosaude.com.br/valparaiso-de-goias/" }
    ]
  },
  "BR-PR": {
    nome: "Paraná",
    cidades: [
      { name: "Araucária", link: "https://acessosaude.com.br/araucaria/" },
      { name: "Cascavel", link: "https://acessosaude.com.br/cascavel/" },
      { name: "Castro", link: "https://acessosaude.com.br/castro/" },
      { name: "Colombo", link: "https://acessosaude.com.br/colombo-pr/" },
      { name: "Curitiba – Centro", link: "https://acessosaude.com.br/araucaria-2/" },
      { name: "Curitiba – Sítio Cercado", link: "https://acessosaude.com.br/sitio-cercado-pr/" },
      { name: "Curitiba – Cidade Ind.", link: "https://acessosaude.com.br/curitiba-cidade-industrial/" },
      { name: "Fazenda Rio Grande", link: "https://acessosaude.com.br/fazenda-rio-grande-pr/" },
      { name: "Foz do Iguaçu", link: "https://acessosaude.com.br/foz-do-iguacu/" },
      { name: "Londrina", link: "https://acessosaude.com.br/londrina/" },
      { name: "Maringá", link: "https://acessosaude.com.br/maringa/" },
      { name: "Medianeira", link: "https://acessosaude.com.br/medianeira-pr/" },
      { name: "Pinhais", link: "https://acessosaude.com.br/pinhais-pr/" },
      { name: "Ponta Grossa", link: "https://acessosaude.com.br/ponta-grossa/" },
      { name: "Quatro Barras", link: "https://acessosaude.com.br/quatro-barras/" },
      { name: "São José dos Pinhais", link: "https://acessosaude.com.br/sao-jose-dos-pinhais/" },
      { name: "Toledo", link: "https://acessosaude.com.br/toledo/" }
    ]
  },
  "BR-SC": {
    nome: "Santa Catarina",
    cidades: [
      { name: "Balneário Camboriú", link: "https://acessosaude.com.br/balneario-camboriu/" },
      { name: "Barra Velha", link: "https://acessosaude.com.br/barra-velha/" },
      { name: "Florianópolis", link: "https://acessosaude.com.br/florianopolis/" },
      { name: "Mafra", link: "https://acessosaude.com.br/mafra-sc/" },
      { name: "Palhoça", link: "https://acessosaude.com.br/palhoca/" }
    ]
  },
  "BR-SP": {
    nome: "São Paulo",
    cidades: [
      { name: "Bauru", link: "https://acessosaude.com.br/bauru/" },
      { name: "Marília", link: "https://acessosaude.com.br/marilia/" },
      { name: "Praia Grande", link: "https://acessosaude.com.br/praia-grande-sp/" },
      { name: "Ribeirão Preto", link: "https://acessosaude.com.br/ribeirao-preto-sp/" },
      { name: "Santana de Parnaíba", link: "https://acessosaude.com.br/santana-de-parnaiba/" },
      { name: "Santo André", link: "https://acessosaude.com.br/santo-andre/" },
      { name: "Santos", link: "https://acessosaude.com.br/santos/" },
      { name: "São José do Rio Preto", link: "https://acessosaude.com.br/sao-jose-do-rio-preto-sp/" }
    ]
  },
  "BR-PA": {
    nome: "Pará",
    cidades: [
      { name: "Belém", link: "https://acessosaude.com.br/belem-pa/" },
      { name: "Santarém", link: "https://acessosaude.com.br/santarem/" }
    ]
  },
  "BR-DF": {
    nome: "Distrito Federal",
    cidades: [
      { name: "Ceilândia", link: "https://acessosaude.com.br/ceilandia/" },
      { name: "Recanto das Emas", link: "https://acessosaude.com.br/recanto-das-emas/" },
      { name: "Taguatinga", link: "https://acessosaude.com.br/taguatinga/" }
    ]
  },
  "BR-MS": {
    nome: "Mato Grosso do Sul",
    cidades: [
      { name: "Dourados", link: "https://acessosaude.com.br/dourados/" }
    ]
  },
  "BR-CE": {
    nome: "Ceará",
    cidades: [
      { name: "Iguatu", link: "https://acessosaude.com.br/iguatu/" }
    ]
  },
  "BR-AL": {
    nome: "Alagoas",
    cidades: [
      { name: "Maceió", link: "https://acessosaude.com.br/maceio-al/" }
    ]
  },
  "BR-AM": {
    nome: "Amazonas",
    cidades: [
      { name: "Manaus – Compensa", link: "https://acessosaude.com.br/manaus-compensa/" },
      { name: "Manaus – Manoa", link: "https://acessosaude.com.br/manaus-manoa/" },
      { name: "Manaus (Matriz)", link: "https://acessosaude.com.br/manaus/" }
    ]
  },
  "BR-MG": {
    nome: "Minas Gerais",
    cidades: [
      { name: "Manhuaçu", link: "https://acessosaude.com.br/manhuacu/" }
    ]
  },
  "BR-TO": {
    nome: "Tocantins",
    cidades: [
      { name: "Palmas", link: "https://acessosaude.com.br/palmas-to/" }
    ]
  },
  "BR-RJ": {
    nome: "Rio de Janeiro",
    cidades: [
      { name: "Resende", link: "https://acessosaude.com.br/resende-rj/" }
    ]
  },
  "BR-MT": {
    nome: "Mato Grosso",
    cidades: [
      { name: "Rondonópolis", link: "https://acessosaude.com.br/rondonopolis/" },
      { name: "Várzea Grande", link: "https://acessosaude.com.br/varzea-grande-mt/" }
    ]
  },
  "BR-BA": {
    nome: "Bahia",
    cidades: [
      { name: "Simões Filho", link: "https://acessosaude.com.br/simoes-filho-ba/" }
    ]
  },
  "BR-PI": {
    nome: "Piauí",
    cidades: [
      { name: "Teresina", link: "https://acessosaude.com.br/teresina-pi/" }
    ]
  }
};

// 2. CONFIGURAÇÃO GOOGLE CHARTS (GEOCHART)
google.charts.load('current', {
  'packages': ['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  document.getElementById('loading_map').style.display = 'none'; // Esconde loading
  const dataMap = [
    ['State', 'Sede']
  ];

  // Forçando a inserção de TODOS os 27 estados para que fiquem laranjas e clicáveis
  const allStates = [
    'BR-AC', 'BR-AL', 'BR-AM', 'BR-AP', 'BR-BA', 'BR-CE', 'BR-DF', 'BR-ES', 'BR-GO',
    'BR-MA', 'BR-MG', 'BR-MS', 'BR-MT', 'BR-PA', 'BR-PB', 'BR-PE', 'BR-PI', 'BR-PR',
    'BR-RJ', 'BR-RN', 'BR-RO', 'BR-RR', 'BR-RS', 'BR-SC', 'BR-SE', 'BR-SP', 'BR-TO'
  ];
  allStates.forEach(state => {
    dataMap.push([state, 1]);
  });

  const data = google.visualization.arrayToDataTable(dataMap);

  const options = {
    region: 'BR', // Mapa exclusivo do Brasil
    resolution: 'provinces', // Divisão por estados
    colorAxis: { colors: ['#ff7a00'] }, // Cor base de highlight
    backgroundColor: 'transparent',
    datalessRegionColor: '#f3f4f6', // Cor cinza para estado vazio
    defaultColor: '#f5f5f5',
    tooltip: { trigger: 'none' }, // Desativa o tooltip nativo p focarmos no menu direito
    legend: 'none'
  };

  const chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  // 3. LISTENERS E LÓGICA DE SELEÇÃO
  google.visualization.events.addListener(chart, 'select', function () {
    const selection = chart.getSelection();
    if (selection.length > 0) {
      const stateCode = data.getValue(selection[0].row, 0);
      renderCitiesPanel(stateCode);
    }
  });

  chart.draw(data, options);
}

// 4. RENDERIZAÇÃO DOM (PAINEL DIREITO)
function renderCitiesPanel(stateCode) {
  const stateData = unitsByState[stateCode];

  // DOM Elements
  const emptyState = document.getElementById('empty-state');
  const citiesList = document.getElementById('cities-list');
  const stateTitle = document.getElementById('state-title');
  const stateSubtitle = document.getElementById('state-subtitle');
  const stateCount = document.getElementById('state-count');
  const countNumber = document.getElementById('count-number');

  if (!stateData) {
    // Caso de clicar em estado sem unidades (ex: Acre)
    emptyState.style.display = 'flex';
    citiesList.style.display = 'none';
    stateCount.style.display = 'none';
    stateTitle.innerHTML = 'Região Não Atendida';
    stateSubtitle.innerHTML = 'Em breve abriremos unidades por aqui.';
    citiesList.innerHTML = ''; // Clear
    return;
  }

  // Preenchendo Informações
  emptyState.style.display = 'none';
  citiesList.style.display = 'block';
  stateCount.style.display = 'block';
  
  stateTitle.innerHTML = `Unidades em ${stateData.nome}`;
  stateSubtitle.innerHTML = 'Pronto para cuidar de você.';
  countNumber.innerHTML = stateData.cidades.length;

  let listHTML = '';

  stateData.cidades.forEach((cidade) => {
    // Opção B do plan executada: Links redirecionando para páginas específicas da marca
    listHTML += `
      <li>
        <a href="${cidade.link}" target="_blank" class="city-item">
          <div class="fw-bold d-flex align-items-center gap-2">
            <i class="bi bi-geo-fill"></i> ${cidade.name}
          </div>
          <i class="bi bi-chevron-right text-muted small"></i>
        </a>
      </li>
    `;
  });

  citiesList.innerHTML = listHTML;
  
  // Mobile smooth scroll ao clicar
  if(window.innerWidth < 992) {
      document.querySelector('.cities-panel').scrollIntoView({ behavior: 'smooth' });
  }
}
