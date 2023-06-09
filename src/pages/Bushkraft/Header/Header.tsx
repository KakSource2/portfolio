import style from "./header.module.scss";
import icon_down from "../assets/icons/down-arrow-icon.png";

// https://www.youtube.com/watch?v=S-VeYcOCFZw&ab_channel=WebDevSimplified

const Header = ({
  english,
  changeLocale,
  dark,
  changeDark,
}: {
  english: boolean;
  changeLocale: () => void;
  dark: boolean;
  changeDark: () => void;
}) => {
  return (
    <div className={dark ? style.header : `${style.header} ${style.light}`}>
      <main>
        <h2>
          <b>Bush</b>Kraft
        </h2>
        <div className={style.navbar}>
          <div className={style.some_btns}>
            <a>{english ? "Help Center" : "Centro de ayuda"}</a>
            <a>{english ? "Contact Us" : "Contáctenos"}</a>
            <a>{english ? "Mission Statement" : "Nuestra misión"}</a>
            <a>{english ? "Retailers" : "Minoristas"}</a>
            <a>{english ? "Wishlist" : "Lista de deseos"}</a>
            <a>{english ? "Log In" : "Acceso"}</a>
          </div>
          <div className={style.config_btns}>
            <form>
              <input type="text" />
              <button>{english ? "Search" : "Buscar"}</button>
            </form>
            <button onClick={() => changeLocale()}>
              {english ? "Cambiar a Español" : "Change to English"}
            </button>
            <button onClick={() => changeDark()}>
              {dark ? "icon_sun" : "icon_dark"}Dark
            </button>
          </div>
        </div>
      </main>
      <p className={style.news}>
        {english
          ? "20% discount on Shovels, Jumpers, and light-rods!"
          : "¡20% de descuento en Palas, Camperas y Varas de incendio!"}
      </p>
      <div className={style.menu}>
        <button>
          <p>{english ? "SURVIVAL GEAR" : "EQUIPO DE SUPERVIVENCIA"}</p>
          <img src={icon_down} width="10px" />
        </button>
        {/* <div className="dropdown-menu">
        <section>
          <b>SURVIVAL KITS</b>
        </section>
        <section>
          <b>COMBUSTION DEVICES</b>
          <p>Ferro Rods</p>
          <p>Fire Starting Kits</p>
          <p>Infernos & Sure Fire</p>
          <p>Waterproof Matches</p>
          <p>Natural Kindling Materials</p>
          <p>Magnifying Lens</p>
          <p>Flint and Steel</p>
        </section>
        <section>
          <b>CARGO TAPE</b>
        </section>
        <section>
          <b>COTTON BANDANAS</b>
        </section>
        <section>
          <b>CORDAGE</b>
          <p>Paracord</p>
          <p>Bank Line</p>
          <p>Mule Tape</p>
          <p>Cordage Accesories</p>
          <p>Sail Needles</p>
        </section>
        <section>
          <b>CANDLING DEVICES</b>
          <p>Headlamps</p>
          <p>Candles</p>
          <p>Lanterns</p>
        </section>
        <section>
          <b>COVER & SHELTER</b>
          <p>Tarps & Hammocks</p>
          <p>Oilskin Products</p>
          <p>Ponchos</p>
          <p>Sleeping Bags</p>
          <p>Shelter Accesories</p>
        </section>
        <section>
          <b>NAVIGATION</b>
          <p>Compasses</p>
          <p>Map Tools</p>
          <p>Ranger Pace Beads</p>
          <p>Primitive Range Finder</p>
          <p>Navigation Accesories</p>
        </section>
        <section>
          <b>FORGED GOODS</b>
        </section>
        <section>
          <b>TRAPPING SUPPLIES</b>
          <p>Traps</p>
          <p>Trapping Tools</p>
        </section>
        <section>
          <b>FIRST AID</b>
        </section>
        <section>
          <b>READY TO EAT FOOD</b>
        </section>
        <section>
          <b>OUTDOOR APPAREL</b>
          <p>Boots</p>
          <p>Oil Skin Gear</p>
          <p>Shirts & Hoodies</p>
          <p>Caps</p>
          <p>Shemagh & Scarves</p>
          <p>Ponchos</p>
          <p>Patches</p>
        </section>
      </div> */}
        <button>
          <p>{english ? "CUTTING TOOLS" : "HERRAMIENTAS PARA CORTAR"}</p>
          <img src={icon_down} width="10px" />
          {/* <div className="dropdown-menu">
          <section>
            <b>SURVIVAL KNIVES</b>
            <p>PKS Knives</p>
            <p>Mora Knives</p>
            <p>Pocket Knives</p>
            <p>Spear Points</p>
          </section>
          <section>
            <b>WOODSMAN'S PAL</b>
          </section>
          <section>
            <b>MORA KNIVES</b>
          </section>
          <section>
            <b>WOOD WORKING</b>
            <p>Carving Knives</p>
            <p>Auger Bits</p>
          </section>
          <section>
            <b>LEATHER SHEATS</b>
          </section>
          <section>
            <b>SAWS</b>
            <p>Folding Saw</p>
            <p>Bow Saw</p>
            <p>Folding Hand Saw</p>
            <p>Replacement Blades</p>
            <p>Folding Saw Sheaths Blades</p>
          </section>
          <section>
            <b>HATCHETS</b>
          </section>
          <section>
            <b>AXES</b>
            <p>Hults Bruk</p>
            <p>Council Tool</p>
            <p>Axe Accesories</p>
            <p>Axe Sharpening Supplies</p>
          </section>
          <section>
            <b>KNIFE SHARPENING SUPPLIES</b>
          </section>
        </div> */}
        </button>
        <button>
          <p>{english ? "OUTDOOR COOKING" : "COCINA EXTERIOR"}</p>
          <img src={icon_down} width="10px" />
          {/* <div className="dropdown-menu">
          <section>
            <b>STAINLESS STEEL CONTAINERS</b>
            <p>Pots & Pans</p>
            <p>Canteens</p>
            <p>Bottles</p>
            <p>Containers</p>
            <p>Mess Kits</p>
          </section>
          <section>
            <b>TITANIUM COOKWARE</b>
          </section>
          <section>
            <b>BAYOU CLASSIC CAST IRON</b>
          </section>
          <section>
            <b>STOVES & GRILLS</b>
          </section>
          <section>
            <b>COOKING KITS</b>
          </section>
          <section>
            <b>READY TO EAT FOOD</b>
          </section>
          <section>
            <b>EATING TOOLS</b>
            <p>Mess Kits</p>
            <p>Plates & Bowls</p>
            <p>Eating Utensils</p>
            <p>Cups</p>
            <p>Kupilka Sets</p>
          </section>
          <section>
            <b>FOOD STORAGE</b>
          </section>
          <section>
            <b>STEEL STORAGE TINS</b>
          </section>
          <section>
            <b>WATER FILTRATION</b>
          </section>
          <section>
            <b>HAND-FORGED COOKING TOOLS</b>
          </section>
        </div> */}
        </button>
        <button>
          <p>{english ? "PACKS & BAGS" : "BOLSAS Y MOCHILAS"}</p>
          <img src={icon_down} width="10px" />
          {/* <div className="dropdown-menu">
          <section>
            <b>HAVERSACKS</b>
          </section>
          <section>
            <b>DRY BAGS</b>
          </section>
          <section>
            <b>WAXED CANVAS</b>
          </section>
          <section>
            <b>CANVAS BACK PACKS</b>
          </section>
          <section>
            <b>DULUTH PACKS</b>
          </section>
          <section>
            <b>NYLON BACKPACKS</b>
          </section>
          <section>
            <b>CANVAS UTILITY BAGS</b>
          </section>
          <section>
            <b>DYNEEMA BAGS</b>
          </section>
          <section>
            <b>MOLLE BAGS & POUCHES</b>
          </section>
          <section>
            <b>LEATHER BAGS</b>
          </section>
          <section>
            <b>BURLAP BAGS</b>
          </section>
          <section>
            <b>SMALL BAGS & POUCHES</b>
          </section>
          <section>
            <b>ACCESORIES</b>
          </section>
        </div> */}
        </button>
        <button>
          <p>{english ? "OUTDOOR APPAREL" : "ROPA DE EXTERIOR"}</p>
          <img src={icon_down} width="10px" />
          <div className="dropdown-menu">
            <section>
              <b></b>
            </section>
          </div>
        </button>
        <button>
          <p>
            {english ? "SURVIVAL TRAINING" : "ENTRENAMIENTO DE SUPERVIVENCIA"}
          </p>
          <img src={icon_down} width="10px" />
          <div className="dropdown-menu">
            <section>
              <b></b>
            </section>
          </div>
        </button>
        <button className={style.dropdown}>
          <p>{english ? "SURVIVAL BOOKS" : "LIBROS DE SUPERVIVENCIA"}</p>
          <img src={icon_down} width="10px" />
          <div className={style.dropdown_menu}>
            <section>
              <b>sas?</b>
            </section>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
