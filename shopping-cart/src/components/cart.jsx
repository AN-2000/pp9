import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions";
let Cart = () => {
  let state = useSelector((state) => state);
  let productsToShow = state.filter((el) => el.incart > 0);
  let dispatch = useDispatch();
  let total = 0;
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Qty</th>
            <th scope="col">Cost</th>
            <th scope="col">Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productsToShow.map((el, index) => {
            total += el.incart * el.Price;
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.incart}</td>
                <td>Rs {el.Price}</td>
                <td>Rs {el.incart * el.Price}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(removeFromCart(el.id));
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td>Rs {total}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cart;
