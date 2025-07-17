import CartContext from '../../context/CartContext'
import CheckoutPopUp from '../CheckoutPopUp'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const count = cartList.length
      const amt = cartList.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0,
      )
      return (
        <div className="cart-summary-container">
          <h1 className="order-total-heading">Order Total:</h1>
          <h1 className="order-total-amount">Rs {amt}/-</h1>
          <p className="items-in-cart-text">{count} Items in cart</p>
          <CheckoutPopUp itemsCount={count} total={amt} />
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
