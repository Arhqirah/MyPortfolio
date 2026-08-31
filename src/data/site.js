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
  // TODO Simon: ret til de rigtige uger når du kender dem
  period: 'Forår 2027 · 3. semester, KEA',
  location: 'København-området',
  blurb:
    'Jeg søger en praktikplads hvor jeg kan arbejde med frontend i et team og blive skarpere som udvikler. Jeg kommer med en baggrund i film- og udstillingsproduktion, så jeg er vant til at bygge noget der skal virke for et publikum — nu i kode.',
  stack: ['JavaScript', 'React', 'Astro', 'HTML & CSS', 'Git', 'Figma'],
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
    'Jeg er multimediedesigner-studerende på KEA og på vej mod webudvikling. Jeg har en baggrund som film- og tv-produktionstekniker fra Media College Denmark og har arbejdet med produktion hos blandt andre No Parking Production og TV2 Bornholm.',
  body: [
    'Jeg arbejder i to spor. Det ene er levende billeder til fysiske rum — video, animation og projection mapping til museer og oplevelsescentre. Det andet, og det jeg satser på nu, er web: fra WordPress-sider for mindre virksomheder til håndkodede sider i Astro og React — som denne.',
    'Jeg søger en praktikplads som webudvikler i 3. semester (forår 2027), gerne i København-området. Jeg lærer hurtigt, kan lide at bygge ting der virker for rigtige brugere, og vil gerne ind i et team hvor jeg kan blive dygtigere.',
    'Jeg holder af det enkle, det langtidsholdbare og roen i at gå en tur langs vandet. Jeg bor i Birkerød.',
  ],
  cv: [
    { role: 'Multimediedesigner', place: 'KEA — Københavns Erhvervsakademi' },
    { role: 'Film- & tv-produktionstekniker', place: 'Media College Denmark, Viborg' },
    { role: 'Produktion', place: 'No Parking Production' },
    { role: 'Produktion', place: 'TV2 Bornholm' },
  ],
  skills: [
    'Projection mapping',
    'Videoproduktion',
    'Animation',
    'Udstillingsdesign',
    'Figma',
    'HTML · CSS · JS',
    'React · Astro',
    'WordPress · Elementor',
  ],
};

// The six broadcast colour-bar hues, keyed the way projects reference them.
export const bars = ['y', 'c', 'g', 'm', 'r', 'b'];
