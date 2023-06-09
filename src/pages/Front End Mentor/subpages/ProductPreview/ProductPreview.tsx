import "./productpreview.css";
import img_product_desktop from "./assets/image-product-desktop.jpg";
import cart from "./assets/icon-cart.svg";
import { useOutletContext } from "react-router-dom";

const ProductPreview = () => {
  const english = useOutletContext();

  return (
    <div className="Product__Preview">
      <main>
        <img className="card__image" src={img_product_desktop} />
        <div>
          <p className="card__category">P E R F U M E</p>
          <h2 className="card__title">Gabrielle Essence Eau De Parfum</h2>
          <p className="card__overview">
            {english
              ? "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL"
              : "Una interpretación floral, solar y voluptuosa compuesta por Olivier Polge, creador de perfume por la Casa de CHANEL"}
          </p>
          <div className="price">
            <span className="discount">$149.99</span>{" "}
            <span className="original">$169.99</span>
          </div>
          <button>
            <img src={cart} /> {english ? "Add to Cart" : "Agregar al carrito"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProductPreview;
