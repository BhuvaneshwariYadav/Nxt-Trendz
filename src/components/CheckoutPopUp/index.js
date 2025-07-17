import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'

class CheckoutPopUp extends Component {
  state = {optionSelelctd: '', confirmPayment: false}

  changePayment = e => {
    this.setState({optionSelelctd: e.target.value})
  }

  confirm = () => {
    const {optionSelelctd} = this.state
    if (optionSelelctd !== '') this.setState({confirmPayment: true})
  }

  render() {
    const {itemsCount, total} = this.props
    const {confirmPayment, optionSelelctd} = this.state
    return (
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button type="button" className="checkout-button">
              Checkout
            </button>
          }
        >
          {confirmPayment ? (
            <p>Your order has been placed successfully</p>
          ) : (
            <div>
              <input
                type="radio"
                id="NetBanking"
                name="payment-option"
                value="NetBanking"
                disabled
              />

              <label htmlFor="NetBanking">Net Banking</label>
              <br />
              <input
                type="radio"
                id="CashonDelivery"
                name="payment-option"
                value="CashonDelivery"
                onClick={this.changePayment}
              />
              <label htmlFor="CashonDelivery">Cash on Delivery</label>
              <br />
              <p>{itemsCount}</p>
              <p>{total}</p>
              <button
                type="button"
                onClick={this.confirm}
                disabled={optionSelelctd !== 'CashonDelivery'}
              >
                Confirm Order
              </button>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default CheckoutPopUp
