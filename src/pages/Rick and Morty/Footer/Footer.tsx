const Footer = ({ english, theme }: { english: boolean; theme: boolean }) => {
  return <div className={theme ? "A" : "B"}>{english ? "A" : "B"}</div>;
};
export default Footer;
