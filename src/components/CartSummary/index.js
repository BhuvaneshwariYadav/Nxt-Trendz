// Write your code here
import CartContext from '../../context/CartContext'
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
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
