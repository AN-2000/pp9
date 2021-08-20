import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions";
import "./product.css";

let Product = (props) => {
  let dispatch = useDispatch();

  return (
    <div className="product">
      <Link to={`/preview/${props.data.id}`}>
        <div className="product_img">
          <img src={props.data.img} />
        </div>
      </Link>

      <div className="product_button">
        <button
          onClick={() => {
            dispatch(addToCart(props.data.id));
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;
