import style from "./header.module.scss";
import i_sun from "../assets/icons/sun.png";
import i_moon from "../assets/icons/moon.png";
// import MusicPlayer from "./components/MusicPlayer";
import swal from "sweetalert";

const Navbar = ({
  english,
  dark,
  localeChanger,
  changeDark,
}: {
  english: boolean;
  dark: boolean;
  localeChanger: () => void;
  changeDark: () => void;
}) => {
  const sendMeToLinkedIn = () => {
    swal({
      icon: "info",
      text: english
        ? "You will be redirected to my LinkedIn profile.."
        : "Serás redireccionado a mi perfil de LinkedIn..",
      buttons: {
        cancel: { visible: true, text: english ? "Cancel" : "Cancelar" },
        confirm: {
          text: english ? "Let's go!" : "Vamos",
        },
      },
    }).then((val) => {
      if (val) {
        window.location.href =
          "https://www.linkedin.com/in/gaston-bernardez-64437b209/";
      }
    });
  };

  return (
    <header className={dark ? style.header : `${style.header} ${style.light}`}>
      <button onClick={sendMeToLinkedIn} className={style.title}>
        Gaston Bernardez
      </button>
      <div className={style.btns}>
        <a href="#apps">Apps</a>
        <a href="#skills">{!english ? "Habilidades" : "Skills"}</a>
        {/* <MusicPlayer /> */}
      </div>
      <div className={style.config}>
        <button onClick={() => localeChanger()}>
          {english ? "English" : "Español"}
        </button>
        <button
          onClick={() => changeDark()}
          className={dark ? "dark-mode" : "light-mode"}
        >
          {dark ? <img src={i_sun} /> : <img src={i_moon} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
