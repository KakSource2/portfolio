import "../styles/menu.css";
import icon_down from "../assets/icons/down-arrow-icon.png";

const Menu = () => {
  return (
    <div className="Menu">
      <button>
        SURVIVAL GEAR <img src={icon_down} width="10px" />
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
        CUTTING TOOLS <img src={icon_down} width="10px" />
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
        OUTDOOR COOKING <img src={icon_down} width="10px" />
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
        PACKS & BAGS <img src={icon_down} width="10px" />
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
        OUTDOOR APPAREL <img src={icon_down} width="10px" />
        <div className="dropdown-menu">
          <section>
            <b></b>
          </section>
        </div>
      </button>
      <button>
        SURVIVAL TRAINING <img src={icon_down} width="10px" />
        <div className="dropdown-menu">
          <section>
            <b></b>
          </section>
        </div>
      </button>
      <button>
        SURVIVAL BOOKS <img src={icon_down} width="10px" />
        <div className="dropdown-menu">
          <section>
            <b></b>
          </section>
        </div>
      </button>
    </div>
  );
};

export default Menu;
