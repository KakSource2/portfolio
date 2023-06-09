type projects_data = {
  id: number;
  name: { es: string; en: string };
  link: string;
  img: string;
  wip: boolean;
}[];

const projects_data: projects_data = [
  {
    id: 0,
    name: { es: "Cambia fondo", en: "Background Shifter" },
    link: "/kak/projects/background-shifter",
    img: "",
    wip: false,
  },
  {
    id: 1,
    name: { es: "Mejor librería", en: "Best Framework" },
    link: "/kak/projects/best-framework",
    img: "",
    wip: false,
  },
  {
    id: 2,
    name: { es: "Frases aleatorias", en: "Random Quotes" },
    link: "/kak/projects/random-quotes",
    img: "",
    wip: false,
  },
  {
    id: 3,
    name: { es: "Reflecciones aleatorias", en: "Random reflections" },
    link: "/kak/projects/random-reflections",
    img: "",
    wip: false,
  },
  {
    id: 4,
    name: { es: "Lista de quehaceres", en: "To do list" },
    link: "/kak/projects/random-reflections",
    img: "",
    wip: true,
  },
  {
    id: 5,
    name: { es: "Tetris", en: "Tetris" },
    link: "/kak/projects/tetris",
    img: "",
    wip: true,
  },
  {
    id: 6,
    name: { es: "Dados", en: "Dices" },
    link: "/kak/projects/dice",
    img: "",
    wip: false,
  },
  {
    id: 7,
    name: { es: "Climas", en: "Weathers" },
    link: "/kak/projects/weather",
    img: "",
    wip: true,
  },
  {
    id: 8,
    name: { es: "Tarot", en: "Tarot" },
    link: "/kak/projects/tarot",
    img: "",
    wip: true,
  },
  {
    id: 9,
    name: { es: "Reproductor de música", en: "Music Player" },
    link: "/kak/projects/music-player",
    img: "",
    wip: true,
  },
  {
    id: 10,
    name: { es: "Generador de memes", en: "Meme generator" },
    link: "/kak/projects/meme-generator",
    img: "",
    wip: true,
  },
  {
    id: 11,
    name: { es: "Acceso", en: "Login" },
    link: "/kak/projects/login",
    img: "",
    wip: false,
  },
  {
    id: 12,
    name: { es: "Aleatorio", en: "Random" },
    link: "/kak/projects/random",
    img: "",
    wip: true,
  },
  {
    id: 13,
    name: { es: "Clicker de galletas", en: "Cookie Clicker" },
    link: "/kak/projects/cookie-clicker",
    img: "",
    wip: true,
  },
];

export default projects_data;
