import img_survey_form from "../assets/projects/survey-form.png";
import img_tribute_page from "../assets/projects/tribute-page.png";

type projects = {
  id: number;
  name: { en: string; es: string };
  link: string;
  img?: string;
}[];

const projects: projects = [
  {
    id: 1,
    name: { en: "Survey Form", es: "Formulario Encuesta" },
    link: "/free-code-camp/survey-form",
    img: img_survey_form,
  },
  {
    id: 2,
    name: { en: "Tribute Page", es: "Página tributo" },
    link: "/free-code-camp/tribute-page",
    img: img_tribute_page,
  },
];

export { projects };
