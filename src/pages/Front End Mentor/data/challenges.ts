import img__interactive_rating from "../assets/interactive-rating.png";
import img__results_summary from "../assets/results-summary.png";

type challenges = {
  id: number;
  name: { es: string; en: string };
  link: string;
  img?: string;
}[];

const challenges: challenges = [
  {
    id: 1,
    name: { es: "Vista previa en columna", en: "Column preview card" },
    link: "/front-end-mentor/column-preview-card",
  },
  {
    id: 2,
    name: { es: "Puntuación interactiva", en: "Interactive rating" },
    link: "/front-end-mentor/interactive-rating",
    img: img__interactive_rating,
  },
  {
    id: 3,
    name: { es: "Vista previa producto", en: "Product preview" },
    link: "/front-end-mentor/product-preview",
  },
  {
    id: 4,
    name: { es: "Sumario resultado", en: "Result summary" },
    link: "/front-end-mentor/results-summary",
    img: img__results_summary,
  },
];

export { challenges };
