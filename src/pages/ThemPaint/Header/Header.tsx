import style from "./header.module.scss";
const Header = ({
  english,
  changeEnglish,
  dark,
  changeDark,
}: {
  english: boolean;
  changeEnglish: () => void;
  dark: boolean;
  changeDark: () => void;
}) => {
  return (
    <div className={style.header}>
      <h2 className={style.logo}>
        Them<b>Paint</b>
      </h2>
      <div className={style.nav__btns}>
        <button>{english ? "Home" : "Inicio"}</button>
        <button>{english ? "Services" : "Servicios"}</button>
        <button>{english ? "Portfolio" : "Portafolio"}</button>
        <button>{english ? "Contact us" : "Contáctenos"}</button>
      </div>
      <button onClick={() => changeEnglish()}>
        {english ? "Cambiar a Español" : "Change to English"}
      </button>
      <button className={style.dark} onClick={() => changeDark}>
        {dark ? "Change to Light" : "Change to Dark"}
      </button>
    </div>
  );
};
export default Header;
