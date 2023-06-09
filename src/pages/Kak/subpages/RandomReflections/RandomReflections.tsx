import { useState } from "react";
import "./random-reflections.css";

import small_mind_laughing_at_reflective_mind from "./assets/reflections/small-mind-laughing-at-reflective-mind.png";
import success_not_ausence from "./assets/reflections/success-not-ausence.png";
import discipline_is_not_about_perfection from "./assets/reflections/Discipline-is-not-about-perfection.png";
import dont_let_your_loneliness_reconnect_with_toxic_people from "./assets/reflections/Dont-let-your-loneliness-make-you-reconnect-with-toxic-people.png";
import eyes_show_what_smile_hides from "./assets/reflections/Eyes-show-what-smiles-hides.png";
import haces_99_cosas_bien from "./assets/reflections/Haces-99-cosas-bien.png";
import its_your_turn_to_meet_the_reason_why_you_never_settled from "./assets/reflections/Its-your-turn-to-meet-the-reason-why-you-never-settled.png";
import la_mejor_manera_de_evitar_que_un_prisionero_escape from "./assets/reflections/La-mejor-manera-de-evitar-que-un-prisionero-escape.png";
import Leadership_is_not_a_license_to_do_less from "./assets/reflections/Leadership-is-not-a-license-to-do-less.png";
import Learn_to_be_present_and_enjoy_the_moment from "./assets/reflections/Learn-to-be-present-and-enjoy-the-moment.png";
import Love_didnt_hurt_you from "./assets/reflections/Love-didnt-hurt-you.png";
import Negativity_and_dark_thoughts_are_still_part_of_growth from "./assets/reflections/Negativity-and-dark-thoughts-are-still-part-of-growth.png";
import No_le_digas_a_nadie_lo_que_estas_haciendo_hasta_que_termines from "./assets/reflections/No-le-digas-a-nadie lo-que-estas-haciendo-hasta-que-termines.png";
import Nobody_is_your_friend_until_they_defend_your_name_in_your_absence from "./assets/reflections/Nobody_is_your_friend_until_they_defend_your_name_in_your_absence.png";
import Once_you_mature_you_realize_that_silence_is_more_powerful_than_proving_a_point from "./assets/reflections/Once-you-mature-you-realize-that-silence-is-more-powerful-than-proving-a-point.png";
import Plants_do_own_requirements_in_order_to_grow_And_so_do_people from "./assets/reflections/Plants-do-own-requirements-in-order-to-grow-And-so-do-people.png";
import Set_limits_not_everyone_is_deserving from "./assets/reflections/Set-limits-not-everyone-is-deserving.png";
import some_people_dont_see_the_red_flags_because_they_are_misusing_them_as_blindfolds from "./assets/reflections/some-people-dont-see-the-red-flags-because-they-are-misusing-them-as-blindfolds.png";
import Stop_being_available_to_unavailable_people from "./assets/reflections/Stop-being-available-to-unavailable-people.png";
import the_more_you_let_go_the_higher_you_rise from "./assets/reflections/the-more-you-let-go-the-higher-you-rise.png";
import The_past_can_hurt from "./assets/reflections/The_past_can_hurt.png";
import the_problems_we_dont_fix_become_our_limits from "./assets/reflections/the-problems-we-dont-fix-become-our-limits.png";
import There_are_all_sort_of_myths_about_how_long_it_takes_to_build_a_new_habit from "./assets/reflections/There-are-all-sort-of myths-about-how-long-it-takes-to-build-a-new-habit.png";
import Those_who_know_do_not_speak_Those_who_speak_do_not_know from "./assets/reflections/Those-who-know-do-not-speak-Those-who-speak-do-not-know.png";
import Toxic_people_dont_apologise_they_explain_why_they_did_it from "./assets/reflections/Toxic-people-dont-apologise-they-explain-why-they-did-it.png";
import Understand_when_someone_no_longer_positively_affects_your_life_LET_THEM_GO from "./assets/reflections/Understand-when-someone-no-longer-positively-affects-your-life-LET-THEM-GO.png";
import You_are_not_meant_to_live_like_the_others_you_are_meant_to_live_as_yourself from "./assets/reflections/You-are-not-meant-to-live-like-the-others-you-are-meant-to-live-as-yourself.png";
import You_should_feel_loved_without_feeling_like_you_are_begging_for_it from "./assets/reflections/You-should-feel-loved-without-feeling-like-you-are-begging-for-it.png";
import Youre_going_to_be_happy_said_life from "./assets/reflections/Youre-going-to-be-happy-said-life.png";
import Youre_only_unrealistic_for_someone_who_wants_to_keep_you_on_their_level from "./assets/reflections/Youre-only-unrealistic-for-someone-who-wants-to-keep-you-on-their-level.png";
import { useOutletContext } from "react-router-dom";

let reflections: { title: string; url: string }[] = [
  {
    title:
      "The success isn't the ausence of mistakes, just the capacity to working with them.",
    url: success_not_ausence,
  },
  {
    title:
      "Hay todo tipos de mitos acerca de lo mucho que llevar crear un nuevo hábito: 21 days, 30, 66 days. La verdad es que, no hay nada acerca del tiempo pasar que forme mágicamente un nuevo hábito, los hábitos se crean basados en la repetición y en la frecuencia, no en el reloj dando vueltas.",
    url: There_are_all_sort_of_myths_about_how_long_it_takes_to_build_a_new_habit,
  },
  {
    title: "Aquellos que saben no hablan, y aquellos que hablan no saben.",
    url: Those_who_know_do_not_speak_Those_who_speak_do_not_know,
  },
  {
    title:
      "La gente tóxica no pide perdón, solo explican porque hicieron lo que hicieron.",
    url: Toxic_people_dont_apologise_they_explain_why_they_did_it,
  },
  {
    title:
      "Entiende que cuando alguien no afecte positivamente a tu vida, ¡DÉJALOS IR!",
    url: Understand_when_someone_no_longer_positively_affects_your_life_LET_THEM_GO,
  },
  {
    title:
      "No se supone que vivas como los otros, se supone que vivas como vos mismo.",
    url: You_are_not_meant_to_live_like_the_others_you_are_meant_to_live_as_yourself,
  },
  {
    title: "Deberías sentirte amado sin sentir que estas suplicando por ello.",
    url: You_should_feel_loved_without_feeling_like_you_are_begging_for_it,
  },
  {
    title: "Vas a ser feliz dijo la vida, pero primero te voy a hacer fuerte.",
    url: Youre_going_to_be_happy_said_life,
  },
  {
    title: "Solo eres irreal para alguien que quiere mantenerte en su nivel",
    url: Youre_only_unrealistic_for_someone_who_wants_to_keep_you_on_their_level,
  },
  {
    title:
      "The best to avoid that a prisoner escapes is to make sure they never known they are in prison",
    url: la_mejor_manera_de_evitar_que_un_prisionero_escape,
  },
  {
    title: "El liderazgo no es una licencia para hacer menos",
    url: Leadership_is_not_a_license_to_do_less,
  },
  {
    title: "Aprende a estar presente y disfrutar el momento",
    url: Learn_to_be_present_and_enjoy_the_moment,
  },
  {
    title: "El amor no te lastimó, alguien que no sabe como amarte te lastimó.",
    url: Love_didnt_hurt_you,
  },
  {
    title:
      "La negatividad y los pensamientos oscuros también son parte del crecimiento.",
    url: Negativity_and_dark_thoughts_are_still_part_of_growth,
  },
  {
    title: "Don't tell anyone about what you're doing until you finished it.",
    url: No_le_digas_a_nadie_lo_que_estas_haciendo_hasta_que_termines,
  },
  {
    title: "Nadie es tu amigo hasta que defienden tu nombre en tu ausencia.",
    url: Nobody_is_your_friend_until_they_defend_your_name_in_your_absence,
  },
  {
    title:
      "Una vez madurás te das cuenta que el silencia es más poderoso que probar un punto.",
    url: Once_you_mature_you_realize_that_silence_is_more_powerful_than_proving_a_point,
  },
  {
    title:
      "Todas las plantas tiene sus propios requerimientos en orden para crecer, como también la gente.",
    url: Plants_do_own_requirements_in_order_to_grow_And_so_do_people,
  },
  {
    title:
      "Algunas personas no ven las banderas rojas porque las estan usando equivocadamente como vendas para cubrirse los ojos",
    url: some_people_dont_see_the_red_flags_because_they_are_misusing_them_as_blindfolds,
  },
  {
    title: "Cuanto más dejes ir, más alto te alzas",
    url: the_more_you_let_go_the_higher_you_rise,
  },
  {
    title: "Pon límites, no todos se lo merecen.",
    url: Set_limits_not_everyone_is_deserving,
  },
  {
    title: "Deja de estar disponible para gente que no está disponible.",
    url: Stop_being_available_to_unavailable_people,
  },
  {
    title:
      "El pasado puede doler pero de la manera que yo lo veo puedes correr de el o aprender de el.",
    url: The_past_can_hurt,
  },
  {
    title:
      "Los problemas que no solucionamos se convierten en nuestros límites",

    url: the_problems_we_dont_fix_become_our_limits,
  },
  {
    title: "*Pequeña mente riéndose de una mente reflectiva*",
    url: small_mind_laughing_at_reflective_mind,
  },
  {
    title:
      "La disciplina no es acerca de la perfección, es acerca de la continuidad",
    url: discipline_is_not_about_perfection,
  },
  {
    title: "No dejes que tu soledad te haga reconectar con gente tóxica.",
    url: dont_let_your_loneliness_reconnect_with_toxic_people,
  },
  {
    title: "Los ojos muestran lo que la sonrisa oculta.",
    url: eyes_show_what_smile_hides,
  },
  {
    title:
      "You do 99 things correctly, but if you 1 wrong they forget the other 99.",
    url: haces_99_cosas_bien,
  },
  {
    title: "Es tu turno de conocer la razón de por qué nunca te asentaste",
    url: its_your_turn_to_meet_the_reason_why_you_never_settled,
  },
];

let RandomReflection = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const english = useOutletContext();

  let RNG;
  let changer = () => {
    RNG = Math.floor(Math.random() * reflections.length);
    setUrl(reflections[RNG].url);
    setTitle(reflections[RNG].title);
  };

  const createRandomButtons = () => {
    const r = () => Math.floor(Math.random() * 255);
    const style = {
      color: `rgb(${r()} ${r()} ${r()}})`,
      backgroundColor: `rgb(${r()} ${r()} ${r()})`,
    };
    return style;
  };

  return (
    <div className="ReflexionGenerator">
      <main>
        <button
          style={createRandomButtons()}
          title="Press me to get a reflection!"
          onClick={() => changer()}
        >
          {english ? "Random reflection" : "Reflexión aleatoria"}
        </button>
        <h3>{title}</h3>
        <img alt={url} src={url}></img>
      </main>
    </div>
  );
};

export default RandomReflection;
