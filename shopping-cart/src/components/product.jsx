import { Link } from "react-router-dom";
import "./product.css";

let Product = () => {
  return (
    <div className="product">
      <Link to="/preview/1">
        <div className="product_img">
          <img src="phone.jpeg" />
        </div>
      </Link>

      <div className="product_button">
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Product;
