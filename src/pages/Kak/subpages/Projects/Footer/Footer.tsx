import style from "./footer.module.scss";

const Footer = ({ english, dark }: { english: boolean; dark: boolean }) => {
  return (
    <div className={dark ? style.footer : `${style.footer} ${style.light}`}>
      {english ? "Just contract me already? !" : "¡Contráteme de una vez!"}
    </div>
  );
};
export default Footer;
