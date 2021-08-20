import Product from "./product";
import "./home.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
let Home = () => {
  let history = useHistory();
  let state = useSelector((state) => state);
  return (
    <>
      <div className="product-preview-container">
        {state.map((el) => {
          return <Product data={el} />;
        })}
      </div>
      <button
        onClick={() => {
          history.push("/cart");
        }}
        className="cart-button"
      >
        <span class="material-icons">shopping_cart</span>
      </button>
    </>
  );
};

export default Home;
