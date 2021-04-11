import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem, i) => (
      <CheckoutItem key={i} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      *Please us the following test credit card for payments*
      <br />
      4242 4242 4242 4242 exp: 01/22 cw: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

// stripe dummy credit cart info
// 4242 4242 4242 4242    exp: 01/22    cw: 123

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
