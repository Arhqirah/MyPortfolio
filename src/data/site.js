// Site-wide content: nav, contact, and the About page copy.

export const nav = [
  { href: '/arbejde', label: 'Arbejde' },
  { href: '/om', label: 'Om' },
];

export const contact = [
  { label: 'E-mail', value: 'simonmelbyeandersen@gmail.com', href: 'mailto:simonmelbyeandersen@gmail.com' },
  { label: 'Telefon', value: '60 88 94 70', href: 'tel:+4560889470' },
  {
    label: 'GitHub',
    value: 'Arhqirah',
    href: 'https://github.com/Arhqirah',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'simon-melbye-andersen',
    href: 'https://www.linkedin.com/in/simon-melbye-andersen-1aa513133/',
    external: true,
  },
  {
    label: 'Facebook',
    value: 'simon.m.andersen',
    href: 'https://www.facebook.com/simon.m.andersen/',
    external: true,
  },
];

// The internship pitch — shown high on the front page and on /om.
export const seeking = {
  role: 'Praktikplads som webudvikler',
  period: '18. januar – 31. marts 2027',
  location: 'København-området',
  blurb:
    'Jeg søger en praktikplads hvor jeg kan arbejde med webudvikling i et team og blive skarpere som udvikler — frontend og backend. Jeg kommer med en baggrund i film- og udstillingsproduktion, så jeg er vant til at bygge noget der skal virke for et publikum — nu i kode.',
  stack: ['TypeScript', 'React · Next.js', 'Astro', 'Python · Flask', 'MySQL', 'Docker', 'Git'],
  mailSubject: 'Praktikplads — webudvikling',
};

// Colophon / "om denne side" — makes the site itself a code sample.
export const colophon = {
  text: 'Denne side er håndbygget i Astro — ingen template, ingen sidebygger. Statisk output, view transitions, optimerede billeder.',
  // TODO Simon: skift til repoet for netop denne side, hvis du pusher det
  repoUrl: 'https://github.com/Arhqirah',
};

export const about = {
  lead:
    'Jeg er webudvikler-studerende på EK. Jeg har en afsluttet uddannelse som multimediedesigner fra KEA i bagagen og en baggrund som film- og tv-produktionstekniker fra Media College Denmark, hvor jeg arbejdede med produktion hos blandt andre No Parking Production og TV2 Bornholm.',
  body: [
    'Jeg arbejder i to spor. Det ene er levende billeder til fysiske rum — video, animation og projection mapping til museer og oplevelsescentre. Det andet, og det jeg uddanner mig til nu, er web: fra WordPress-sider for mindre virksomheder til håndkodede sider i Astro og React — som denne.',
    'Jeg søger en praktikplads som webudvikler fra 18. januar til 31. marts 2027, gerne i København-området. Jeg lærer hurtigt, kan lide at bygge ting der virker for rigtige brugere, og vil gerne ind i et team hvor jeg kan blive dygtigere.',
    'Jeg holder af det enkle, det langtidsholdbare og roen i at gå en tur langs vandet. Jeg bor i Birkerød.',
  ],
  cv: [
    { role: 'Webudvikler', place: 'EK — studerende' },
    { role: 'Multimediedesigner', place: 'KEA — Københavns Erhvervsakademi (afsluttet)' },
    { role: 'Film- & tv-produktionstekniker', place: 'Media College Denmark, Viborg' },
    { role: 'Produktion', place: 'No Parking Production' },
    { role: 'Produktion', place: 'TV2 Bornholm' },
  ],
  skills: [
    {
      group: 'Frontend',
      items: [
        'JavaScript & TypeScript',
        'React & Next.js (App Router)',
        'Astro',
        'HTML & CSS / Tailwind CSS',
        'TanStack Query',
      ],
    },
    {
      group: 'Backend & data',
      items: [
        'Python / Flask (REST API\'er)',
        'MySQL / MariaDB',
        'JWT-autentificering',
        'Web scraping (Shopify)',
      ],
    },
    {
      group: 'DevOps & værktøjer',
      items: ['Git & GitHub', 'Docker & Docker Compose', 'Deployment (Railway)'],
    },
    {
      group: 'AI & integrationer',
      items: ['Claude API (inkl. vision / billedgenkendelse)', 'Mapbox / geolocation'],
    },
    {
      group: 'Design',
      items: ['Figma', 'UX/UI & mobile-first design', 'Prototyping og design guides'],
    },
    {
      group: 'Andet',
      items: ['Shopify / Liquid', 'Godot (GDScript)', 'Film/TV- og multimedieproduktion'],
    },
  ],
};

// The six broadcast colour-bar hues, keyed the way projects reference them.
export const bars = ['y', 'c', 'g', 'm', 'r', 'b'];
