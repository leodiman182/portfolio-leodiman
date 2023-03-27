import { aga1, aga2, aga3, aga4, aga5, aga6, aga7 } from '../assets/portfolio/aga-site/exports';
import { dv1, dv2, dv3, } from '../assets/portfolio/dvitto/exports';
import { pluga1, pluga2, pluga3 } from '../assets/portfolio/pluga/exports';
import { land1 , land2, land3 } from '../assets/portfolio/landing-bot/exports';
import { mu1, mu2, mu3, mu4, mu5, mu6, mu7 } from '../assets/portfolio/mercado-unido/exports';
import { teia1, teia2, teia3, teia4, teia5, teia6, teia7, teia8, teia9 } from '../assets/portfolio/teia-exp/exports';
import { bot1, bot2, bot3, bot4, bot5 } from '../assets/portfolio/usain-bot/exports';

const projectsGallery = [
  {
    name: 'adm | usain-bot',
    description: 'Essa página foi uma reestilização do zero da parte administrativa de um dos produtos da AGA Tecnologia - o usain-bot. A ideia era trazer uma página administrativa bem mais intuitiva e aconchegante, com um design mais moderno e fácil. Nessa página, o usuário tem acesso à toda a parte administrativa de seu bot, desde configurações de mensagens, cadastro de novos clientes, edição de mensagens e arquivos a serem enviados pelo bot. ',
    imageGallery: [
      bot1, bot2, bot3, bot4, bot5
    ],
    link: 'https://usainbot.com/login',
    alt: 'a página administrativa do bot',
    stacks: [
      'react', 'tailwind', 'axios', 'node'
    ]
  },
  {
    name: 'Site | desafio pluga',
    description: 'Esse site foi o desafio de uma prova técnica para a empresa Pluga. Utilizando uma lista fornecida através de uma url, o objetivo era criar uma interface que renderizasse as ferramentas da lista baseado em um layout sugerido. Para a requisição, foi usado Axios. Outro requisito foi o componente de paginação e um modal que mostrasse as três últimas ferramentas selecionadas. Ambos os botões foram ideia minha pensando em melhorar o design da UX.',
    imageGallery: [
      pluga1, pluga2, pluga3
    ],
    link: 'https://desafio-pluga-delta.vercel.app/',
    alt: 'a plataforma do desafio da Pluga',
    stacks: [
      'react', 'tailwind', 'axios', 'materialui'
    ]
  },
  {
    name: 'site | mercado unido',
    description: 'Essa plataforma começou a ser desenvolvida para um cliente com uma ideia de MVP voltado para a venda no varejo. Projeto reproduzido a partir de protótipo criado no Figma. Site com cards promocionais, formulários de informações e contato, integração com Firebase para autenticação por contas existentes e um layout de "quebra-cabeça" na Home, algo que foi um desafio interessante a ser ultrapassado. Toda a plataforma foi desenvolvida pelo método "mobile first", ou seja, é totalmente responsiva.',
    imageGallery: [
      mu1, mu2, mu3, mu4, mu5, mu6, mu7
    ],
    link: 'https://app-mercado-unido.web.app/',
    alt: 'a plataforma em desenvolvimento do Mercado Unido',
    stacks: [
      'react', 'tailwind'
    ]
  },
  {
    name: 'site | teia exp',
    description: 'Esse site foi desenvolvido como o MVP de uma startup que tinha como finalidade oferecer às empresas contratantes experiências com foco no desenvolvimento pessoal e de soft skills, visando melhor desempenho no trabalho e melhorando o ambiente de trabalho. A plataforma servia como um lugar onde as experiências, como aulas de cerâmica, teatro, surf e muitas outras, eram exibidas, avaliadas e compartilhadas.',
    imageGallery: [
      teia1, teia2, teia3, teia4, teia5, teia6, teia7, teia8, teia9,
    ],
    link: '',
    color: 'project3',
    alt: 'o site da TeiaExp',
    stacks: [
      'react', 'tailwind', 'node'
    ]
  },
  {
    name: "site | Armazém D'Vitto",
    description: "Esse website foi desenvolvido para o Armazém D'Vitto, bar/restaurante da cidade de Bariri, com o intuito de ser um lugar informativo e de apresentação do espaço, com galeria de fotos, links para pedidos delivery e cardápio - tudo isso customizável com uma página administrativa também desenvolvida pela AGA Tecnologia, onde o cliente consegue atualizar praticamente todos os elementos do site, inclusive as cores primárias.",
    singlePage: true,
    imageGallery: [
      dv1, dv2, dv3, 
    ],
    link: 'https://armazemdvitto.com.br/',
    color: 'project2',
    alt: "o site do D'Vitto",
    stacks: [
      'react', 'tailwind'
    ]
  },
  {
    name: 'landing page | usain-bot',
    description: 'Essa landing page foi desenvolvida para a empresa AGA Tecnologia em cima de um estudo feito sobre landing Pages, com o intuito de informar sobre o produto e atrair possíveis leads, deixando o acesso bem prático - a um QR CODE de distância.',
    singlePage: true,
    imageGallery: [
      land1, land2, land3
    ],
    link: '',
    alt: 'a landing page do usain-bot',
    stacks: [
      'react', 'tailwind'
    ]
  },
  {
    name: 'site | AGA Tecnologia',
    description: 'Esse website foi desenvolvido para a empresa AGA Tecnologia, com o intuito de apresentar um pouco mais sobre a empresa e seus membros de uma forma simples e descontraída, seus produtos e serviços, além de links para contato. ',
    singlePage: true,
    imageGallery: [
      aga1, aga2, aga3, aga4, aga5, aga6, aga7
    ],
    link: 'https://agatecnologia.com/',
    color: 'project1',
    alt: 'o site da AGA',
    stacks: [
      'react', 'tailwind'
    ]
  },
];

export default projectsGallery;