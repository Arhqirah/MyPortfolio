/**
 * Every project, one flat list. `channel` splits the two disciplines:
 *   'rum' — levende billeder til fysiske rum (installations, museums)
 *   'web' — hjemmesider til mindre virksomheder
 *
 * Images live in src/assets/work/ and are imported below, then optimised at
 * build time. Fields marked TODO are placeholders — Simon fills the real value.
 *
 *   slug     url segment: /arbejde/<slug>
 *   role     what Simon did, short
 *   place    where it lives / the client's town
 *   year     production year(s) — null until confirmed
 *   summary  one line, used on cards and as the case-study standfirst
 *   body     array of paragraphs for the case page (drafted — verify)
 *   bar      which colour-bar hue tags this project
 */

// rum
import vadehavscentret from '../assets/work/vadehavscentret.webp';
import naturkraft from '../assets/work/naturkraft.webp';
import ragnarock from '../assets/work/ragnarock.webp';
import toendermarsken from '../assets/work/toendermarsken.jpg';
import strandingsmuseum from '../assets/work/strandingsmuseum.jpg';
import denGamleBy from '../assets/work/den-gamle-by.webp';
import tekniskMuseum from '../assets/work/teknisk-museum.webp';
import roskildeDomkirke from '../assets/work/roskilde-domkirke.webp';
import lejre from '../assets/work/lejre-ar.webp';

// web
import mdvvs from '../assets/work/mdvvs.webp';
import vvs365 from '../assets/work/vvs365.webp';
import skadedyrKbh from '../assets/work/skadedyr-kbh.webp';
import delocks from '../assets/work/delocks.webp';
import vinduespedersen from '../assets/work/vinduespedersen.webp';
import celciusnordic from '../assets/work/celciusnordic.webp';
import dybendal from '../assets/work/dybendal.webp';
import blackatlas from '../assets/work/blackatlas.webp';
import repto from '../assets/work/repto.webp';
import jr from '../assets/work/jr.webp';
import avc from '../assets/work/avc.webp';
import aplusbad from '../assets/work/aplusbad.webp';

export const projects = [
  {
    slug: 'vadehavscentret',
    channel: 'rum',
    title: 'Vadehavscentret',
    role: 'Projection mapping · Video · Udstillingsopsætning',
    place: 'Ribe',
    year: null,
    summary:
      'Videomateriale og projektioner til centret for det UNESCO-fredede vadehav — fra optagelse til færdig opsætning i udstillingen.',
    body: [
      'For No Parking Production var jeg med hele vejen fra optagelse til opsætning: film og animation blev produceret, kalibreret og mappet på plads i udstillingen om Vadehavet.',
      'Vadehavscentret formidler et af verdens vigtigste tidevandsområder. Projektionerne skulle føje bevægelse og lys til rummene uden at tage opmærksomheden fra selve landskabet.',
    ],
    bar: 'c',
    image: vadehavscentret,
  },
  {
    slug: 'naturkraft',
    channel: 'rum',
    title: 'Naturkraft',
    role: 'Video · Animation · Projektion',
    place: 'Ringkøbing',
    year: null,
    summary: 'Film, animation og projection mapping til interaktive naturzoner om vejr, vand og vind.',
    body: [
      'Naturkraft er en oplevelsespark om den danske natur og dens kræfter. Jeg leverede film og animation til flere af de interaktive zoner og var med til at mappe indholdet på de fysiske flader.',
    ],
    bar: 'g',
    image: naturkraft,
  },
  {
    slug: 'ragnarock',
    channel: 'rum',
    title: 'RAGNAROCK',
    role: 'Projektion · Multiskærm',
    place: 'Roskilde',
    year: null,
    summary:
      'Visuel formidling med projektioner og multiskærmsinstallationer til museet for pop, rock og ungdomskultur.',
    body: [
      'RAGNAROCK er museet for pop, rock og ungdomskultur. Arbejdet handlede om at bygge visuel formidling ud af projektioner og installationer med mange skærme — musikkens energi oversat til lys i rummet.',
    ],
    bar: 'm',
    image: ragnarock,
  },
  {
    slug: 'toendermarsken',
    channel: 'rum',
    title: 'Tøndermarsken',
    role: 'Video · Animation · Projektion',
    place: 'Højer',
    year: null,
    summary: 'Video og projektioner til interaktive installationer om livet i marsken.',
    body: [
      'Interaktive installationer om marsken ved Tønder — dens dyreliv, dens vand og de mennesker der lever af og med den. Jeg stod for video, animation og projektion.',
    ],
    bar: 'y',
    image: toendermarsken,
  },
  {
    slug: 'strandingsmuseum-st-george',
    channel: 'rum',
    title: 'Strandingsmuseum St. George',
    role: 'Filmprojektion · Interaktivt gulv',
    place: 'Thorsminde',
    year: null,
    summary:
      'Filmprojektion, figurskærme og et interaktivt gulv om strandinger på den jyske vestkyst.',
    body: [
      'Museet fortæller om de mange skibsforlis på den jyske vestkyst, særligt de britiske orlogsskibe St. George og Defence i 1811. Jeg arbejdede med filmprojektion, figurskærme og et interaktivt gulv, der trak publikum ind i fortællingen.',
    ],
    bar: 'b',
    image: strandingsmuseum,
  },
  {
    slug: 'den-gamle-by',
    channel: 'rum',
    title: 'Den Gamle By',
    role: 'Film · Animation · Greenscreen',
    place: 'Aarhus',
    year: null,
    summary:
      'Filmsekvenser til udstillingen om automobilens historie og greenscreen-optagelser til det interaktive «Aarhus Fortæller».',
    body: [
      'To opgaver for Den Gamle By: filmsekvenser og animation til udstillingen om automobilens historie, og greenscreen-optagelser til det interaktive formidlingsprojekt «Aarhus Fortæller».',
    ],
    bar: 'r',
    image: denGamleBy,
  },
  {
    slug: 'teknisk-museum',
    channel: 'rum',
    title: 'Teknisk Museum',
    role: 'Animation · Gamification',
    place: 'Helsingør',
    year: null,
    summary: 'Animation og et lille spil om at holde liv i mobilen — «Hjælp, min mobil er død».',
    body: [
      'En legende formidling af batteriteknologi: animation og et lille spil bygget op om den velkendte panik, når mobilen løber tør for strøm.',
    ],
    bar: 'g',
    image: tekniskMuseum,
  },
  {
    slug: 'roskilde-domkirke',
    channel: 'rum',
    title: 'Roskilde Domkirke',
    role: 'VR · Udendørs installation',
    place: 'Roskilde',
    year: null,
    summary: 'VR-prototyper og billedmateriale til en udendørs installation ved domkirken.',
    body: [
      'Prototyper i VR og billedmateriale til en udendørs installation ved den UNESCO-fredede domkirke i Roskilde.',
    ],
    bar: 'b',
    image: roskildeDomkirke,
  },
  {
    slug: 'lejre',
    channel: 'rum',
    title: 'Lejre',
    role: 'AR · Billedmateriale',
    place: 'Lejre',
    year: null,
    summary: 'Augmented reality og visuelt materiale til formidling på stedet.', // TODO Simon: rigtigt sted + omfang
    body: [
      'Augmented reality og visuelt materiale til stedsbunden formidling. TODO: Simon udfylder den rigtige beskrivelse.',
    ],
    bar: 'y',
    image: lejre,
  },

  // --- web · titler/brancher er gæt fra filnavne — Simon retter ---
  {
    slug: 'md-vvs',
    channel: 'web',
    title: 'MD VVS',
    role: 'Design & build',
    place: 'VVS',
    year: null,
    summary: '',
    body: [],
    stack: 'WordPress · Elementor',
    bar: 'c',
    image: mdvvs,
  },
  {
    slug: 'vvs-365',
    channel: 'web',
    title: 'VVS 365',
    role: 'Design & build',
    place: 'VVS · Døgnservice',
    year: null,
    summary: '',
    body: [],
    stack: 'WordPress · Elementor',
    bar: 'c',
    image: vvs365,
  },
  {
    slug: 'skadedyr-koebenhavn',
    channel: 'web',
    title: 'Skadedyr København',
    role: 'Design & build',
    place: 'Skadedyrsbekæmpelse',
    year: null,
    summary: '',
    body: [],
    stack: 'WordPress',
    bar: 'g',
    image: skadedyrKbh,
  },
  {
    slug: 'delocks',
    channel: 'web',
    title: 'Delocks',
    role: 'Design & build',
    place: 'Låsesmed',
    year: null,
    summary: '',
    body: [],
    stack: 'WordPress',
    bar: 'y',
    image: delocks,
  },
  {
    slug: 'vinduespedersen',
    channel: 'web',
    title: 'Vinduespedersen',
    role: 'Design & build',
    place: '',
    year: null,
    summary: '',
    body: [],
    stack: 'WordPress',
    bar: 'b',
    image: vinduespedersen,
  },
  {
    slug: 'celcius-nordic',
    channel: 'web',
    title: 'Celcius Nordic',
    role: 'Design & build',
    place: '',
    year: null,
    summary: '',
    body: [],
    stack: 'WordPress',
    bar: 'c',
    image: celciusnordic,
  },
  {
    slug: 'dybendal',
    channel: 'web',
    title: 'Dybendal',
    role: 'Design & build',
    place: '',
    year: null,
    summary: '',
    body: [],
    stack: 'WordPress',
    bar: 'r',
    image: dybendal,
  },
  {
    slug: 'black-atlas',
    channel: 'web',
    title: 'Black Atlas',
    role: 'Design & build',
    place: '',
    year: null,
    summary: '',
    body: [],
    stack: 'WordPress',
    bar: 'm',
    image: blackatlas,
  },
  {
    slug: 'repto',
    channel: 'web',
    title: 'Repto',
    role: 'Design & build',
    place: '',
    year: null,
    summary: '',
    body: [],
    stack: 'WordPress',
    bar: 'm',
    image: repto,
  },
  {
    slug: 'jr',
    channel: 'web',
    title: 'JR',
    role: 'Design & build',
    place: '',
    year: null,
    summary: '',
    body: [],
    stack: 'WordPress',
    bar: 'b',
    image: jr,
  },
  {
    slug: 'avc',
    channel: 'web',
    title: 'AVC',
    role: 'Design & build',
    place: '',
    year: null,
    summary: '',
    body: [],
    stack: 'WordPress',
    bar: 'b',
    image: avc,
  },
  {
    slug: 'a-plus-bad',
    channel: 'web',
    title: 'A+ Bad',
    role: 'Design & build',
    place: 'Badeværelser',
    year: null,
    summary: '',
    body: [],
    stack: 'WordPress',
    bar: 'c',
    image: aplusbad,
  },
];

export const rumProjects = projects.filter((p) => p.channel === 'rum');
export const webProjects = projects.filter((p) => p.channel === 'web');

export const featured = ['vadehavscentret', 'ragnarock', 'strandingsmuseum-st-george', 'naturkraft']
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter(Boolean);

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const adjacent = (slug) => {
  const list = projects.filter((p) => p.channel === getProject(slug)?.channel);
  const i = list.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? list[i - 1] : list[list.length - 1],
    next: i < list.length - 1 ? list[i + 1] : list[0],
  };
};

export const channelLabel = { rum: 'Rum', web: 'Web' };
