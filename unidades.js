// =================================================================
// UNIDADES ENGINE — D3.js + TopoJSON
// Mapa exclusivo do Brasil com divisões estaduais nítidas
// =================================================================

// 1. DADOS DE ORIGEM
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

// 2. Mapeamento sigla IBGE → código BR-XX
const ibgeToCode = {
  "11": "BR-RO", "12": "BR-AC", "13": "BR-AM", "14": "BR-RR",
  "15": "BR-PA", "16": "BR-AP", "17": "BR-TO", "21": "BR-MA",
  "22": "BR-PI", "23": "BR-CE", "24": "BR-RN", "25": "BR-PB",
  "26": "BR-PE", "27": "BR-AL", "28": "BR-SE", "29": "BR-BA",
  "31": "BR-MG", "32": "BR-ES", "33": "BR-RJ", "35": "BR-SP",
  "41": "BR-PR", "42": "BR-SC", "43": "BR-RS", "50": "BR-MS",
  "51": "BR-MT", "52": "BR-GO", "53": "BR-DF"
};

// 3. INICIALIZAÇÃO DO MAPA D3
(function initMap() {
  const container = document.getElementById('regions_div');
  const loading   = document.getElementById('loading_map');

  // Dimensões responsivas
  const W = container.clientWidth  || 560;
  const H = Math.round(W * 1.05);

  // Cria SVG
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("width",  "100%");
  svg.setAttribute("height", "100%");
  svg.style.display = "block";
  container.appendChild(svg);

  // Tooltip flutuante
  const tip = document.createElement('div');
  tip.id = 'map-tooltip';
  tip.style.cssText = `
    position:fixed; pointer-events:none; display:none;
    background:#1a1a1a; color:#fff; font-size:13px; font-weight:600;
    padding:6px 14px; border-radius:8px; z-index:9999;
    box-shadow:0 4px 14px rgba(0,0,0,0.25);
    font-family:'Inter',sans-serif; white-space:nowrap;
  `;
  document.body.appendChild(tip);

  // Carrega GeoJSON dos estados do Brasil (IBGE oficial via CDN confiável)
  const GEOJSON_URL =
    'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson';

  fetch(GEOJSON_URL)
    .then(r => r.json())
    .then(geojson => {
      loading.style.display = 'none';

      // Projeção Mercator centrada no Brasil
      const projection = createMercatorProjection(geojson, W, H);
      const pathFn     = createPathFunction(projection);

      // Grupo de estados
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      svg.appendChild(g);

      geojson.features.forEach(feature => {
        const sigla   = feature.properties.sigla;          // ex: "SP", "PR"
        const code    = sigla ? `BR-${sigla}` : null;      // ex: "BR-SP"
        const hasUnit = code && unitsByState[code];

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", pathFn(feature));
        path.setAttribute("fill",         "#ff7a00");
        path.setAttribute("stroke",       "#ffffff");
        path.setAttribute("stroke-width", "1.2");
        path.style.cursor     = "pointer";
        path.style.transition = "fill 0.2s ease";
        path.dataset.code     = code || '';
        path.dataset.name     = feature.properties.name || sigla || '';

        // Hover
        path.addEventListener('mouseenter', e => {
          path.setAttribute("fill", "#e06500");
          tip.style.display = 'block';
          tip.textContent   = path.dataset.name;
        });
        path.addEventListener('mousemove', e => {
          tip.style.left = (e.clientX + 14) + 'px';
          tip.style.top  = (e.clientY - 32) + 'px';
        });
        path.addEventListener('mouseleave', () => {
          const isSelected = path.dataset.selected === '1';
          path.setAttribute("fill", isSelected ? "#1a1a1a" : "#ff7a00");
          tip.style.display = 'none';
        });

        // Click
        path.addEventListener('click', () => {
          // Reset todos
          g.querySelectorAll('path').forEach(p => {
            delete p.dataset.selected;
            const c = p.dataset.code;
            const h = c && unitsByState[c];
            p.setAttribute("fill", "#ff7a00");
            p.setAttribute("stroke-width", "1.2");
          });
          // Marca o clicado
          path.dataset.selected = '1';
          path.setAttribute("fill", "#1a1a1a");
          path.setAttribute("stroke-width", "2");
          if (code) renderCitiesPanel(code);
        });

        g.appendChild(path);
      });

      // Siglas nos estados (label)
      geojson.features.forEach(feature => {
        const sigla = feature.properties.sigla || feature.properties.postal;
        if (!sigla) return;
        const centroid = getCentroid(feature, projection);
        if (!centroid) return;
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x",           centroid[0]);
        text.setAttribute("y",           centroid[1] + 4);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size",   "9");
        text.setAttribute("font-weight", "700");
        text.setAttribute("font-family", "Inter, sans-serif");
        text.setAttribute("fill",        "#ffffff");
        text.setAttribute("pointer-events", "none");
        text.textContent = sigla;
        svg.appendChild(text);
      });
    })
    .catch(err => {
      console.error('Erro ao carregar GeoJSON:', err);
      loading.innerHTML = '<p class="text-danger fw-bold">Erro ao carregar o mapa.</p>';
    });
})();

// ─── Helpers de Projeção (Mercator simples) ───────────────────────

function createMercatorProjection(geojson, W, H) {
  // Calcula bounding box do Brasil
  let minLon =  Infinity, maxLon = -Infinity;
  let minLat =  Infinity, maxLat = -Infinity;

  geojson.features.forEach(f => {
    eachCoord(f.geometry, ([lon, lat]) => {
      if (lon < minLon) minLon = lon;
      if (lon > maxLon) maxLon = lon;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
    });
  });

  const pad    = 20;
  const scaleX = (W - pad * 2) / (maxLon - minLon);
  const scaleY = (H - pad * 2) / (maxLat - minLat);
  const scale  = Math.min(scaleX, scaleY);

  const offX = pad + (W - pad * 2 - (maxLon - minLon) * scale) / 2;
  const offY = pad + (H - pad * 2 - (maxLat - minLat) * scale) / 2;

  return function([lon, lat]) {
    const x =  offX + (lon - minLon) * scale;
    const y =  offY + (maxLat - lat) * scale; // invertido pois y cresce p baixo
    return [x, y];
  };
}

function createPathFunction(project) {
  return function(feature) {
    return geoToSVGPath(feature.geometry, project);
  };
}

function geoToSVGPath(geometry, project) {
  function ringToD(ring) {
    return ring.map((pt, i) => {
      const [x, y] = project(pt);
      return (i === 0 ? 'M' : 'L') + x.toFixed(2) + ',' + y.toFixed(2);
    }).join(' ') + ' Z';
  }

  if (geometry.type === 'Polygon') {
    return geometry.coordinates.map(ringToD).join(' ');
  } else if (geometry.type === 'MultiPolygon') {
    return geometry.coordinates.map(poly => poly.map(ringToD).join(' ')).join(' ');
  }
  return '';
}

function getCentroid(feature, project) {
  let sumX = 0, sumY = 0, count = 0;
  let rings = [];

  if (feature.geometry.type === 'Polygon') {
    rings = [feature.geometry.coordinates[0]];
  } else if (feature.geometry.type === 'MultiPolygon') {
    // Usa o polígono com mais pontos (geralmente o maior)
    let biggest = [];
    feature.geometry.coordinates.forEach(poly => {
      if (poly[0].length > biggest.length) biggest = poly[0];
    });
    rings = [biggest];
  }

  rings.forEach(ring => {
    ring.forEach(pt => {
      const [x, y] = project(pt);
      sumX += x; sumY += y; count++;
    });
  });

  return count > 0 ? [sumX / count, sumY / count] : null;
}

function eachCoord(geometry, fn) {
  if (geometry.type === 'Polygon') {
    geometry.coordinates.forEach(ring => ring.forEach(fn));
  } else if (geometry.type === 'MultiPolygon') {
    geometry.coordinates.forEach(poly => poly.forEach(ring => ring.forEach(fn)));
  }
}

// 4. RENDERIZAÇÃO DO PAINEL DIREITO (MANTIDA IGUAL)
function renderCitiesPanel(stateCode) {
  const stateData    = unitsByState[stateCode];
  const emptyState   = document.getElementById('empty-state');
  const citiesList   = document.getElementById('cities-list');
  const stateTitle   = document.getElementById('state-title');
  const stateSubtitle= document.getElementById('state-subtitle');
  const stateCount   = document.getElementById('state-count');
  const countNumber  = document.getElementById('count-number');

  if (!stateData) {
    emptyState.style.display  = 'flex';
    citiesList.style.display  = 'none';
    stateCount.style.display  = 'none';
    stateTitle.innerHTML      = 'Região Não Atendida';
    stateSubtitle.innerHTML   = 'Em breve abriremos unidades por aqui.';
    citiesList.innerHTML      = '';
    return;
  }

  emptyState.style.display  = 'none';
  citiesList.style.display  = 'block';
  stateCount.style.display  = 'block';

  stateTitle.innerHTML    = `Unidades em ${stateData.nome}`;
  stateSubtitle.innerHTML = 'Pronto para cuidar de você.';
  countNumber.innerHTML   = stateData.cidades.length;

  let listHTML = '';
  stateData.cidades.forEach(cidade => {
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

  if (window.innerWidth < 992) {
    document.querySelector('.cities-panel').scrollIntoView({ behavior: 'smooth' });
  }
}
