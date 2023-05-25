import { useState } from "react";
import Box from "./compenent/Box";
import "./random.css";

const Random = () => {
  const [currItem, setCurrItem] = useState("Box");
  const [currStyle, setCurrStyle] = useState({
    height: "50px",
    width: "50px",
    borderRadius: "",
  });

  return (
    <div className="Random">
      <div className="config">
        <h2>Config</h2>
        <div>
          <select
            name="shapeSelector"
            defaultValue="Box"
            onChange={(e) => setCurrItem(e.target.value)}
            id="shape"
          >
            <option value="Box">Box</option>
            <option value="Rectangle">Rectangle</option>
            <option value="Circle">Circle</option>
          </select>
        </div>
        <div>
          <span>
            <p>Height</p>
            <input
              type="number"
              pattern="[0-9]"
              onChange={(e) =>
                setCurrStyle((prevStyle) => {
                  return { ...prevStyle, height: `${e.target.value}px` };
                })
              }
            />
          </span>
          <span>
            <p>Width</p>
            <input
              type="number"
              pattern="[0-9]"
              onChange={(e) =>
                setCurrStyle((prevStyle) => {
                  return { ...prevStyle, width: `${e.target.value}px` };
                })
              }
            />
          </span>
          <span>
            <p>Border Radius</p>
            <input
              type="number"
              onChange={(e) =>
                setCurrStyle((prevStyle) => {
                  return { ...prevStyle, borderRadius: `${e.target.value}px` };
                })
              }
            />
          </span>
        </div>
      </div>
      <div className="Item_Randomizer">
        {currItem === "Box" && <Box {...currStyle} />}
        {currItem === "Circle" && <p>Circle</p>}
        {currItem === "Rectangle" && <p>Rentangle</p>}
      </div>
    </div>
  );
};

export default Random;
