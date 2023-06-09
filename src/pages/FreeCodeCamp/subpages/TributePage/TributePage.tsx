import style from "./tributepage.module.scss";
import { useOutletContext } from "react-router-dom";

type outlet = {
  english: boolean;
  dark: boolean;
};

const TributePage = () => {
  document.title = "FCC - Tribute Page";
  const { english, dark }: outlet = useOutletContext();

  return (
    <div
      className={
        !dark ? style.tributepage : `${style.tributepage} ${style.light}`
      }
    >
      <header className={style.title}>
        <h1>Dr. Norman Borlaug</h1>
        <p>
          {english
            ? "The man who saved millions"
            : "El hombre que salvó millones"}
        </p>
      </header>
      <img src="https://c2.staticflickr.com/4/3689/10613180113_fdf7bcd316_b.jpg" />
      <p id="img-caption">
        {english
          ? "Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger."
          : "Dr. Normal Borlaug, el tercero de la izquierda, entrenó a biólogos en México en como incrementar la producción en campos de trigo - parte de su larga-guerra contra el hambre."}
      </p>
      <section>
        <main>
          <h2 id="tribute-info">
            {english
              ? "Here's a time line of Dr. Borlaug's life"
              : "Esta es una línea de tiempo en la vida del Dr. Borlaug's"}
          </h2>
          <ul id="unorderedList">
            <li>
              <b>1914</b> - {english ? "Born in " : "Nacido en "}Cresco, Iowa
            </li>
            <li>
              <b>1933</b> -{" "}
              {english
                ? `Leaves his family's farm to attend the University of Minnesota, thanks to a Depression era program known as the "National Youth Administration"`
                : `
              Abandona la granja de la familiar para ir a la universidad de Minnesota, gracias al programa de la era en depresión conocida como "Administración Nacional de Jóvenes"`}
            </li>
            <li>
              <b>1935</b> -{" "}
              {english
                ? `Has to stop school and save up more money. Works in
              the Civilian Conservation Corps, helping starving Americans. "I
              saw how food changed them", he said. "All of this left scars on
              me."`
                : `Tuvo que dejar la escuela y ahorrar dinero. Trabajó en la Corporación Conservacional Civil, ayudando a hambrientos Americanos. "Vi cómo el tener comida los cambió" dijó "Todo esto dejó cicatrices en mi"`}
            </li>
            <li>
              <b>1937</b> -{" "}
              {english
                ? "Finishes university and takes a job in the US Forestry Service"
                : "Terminó la universidad y toma un trabajo en el Servicio de Forestación de los Estados Unidos"}
            </li>
            <li>
              <b>1938</b> -{" "}
              {english
                ? "Marries wife of 69 years Margret Gibson. Gets laid off due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school study under Stakman, who teaches him about breeding pest-resistent plants."
                : "Se casa con su esposa de 69 años Margret Gibson. Lo echan del trabajo debido a recortes de presupuesto. Inspirado por Elvin Charles Stakman, el vuelve a la escuela a estudiar con bajo la tutoría de Stakman, quien enseña acerca del cultivo de plantas resistentes a las pestes."}
            </li>
            <li>
              <b>1941</b> -{" "}
              {english
                ? "Tries to enroll in the military after the Pearl Harbor attack, but is rejected. Instead, the military asked his lab to work on waterproof glue, DDT to control malaria, disinfectants, and other applied science. "
                : "Intenta unirse a las fuerzas militares después del ataque a Pearl Harbor, pero es rechzado. En cambio, los militares preguntaron a su laboratorio si podían trabajar en un pegamento resisten al agua, DDT para controlar la malaria, desinfectantes, otras aplicaciones de ciencia. "}
            </li>
            <li>
              <b>1942</b> -{" "}
              {english
                ? "Receives a Ph.D. in Genetics and Plant Pathology"
                : "Recibe su doctorado en genéticas y patología en plantas"}
            </li>
            <li>
              <b>1944</b> -{" "}
              {english
                ? "Rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico to head a new plant pathology program. Over the next 16 years, his team breeds 6,000 different strains of disease resistent wheat - including different varieties for each major climate on Earth."
                : "Rechaza un salario con aumento del 100% de Dupont, abandona a su esposa embarazada, y vuela a México a la cabeza de la nueva planta con proyección en patología. En los siguientes 16 años, su equipo crecen más de 6,000 diferentes genes de trigo resistente a las pestes - incluyendo diferentes variedades para los climas más importantes de la Tierra"}
            </li>
            <li>
              <b>1945</b> -{" "}
              {english
                ? "Discovers a way to grown wheat twice each season, doubling wheat yields"
                : "Descubre una manera de crecer trigo 2 veces al año, duplicando la producción de trigo"}
            </li>
            <li>
              <b>1953</b> -{" "}
              {english
                ? "crosses a short, sturdy dwarf breed of wheat with a high-yeidling American breed, creating a strain that responds well to fertilizer. It goes on to provide 95% of Mexico's wheat."
                : "cruza una pequeña, dura y enana semilla de trigo con una semilla de alta producción americana, creando una genética que responde bien al fertilizante. Esto termina proveyendo al 95% del trigo de México"}
            </li>
            <li>
              <b>1962</b> - {english ? "" : ""} Visits Delhi and brings his
              high-yielding strains of wheat to the Indian subcontinent in time
              to help mitigate mass starvation due to a rapidly expanding
              population
            </li>
            <li>
              <b>1970</b> - receives the Nobel Peace Prize
            </li>
            <li>
              <b>1983</b> - helps seven African countries dramatically increase
              their maize and sorghum yields
            </li>
            <li>
              <b>1984</b> - becomes a distinguished professor at Texas A&M
              University
            </li>
            <li>
              <b>2005</b> - states "we will have to double the world food supply
              by 2050." Argues that genetically modified crops are the only way
              we can meet the demand, as we run out of arable land. Says that GM
              crops are not inherently dangerous because "we've been genetically
              modifying plants and animals for a long time. Long before we
              called it science, people were selecting the best breeds." 2009 -
              dies at the age of 95.
            </li>
          </ul>
          <p>
            click{" "}
            <a
              id="tribute-link"
              href="https://en.wikipedia.org/wiki/Norman_Borlaug"
              target="_blank"
            >
              here
            </a>{" "}
            for more info
          </p>
        </main>
      </section>
    </div>
  );
};

export default TributePage;
