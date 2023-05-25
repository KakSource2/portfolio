import "../styles/header.css";
import bushkraft_logo from "../assets/bushkraft logo.png";
import icon_shopping_cart from "../assets/icons/shopping-cart.png";

const Header = () => {
  const myStyle = {
    backgroundImage: `url(${bushkraft_logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="Header" style={myStyle}>
      <img className="logo" src={bushkraft_logo} />
      <div className="btns">
        <div className="header-btns">
          <a>Help Center</a>
          <a>Contact Us</a>
          <a>Mission Statement</a>
          <a>Retailers</a>
          <a>Wishlist</a>
          <a>Log In</a>
        </div>
        <div className="search-cart">
          <input placeholder="Search" type="text" />
          <button className="cart">
            <p>
              CART <span>(X)</span>
            </p>
            <img src={icon_shopping_cart}></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
