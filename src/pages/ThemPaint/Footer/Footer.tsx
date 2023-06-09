const Footer = ({ english, dark }: { english: boolean; dark: boolean }) => {
  return (
    <div className={dark ? "" : ""}>{english ? "Footer" : "Pie de página"}</div>
  );
};
export default Footer;
