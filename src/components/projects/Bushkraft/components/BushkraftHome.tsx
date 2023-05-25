import "../styles/bushkrafthome.css";
import campfire_top from "../assets/offers/campfire-top.jpg";
import campfire_middle from "../assets/offers/campfire-middle.jpg";
import campfire_bottom from "../assets/offers/campfire-bottom.jpg";

const BushkraftHome = () => {
  return (
    <div className="Bush-Home">
      <div className="offers">
        <div>
          <div>
            <h3>THE BEST GEAR AT THE BEST PRICE!</h3>
            <div>
              ITEM 1 <span>NOW 25.99$</span>
            </div>
            <div>
              ITEM 2 <span>NOW 39.99$</span>
            </div>
            <div>
              ITEM 3 <span>NOW 19.99$</span>
            </div>
            <div>
              ITEM 4 <span>NOW 14.99$</span>
            </div>
            <div>
              ITEM 5 <span>NOW 55.99$</span>
            </div>
          </div>
          <div>SOME GREAT DEAL</div>
        </div>
        <div className="suggestions">
          <div
            style={{
              backgroundImage: `url(${campfire_top})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          >
            <p>PATHFINDER DEALER</p>
          </div>
          <div
            style={{
              backgroundImage: `url(${campfire_middle})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          >
            <p>CURBSIDE PICKUP</p>
          </div>
          <div
            style={{
              backgroundImage: `url(${campfire_bottom})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p>NEWSLETTER</p>
          </div>
        </div>
        <h2>FEATURED PRODUCTS</h2>
        <div className="featured">
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
        </div>
      </div>
    </div>
  );
};

export default BushkraftHome;
