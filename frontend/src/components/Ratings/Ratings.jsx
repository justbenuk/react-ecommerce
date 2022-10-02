import React from "react";

//styles
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";
const Ratings = ({ value, text, color }) => {
  const style = { color: `${color}` };
  return (
    <div className="rating">
      <span>
        {value >= 1 ? (
          <ImStarFull style={style} />
        ) : value >= 0.5 ? (
          <ImStarHalf style={style} />
        ) : (
          <ImStarEmpty style={style} />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <ImStarFull style={style} />
        ) : value >= 1.5 ? (
          <ImStarHalf style={style} />
        ) : (
          <ImStarEmpty style={style} />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <ImStarFull style={style} />
        ) : value >= 2.5 ? (
          <ImStarHalf style={style} />
        ) : (
          <ImStarEmpty style={style} />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <ImStarFull style={style} />
        ) : value >= 2.5 ? (
          <ImStarHalf style={style} />
        ) : (
          <ImStarEmpty style={style} />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <ImStarFull style={style} />
        ) : value >= 4.5 ? (
          <ImStarHalf style={style} />
        ) : (
          <ImStarEmpty style={style} />
        )}
      </span>
      <span> {text && text}</span>
    </div>
  );
};

export default Ratings;
