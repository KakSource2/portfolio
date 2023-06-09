type projects = {
  id: number;
  name: { es: string; en: string };
  link: string;
  img?: string;
  wip: boolean;
}[];

const projects: projects = [
  {
    id: 0,
    name: { en: "Background Shifter", es: "Cambia fondo" },
    link: "",
    wip: false,
  },
  {
    id: 1,
    name: { en: "Best Framework", es: "Mejor librería" },
    link: "",
    wip: false,
  },
  {
    id: 2,
    name: { en: "Box Clicker", es: "Cliqueador de cajas" },
    link: "",
    wip: false,
  },
  { id: 3, name: { en: "Dice", es: "Dado" }, link: "", wip: false },
  { id: 4, name: { en: "Login", es: "Login" }, link: "", wip: false },
  {
    id: 5,
    name: { en: "Meme Generator", es: "Generador de memes" },
    link: "",
    wip: false,
  },
  { id: 6, name: { en: "Random", es: "Random" }, link: "", wip: false },
  {
    id: 7,
    name: { en: "Random Quotes", es: "Frases aleatorias" },
    link: "",
    wip: false,
  },
  {
    id: 8,
    name: { en: "Random Reflections", es: "Reflecciones aleatorias" },
    link: "",
    wip: false,
  },
  { id: 9, name: { en: "Tarot", es: "Tarot" }, link: "", wip: false },
  { id: 10, name: { en: "Tetris", es: "Tetris" }, link: "", wip: false },
  {
    id: 11,
    name: { en: "To do list", es: "" },
    link: "Lista de quehaceres",
    wip: false,
  },
  { id: 12, name: { en: "Weather", es: "Clima" }, link: "", wip: false },
];

export default projects;
