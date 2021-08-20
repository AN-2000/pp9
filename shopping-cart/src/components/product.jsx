import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions";
import "./product.css";

let Product = () => {
  let dispatch = useDispatch();

  return (
    <div className="product">
      <Link to="/preview/1">
        <div className="product_img">
          <img src="phone.jpeg" />
        </div>
      </Link>

      <div className="product_button">
        <button
          onClick={() => {
            console.log("dispatching an action");
            dispatch(addToCart(1));
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;
