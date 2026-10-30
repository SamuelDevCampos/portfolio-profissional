'use strict';

// Dados públicos de contato. Links sociais permanecem ocultos até receberem URLs reais.
const PORTFOLIO_CONFIG = Object.freeze({
  email: 'samukadesousa2014@gmail.com',
  github: '',
  linkedin: '',
});

const CASES = Object.freeze({
  nexora: {
  "title": "Nexora",
  "overline": "CRM · PROSPECÇÃO & IA",
  "description": "Plataforma multiempresa de prospecção, atendimento e relacionamento pelo WhatsApp.",
  "challenge": "Organizar leads, conversas e acompanhamento comercial em um ambiente separado por empresa.",
  "solution": "Cadastro de contatos com tags e observações, múltiplas conexões WPPConnect, histórico de conversas e mensagens agendadas. Assistente opcional com Ollama para qualificar e pontuar leads, interromper abordagens após recusa e transferir o atendimento para a equipe.",
  "tags": [
    "Node.js",
    "MySQL",
    "WPPConnect",
    "Ollama",
    "Multiempresa"
  ],
  "result": "Implementação local documentada com painel, perfis de acesso e assistente opcional de IA. Sem indicadores de conversão ou operação em produção aferidos."
},
  rotapresente: {
  "title": "Rota Presente",
  "overline": "SAAS · TRANSPORTE ESCOLAR",
  "description": "Sistema multiempresa para gestão do transporte escolar e controle de frequência dos alunos.",
  "challenge": "Substituir controles dispersos de rotas e chamadas por registros organizados de ida e volta.",
  "solution": "Cadastros de escolas, veículos, motoristas, monitores, rotas e alunos. Chamada diária com estados de presença por trajeto, acesso dos monitores restrito às rotas atribuídas, relatórios por período e exportação CSV, interface responsiva e trilha de auditoria.",
  "tags": [
    "PHP 8.2",
    "MySQL",
    "Multiempresa",
    "Permissões",
    "Relatórios CSV"
  ],
  "result": "MVP local documentado com gestão de rotas e frequência, permissões por ferramenta e interface para celular. Dados demonstrativos; uso em produção não confirmado."
},
  quizwhatsapp: {
  "title": "Bot de Questões no WhatsApp",
  "overline": "EDTECH · AUTOMAÇÃO WHATSAPP",
  "description": "Plataforma multiempresa para distribuir questões de estudo pelo WhatsApp e acompanhar respostas.",
  "challenge": "Organizar bancos de questões e oferecer uma rotina de prática pelo WhatsApp com acompanhamento de desempenho.",
  "solution": "Backend Node.js com Express, MySQL e WPPConnect, sessões autenticadas por QR Code e painel por empresa. Banco de matérias e questões, quizzes por enquetes, apuração de acertos e erros e agendamento por destinatário, horário, dias e ordem das questões.",
  "tags": [
    "Node.js",
    "Express",
    "MySQL",
    "WPPConnect",
    "Enquetes",
    "Agendamento"
  ],
  "result": "Implementação local com painel administrativo, isolamento por empresa, sessões persistentes e fluxo de quizzes documentado. Entregabilidade e desempenho em escala não aferidos."
},
  torcidaos: {
    title: 'TorcidaOS',
    overline: 'PLATAFORMA SAAS · GESTÃO DE ORGANIZAÇÕES',
    description: 'Uma central digital para a operação de torcidas organizadas e outras comunidades com rotinas administrativas.',
    challenge: 'Cadastros, planos de associados, controle financeiro e vendas podem ficar espalhados entre planilhas, mensagens e diferentes ferramentas. Isso dificulta a visão operacional da organização.',
    solution: 'O produto reúne gestão de membros, carteirinhas digitais com QR Code, planos de sócio, gestão financeira, loja com PDV e módulos administrativos. A arquitetura do produto organiza áreas de negócio distintas dentro de uma experiência integrada.',
    tags: ['Plataforma SaaS', 'Módulos administrativos', 'QR Code', 'Loja e PDV', 'Gestão de associados'],
    result: 'Impacto de produto: centralizar fluxos que antes exigiam ferramentas separadas. Projeto em evolução; não há uma métrica pública auditada de usuários, receita ou desempenho para apresentar.',
    url: 'https://torcidaos.com.br',
  },
  caravanaos: {
    title: 'CaravanaOS',
    overline: 'SAAS · ORGANIZAÇÃO DE CARAVANAS',
    description: 'Ferramenta de gestão para organizadores, independente de operadores e empresas de transporte.',
    challenge: 'Coordenar participantes, reservas e embarque em diversos ônibus ou vans é propenso a retrabalho quando não existe um fluxo central.',
    solution: 'Estruturação de caravanas com identificação BUS/VAN, artes personalizadas para os veículos, vitrine de vendas e validação de credenciais de embarque via QR Code. O escopo é o software de organização, não a operação de uma frota.',
    tags: ['Gestão de caravanas', 'BUS / VAN', 'Check-in', 'QR Code', 'Vitrine digital'],
    result: 'Resultado pretendido: tornar a organização e a conferência do embarque mais claras e verificáveis. Produto em construção; métricas operacionais ainda não estão disponíveis.',
  },
  raiox: {
    title: 'Raio-X Local',
    overline: 'DADOS · DIAGNÓSTICO DE PERFIS EMPRESARIAIS',
    description: 'Análise de dados públicos disponíveis nos perfis empresariais do Google e comparação com estabelecimentos locais.',
    challenge: 'Empresas frequentemente têm dificuldades para avaliar a completude e a consistência de seus perfis locais ou para priorizar melhorias com base em evidências.',
    solution: 'Fluxo modular para coletar e inspecionar dados do perfil, aplicar checklists, comparar negócios similares e gerar recomendações verificáveis. O link de website é checado somente quanto à presença no perfil: o conteúdo do site não é auditado.',
    tags: ['Google Business Profile', 'Google Maps', 'Checklists', 'APIs', 'Relatórios', 'Regras transparentes'],
    result: 'Protótipo com rotas de coleta, inspeção, relatório e orientação testadas. As saídas descrevem os dados verificáveis; não são apresentadas alegações de ganho de ranking ou crescimento comercial sem mensuração.',
  },
  botos: {
    title: 'BotOS',
    overline: 'AUTOMAÇÃO · AGENDAMENTO VIA WHATSAPP',
    description: 'Produto para automatizar a jornada de agendamento de negócios prestadores de serviços.',
    challenge: 'Solicitações de horário, disponibilidade e lembretes ocupam o atendimento com atividades repetitivas e podem criar atritos para os clientes.',
    solution: 'Desenho de conversas para escolha de serviço, profissional e horário, sincronização com a agenda operacional, lembretes e links de pagamento. Integração com WhatsApp Cloud API e webhooks em testes.',
    tags: ['WhatsApp Cloud API', 'Webhooks', 'Agendamento', 'Lembretes', 'Pagamentos'],
    result: 'Objetivo: automatizar etapas da marcação de horários preservando controle no painel do estabelecimento. Integração em fase de testes, sem métricas de redução de tempo ou entregabilidade validadas.',
  },

  buzinessos: {
    title: 'buZinessOS',
    overline: 'SAAS · OPERAÇÃO DE PERFIS EMPRESARIAIS',
    description: 'Plataforma voltada à gestão de clientes e Perfis da Empresa no Google, especialmente para a operação de agências.',
    challenge: 'Manter vários clientes e perfis de negócio organizados em processos isolados gera troca de contexto e dificulta o acompanhamento.',
    solution: 'O projeto estrutura um ambiente de contas e jornadas de gestão para negócios e agências. O fluxo previsto de integração oficial utiliza OAuth 2.0 para autorização de cada cliente, sem solicitar credenciais pessoais do Google.',
    tags: ['SaaS', 'Google Business Profile', 'Gestão de clientes', 'OAuth 2.0 (planejado)', 'Base44'],
    result: 'Site e fluxo de contas existentes. A aprovação e cota da API oficial do Google Business Profile ainda estavam pendentes na última verificação; não há dados validados de escala, ganho de ranking ou relatórios automáticos em produção.',
    url: 'https://buzinessos.com.br',
  },
  retoma: {
    title: 'Retoma AI',
    overline: 'GESTÃO DE LEADS · JORNADA WHATSAPP',
    description: 'Conceito de produto para ajudar negócios a perceber contatos que demonstraram interesse, mas não concluíram uma conversa ou contratação.',
    challenge: 'Oportunidades comerciais podem se perder quando potenciais clientes iniciam um contato e deixam de avançar.',
    solution: 'O material do produto descreve uma experiência que sinaliza o interesse do lead e facilita uma retomada pelo WhatsApp. O foco é tornar visível a próxima ação comercial; não há comprovação disponível da arquitetura interna de detecção.',
    tags: ['Fluxos comerciais', 'WhatsApp', 'Experiência de leads', 'Checkout integrado'],
    result: 'Campanha visual do produto criada e checkout integrado exercitado em transação de teste via Pix. Não há comprovação disponível de métricas de recuperação ou de automação plena em produção.',
  },
  aprovamentor: {
    title: 'AprovaMentor',
    overline: 'EDTECH · PREPARAÇÃO PARA CONCURSOS',
    description: 'Plataforma digital para apoiar planejamento, execução e acompanhamento de estudos para concursos.',
    challenge: 'Concurseiros precisam reunir edital, carga horária, prática de questões, simulados e orientação em uma rotina compreensível.',
    solution: 'Foi desenvolvido um protótipo navegável de painel com plano de estudos, trilhas, banco de questões, simulados, indicadores de desempenho, espaço de mentoria e comunidade. Também há evidência de fluxo de convite/acesso de mentores no aplicativo.',
    tags: ['Base44', 'HTML', 'Tailwind CSS', 'Chart.js', 'Mentoria', 'Dashboards'],
    result: 'Protótipo de interface e app com convites de mentor e autenticação. Os números exibidos no dashboard são demonstrativos; não são indicadores reais de aprovações, retenção ou desempenho da base de usuários.',
    url: 'https://aprova-mentor.base44.app',
  },
  arise: {
    title: 'ARISE Car Experience',
    overline: 'LANDING PAGE · ESTÉTICA AUTOMOTIVA',
    description: 'Conceito de landing page premium para serviços de estética automotiva.',
    challenge: 'Apresentar diferenciais, serviços e proposta de valor com clareza em uma página de primeira impressão.',
    solution: 'Layout responsivo com hierarquia visual, copy de conversão e caminho direto para contato. A implementação foi trabalhada em HTML e Tailwind CSS.',
    tags: ['HTML5', 'Tailwind CSS', 'Design responsivo', 'Conversão'],
    result: 'Projeto de interface desenvolvido como material comercial. Não foram fornecidos indicadores de tráfego, conversão ou publicação oficial.',
  },
  schild: {
    title: 'Schild Odontologia Familiar',
    overline: 'LANDING PAGE · ODONTOLOGIA',
    description: 'Experiência digital para uma clínica com diferentes frentes de atendimento odontológico.',
    challenge: 'Comunicar uma grade ampla de especialidades sem perder navegação simples e facilidade de agendamento.',
    solution: 'Landing page em HTML + Tailwind com layout mobile-first, apresentação segmentada de serviços, SEO local, marcação Schema.org e contato por WhatsApp.',
    tags: ['HTML5', 'Tailwind CSS', 'SEO local', 'Schema.org', 'WhatsApp'],
    result: 'Entrega de interface preparada para divulgação e contato. Não há métricas verificadas de agendamentos ou conversões.',
  },
  harmony: {
    title: 'Harmony Total Care',
    overline: 'LANDING PAGE · ODONTOLOGIA',
    description: 'Projeto de presença digital para clínica em Águas Claras, com foco em avaliação, limpeza e clareamento.',
    challenge: 'Transformar a busca por atendimento em uma experiência de descoberta de serviços e contato direto.',
    solution: 'Landing page responsiva em HTML + Tailwind CSS, com SEO local, marcação estruturada e organização da jornada para WhatsApp.',
    tags: ['HTML5', 'Tailwind CSS', 'SEO local', 'Schema.org', 'Mobile-first'],
    result: 'Projeto de página desenvolvido; publicação e indicadores de conversão não foram informados.',
  },
  papeiros: {
    title: 'Papeiros Lanches',
    overline: 'IDENTIDADE VISUAL · FOOD SERVICE',
    description: 'Conjunto de peças de branding e comunicação visual para lanchonete.',
    challenge: 'Criar unidade visual e destacar o cardápio em canais digitais e materiais promocionais.',
    solution: 'Identidade de marca, conceito de logotipo, cardápio premium e estudos de animação preparados para comunicação.',
    tags: ['Branding', 'Design visual', 'Cardápio digital', 'Motion'],
    result: 'Peças gráficas e propostas de comunicação desenvolvidas. Não há dados disponíveis de aplicação comercial ou retorno financeiro.',
  },
  curso: {
    title: 'Curso Google Meu Negócio',
    overline: 'EDUCAÇÃO · GOOGLE BUSINESS PROFILE',
    description: 'Conteúdo estruturado para ensinar fundamentos, avaliação e otimização de perfis empresariais.',
    challenge: 'Transformar processos técnicos de gestão de perfis em aprendizagem acessível e replicável.',
    solution: 'Organização de módulos com apostilas, PDF, capas, roteiros, peças visuais, narração e experiências de vídeo para aulas.',
    tags: ['Conteúdo técnico', 'Design editorial', 'Roteiros', 'Áudio', 'Vídeo'],
    result: 'Materiais do curso produzidos em etapas. O pacote completo de vídeos finalizados e as métricas de alunos não estão confirmados.',
  },
});

const byId = (id) => document.getElementById(id);
const menuButton = byId('menu-toggle');
const mobileMenu = byId('mobile-menu');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menuButton.classList.toggle('is-open', open);
  mobileMenu.hidden = !open;
}

menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileMenu.hidden) setMenu(false);
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 640) setMenu(false);
});

const currentYear = new Date().getFullYear();
byId('year').textContent = String(currentYear);

// Mantém endereço, ação mailto e cópia sincronizados.
const address = PORTFOLIO_CONFIG.email;
byId('contact-email').textContent = address;
byId('email-link').href = `mailto:${address}?subject=${encodeURIComponent('Contato pelo portfólio')}`;

for (const [service, label] of [['github', 'GitHub ↗'], ['linkedin', 'LinkedIn ↗']]) {
  const rawURL = PORTFOLIO_CONFIG[service];
  if (!rawURL) continue;
  try {
    const url = new URL(rawURL);
    if (url.protocol !== 'https:') continue;
    const anchor = document.createElement('a');
    anchor.href = url.toString();
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.textContent = label;
    anchor.setAttribute('aria-label', `${service} (abre em nova aba)`);
    byId('social-links').append(anchor);
  } catch (_error) {
    // Uma URL inválida não deve quebrar o restante do site.
  }
}

let toastTimeout;
function showToast(message) {
  const toast = byId('toast');
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove('show'), 2600);
}

async function copyEmail() {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard indisponível');
    await navigator.clipboard.writeText(address);
    showToast('E-mail copiado!');
  } catch (_error) {
    // Alternativa para browsers que não liberam Clipboard API em file://.
    const input = document.createElement('textarea');
    input.value = address;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.append(input);
    input.select();
    const copied = document.execCommand('copy');
    input.remove();
    showToast(copied ? 'E-mail copiado!' : `Copie o e-mail: ${address}`);
  }
}
byId('copy-email').addEventListener('click', copyEmail);

const dialog = byId('case-dialog');
const dialogClose = byId('dialog-close');
let lastCaseTrigger = null;

function openCase(caseKey, trigger) {
  const selected = CASES[caseKey];
  if (!selected) return;
  lastCaseTrigger = trigger;
  const fields = {
    'dialog-title': selected.title,
    'dialog-overline': selected.overline,
    'dialog-description': selected.description,
    'dialog-challenge': selected.challenge,
    'dialog-solution': selected.solution,
    'dialog-result': selected.result,
  };
  Object.entries(fields).forEach(([id, value]) => { byId(id).textContent = value; });
  const tags = byId('dialog-tags');
  tags.replaceChildren();
  selected.tags.forEach((tag) => {
    const chip = document.createElement('span');
    chip.textContent = tag;
    tags.append(chip);
  });
  const action = byId('dialog-action');
  action.replaceChildren();
  if (selected.url) {
    const link = document.createElement('a');
    link.href = selected.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Visitar o produto ↗';
    action.append(link);
  }
  if (typeof dialog.showModal === 'function') dialog.showModal();
}

document.querySelectorAll('.case-open').forEach((button) => {
  button.addEventListener('click', () => openCase(button.dataset.case, button));
});
dialogClose.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => { lastCaseTrigger?.focus(); });

const animatedElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
  animatedElements.forEach((element) => observer.observe(element));
} else {
  animatedElements.forEach((element) => element.classList.add('visible'));
}

let progressRequested = false;
function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.max(0, Math.min(100, (window.scrollY / scrollable) * 100)) : 0;
  byId('site-progress').style.width = `${progress}%`;
  progressRequested = false;
}
window.addEventListener('scroll', () => {
  if (progressRequested) return;
  progressRequested = true;
  window.requestAnimationFrame(updateScrollProgress);
}, { passive: true });
updateScrollProgress();
